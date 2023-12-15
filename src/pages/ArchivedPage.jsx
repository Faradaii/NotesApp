import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getArchivedNotes, deleteNote, unarchiveNote, archiveNote, getNote } from '../utils/local-data';
import { showDeleteModal } from '../utils';
import SearchBar from '../components/SearchBar';
import NoData from '../components/note/NoData';
import NoteList from '../components/note/NoteList';

function ArchivedPageWrapper(){
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchq = searchParams.get("searchq");

    function changeSearch(searchq) {
        setSearchParams({ searchq });
    }
    return (
        <ArchivedPage defaultSearchq={searchq} keywordChange={changeSearch} />
    );
}

class ArchivedPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: getArchivedNotes() ,
            searchq: props.defaultSearchq || '',
        }

        this.refreshNotes = () => {
            this.setState(() => {
                return {
                    notes: getArchivedNotes(),
                };
            });
        }

        this.onKeywordChangeHandler = (searchq) => {
            this.setState(() => {
                return {
                    searchq,
                };
            });
            this.props.keywordChange(searchq);
        }

        this.onDeleteHandler = async (id) => {
            if (await showDeleteModal()) {
                deleteNote(id);
            }
            this.refreshNotes();
        }
        
        this.onArchieveHandler = (id) => {
            let note = getNote(id);
            note.archived ? unarchiveNote(id) : archiveNote(id);
            this.refreshNotes();
        }
    }

    render(){
        let notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.searchq.toLowerCase());
        });
        return(
            <div className="mx-8 relative">
                <div>
                    <SearchBar searchq={this.state.searchq} onKeywordChange={this.onKeywordChangeHandler}/>
                </div>
                <div>
                    {   
                        notes.length > 0 ? 
                        <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchieveHandler} /> : <NoData />
                    }
                </div>
            </div>
        );
    }
}

ArchivedPage.propTypes = {
    defaultSearchq: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};

export default ArchivedPageWrapper;