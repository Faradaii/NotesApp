import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { archiveNote, deleteNote, getNote, unarchiveNote } from '../utils/network-data';
import { showDeleteModal } from '../utils';
import Button from '../components/button/Button';
import ErrorPage from './ErrorPage';
import NoteDetail from '../components/note/NoteDetail';
import NoteDetailLoading from '../components/loading/NoteDetailLoading';
import LocaleContext from '../contexts/LocaleContext';

function DetailPageWrapper(){
    const { id } = useParams();
    const navigate = useNavigate();
    return <DetailPage id={id} redirect={navigate}/>
}

class DetailPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            note: null,
            initializing: true,
        }

        this.onDeleteHandler = async (id) => {
            if (await showDeleteModal(this.context.locale)) {
                await deleteNote(id);
                this.autoRedirect();
            }
        }
        
        this.onArchieveHandler = async (id) => {
            const { error } = await archiveNote(id);
            if (!error) this.autoRedirect();
        }

        this.onUnarchieveHandler = async (id) => {
            const { error } = await unarchiveNote(id);
            if (!error) this.autoRedirect();
        }
        
        this.autoRedirect = () => {
            this.state.note.archived ? this.props.redirect("/archives") : this.props.redirect("/");
        }
    }

    async componentDidMount() {
        const { data } = await getNote(this.props.id);
        this.setState(() => {
            return {
                note: data,
                initializing: false,
            }
        });
    }

    static contextType = LocaleContext;

    render(){
        if (!this.state.note && !this.state.initializing) {
            return (<ErrorPage />);
        }

        return (
            <div className="mx-auto relative flex flex-col gap-3 h-full w-5/6 text-poppins">
                { this.state.initializing? 
                    <NoteDetailLoading/>
                :
                <>
                    <NoteDetail note={this.state.note} />
                    <div className="fixed bottom-0 right-0 text-4xl md:text-5xl m-10 flex gap-4">
                        <Button id={this.state.note.id} onHandler={this.onDeleteHandler} action={"delete"}/>
                        {
                            this.state.note.archived ?
                            <Button id={this.state.note.id} onHandler={this.onUnarchieveHandler} action={"unarchive"}/>
                            :
                            <Button id={this.state.note.id} onHandler={this.onArchieveHandler} action={"archive"}/>
                        }
                    </div>
                </>
                }
            </div>
        );
    }
}

DetailPage.propTypes = {
    id: PropTypes.string.isRequired,
    redirect: PropTypes.func.isRequired,
};

export default DetailPageWrapper;