import React from 'react';
import { MdOutlineDone } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { addNote } from '../utils/local-data';

function AddPageWrapper(){
    const navigate = useNavigate();
    return ( <AddPage navigate={navigate} /> );
}

class AddPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            title: "",
            body: "",
        }

        this.onChangeTitleHandler = (e) => {
            this.setState(() => {
                return {
                    title: e.target.value, 
                }
            });
        }
        
        this.onInputHandler = (e) => {
            this.setState(() => {
                return {
                    body: e.target.innerHTML, 
                }
            });
        }

        this.onSubmitHandler = (e) => {
            e.preventDefault();
            const newNote = {
                title: this.state.title,
                body: this.state.body,
            };
            addNote(newNote);
            this.props.navigate("/");
        }
    }

    render(){
        return (
            <form className={"w-5/6 flex m-auto h-screen relative"} onSubmit={(e) => this.onSubmitHandler(e)}>
                 <div className="flex flex-col gap-5 w-full">
                    <input type="text" placeholder="Tambahkan Judul ..."  className="placeholder:text-gray-600 text-xl md:text-3xl lg:text-4xl font-semibold focus:outline-none" onChange={this.onChangeTitleHandler}/>
                    <div contentEditable="true" data-placeholder="Tambahkan Teks ..." className="data-[placeholder]:text-black-400 focus:outline-none h-4/6" onInput={this.onInputHandler} />
                 </div>
                 <div className="fixed bottom-0 right-0 bg-dark-1 p-5 m-6 text-white text-4xl rounded-xl">
                    <button type="submit"><MdOutlineDone/></button>
                 </div>
            </form>
        );
    }
}

AddPage.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default AddPageWrapper;