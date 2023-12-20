import React from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getActiveNotes, deleteNote, archiveNote} from '../utils/network-data';
import { showDeleteModal } from '../utils';
import SearchBar from '../components/SearchBar';
import NoData from '../components/note/NoData';
import NoteList from '../components/note/NoteList';
import ButtonLink from '../components/button/ButtonLink';
import NoteListLoading from '../components/loading/NoteListLoading';
import LocaleContext from '../contexts/LocaleContext';

function HomePageWrapper(){
    const [ searchParams, setSearchParams ] = useSearchParams();
    const searchq = searchParams.get("searchq");

    function changeSearch(searchq) {
        setSearchParams({ searchq });
    }
    return (
        <HomePage defaultSearchq={searchq} keywordChange={changeSearch}/>
    );
}

class HomePage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            notes: [],
            searchq: props.defaultSearchq || '',
            initializing: true,
        }

        this.refreshNotes = async () => {
            const { error, data:notes } = await getActiveNotes();
            if (!error) {
                this.setState(() => {
                    return {
                        notes,
                        initializing: false,
                    }
                });
            } 
            
            this.setState(() => {
                return {
                    initializing: false
                }
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
            if (await showDeleteModal(this.context.locale)) {
                const { error } = await deleteNote(id);
                if(!error) this.refreshNotes();
            }
        }
        
        this.onArchieveHandler = async (id) => {
            const { error } = await archiveNote(id);
            if(!error) this.refreshNotes();
        }
        
    }

    async componentDidMount() {
        await this.refreshNotes();
    }

    static contextType = LocaleContext;

    render(){
        let notes = this.state.notes.filter((note) => {
            return note.title.toLowerCase().includes(this.state.searchq.toLowerCase());
        });
        return(
            <div className="mx-8 relative flex flex-col gap-3 h-full">
                <div>
                    <SearchBar searchq={this.state.searchq} onKeywordChange={this.onKeywordChangeHandler}/>
                </div>
                <div className="grow" id="container-list">
                    {   this.state.initializing ? 
                        <NoteListLoading />
                        : 
                        notes.length > 0 ? 
                        <NoteList notes={notes} onDelete={this.onDeleteHandler} onArchive={this.onArchieveHandler} /> : <NoData />
                    }
                </div>
                <div className="bg-dark-1 dark:bg-dark-1-dark fixed bottom-0 right-0 text-4xl m-5 z-20 text-white dark:text-dark-2-dark px-3 py-2 rounded-xl">
                    <ButtonLink action={"add"} />
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    defaultSearchq: PropTypes.string,
    keywordChange: PropTypes.func.isRequired,
};

export default HomePageWrapper;