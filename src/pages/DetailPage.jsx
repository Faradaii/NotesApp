import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/local-data';
import { showDeleteModal } from '../utils';
import Button from '../components/button/Button';
import ErrorPage from './ErrorPage';
import NoteDetail from '../components/note/NoteDetail';

function DetailPageWrapper(){
    const { id } = useParams();
    const navigate = useNavigate();
    return <DetailPage id={id} redirect={navigate}/>
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            note: getNote(this.props.id) ,
            searchKeyword: '',
        }

        this.onDeleteHandler = async (id) => {
            if (await showDeleteModal()) {
                deleteNote(id);
                this.autoRedirect();
            }
        }
        
        this.onArchieveHandler = (id) => {
            this.state.note.archived ? unarchiveNote(id) : archiveNote(id);
            this.autoRedirect();
        }
        
        this.autoRedirect = () => {
            this.state.note.archived ? this.props.redirect("/archives") : this.props.redirect("/");
        }
    }

    render(){
        if (!this.state.note) {
            return (<ErrorPage />);
        }

        return (
            <div className="relative w-5/6 pt-5 m-auto h-fit text-poppins">
                <NoteDetail note={this.state.note} />
                <div className="fixed bottom-0 right-0 text-4xl md:text-5xl m-10 flex gap-4">
                    <Button id={this.state.note.id} onHandler={this.onDeleteHandler} action={"delete"}/>
                    <Button id={this.state.note.id} onHandler={this.onArchieveHandler} action={"archive"}/>
                </div>
            </div>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    redirect: PropTypes.func.isRequired,
};

export default DetailPageWrapper;