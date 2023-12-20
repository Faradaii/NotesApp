import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineDone } from 'react-icons/md';
import PropTypes from 'prop-types';

import { addNote } from '../utils/network-data';
import LocaleContext from '../contexts/LocaleContext';
import { localization } from '../utils/localization';

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

        this.onSubmitHandler = async (e) => {
            e.preventDefault();
            const newNote = {
                title: this.state.title,
                body: this.state.body,
            };
            await addNote(newNote);
            this.props.navigate("/");
        }
    }

    render(){
        return (
            <LocaleContext.Consumer>
                {
                    ({ locale }) => (
                        <form className={"w-5/6 flex m-auto h-screen relative"} onSubmit={(e) => this.onSubmitHandler(e)}>
                            <div className="flex flex-col gap-5 w-full">
                                <input type="text" placeholder={localization[locale].addpage.titleplaceholder} className="bg-white-light dark:bg-white-dark placeholder:text-gray-600 dark:placeholder:text-gray-300 text-xl md:text-3xl lg:text-4xl font-semibold focus:outline-none md:h-14" onChange={this.onChangeTitleHandler}/>
                                <div contentEditable="true" data-placeholder={localization[locale].addpage.descplaceholder} className="data-[placeholder]:text-black-400 focus:outline-none h-4/6" onInput={this.onInputHandler} />
                            </div>
                            <div className="fixed bottom-0 right-0 bg-dark-1 dark:bg-dark-1-dark px-5 py-3.5 m-5 text-white dark:text-dark-2-dark text-4xl rounded-xl">
                                <button type="submit"><MdOutlineDone/></button>
                            </div>
                        </form>
                    )
                }
            </LocaleContext.Consumer>
        );
    }
}

AddPage.propTypes = {
    navigate: PropTypes.func.isRequired,
};

export default AddPageWrapper;