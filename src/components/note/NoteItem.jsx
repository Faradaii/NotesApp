import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TbPin, TbPinFilled } from "react-icons/tb";
import PropTypes from 'prop-types';
import parser from 'html-react-parser';

import { showFormattedDate } from '../../utils';
import { noteItemPropTypes } from '../../proptypes/custom-proptypes';
import Button from '../button/Button';

function NoteItem({ id, title, body, createdAt, archived, onDelete, onArchive }){
    const [ pinned, setPinned ] = useState(false);
    const onPinnedHandler = () => {
        setPinned(!pinned);
    }
    return (
        <div className={`${pinned? "order-1" : "order-2"} relative bg-lime-1 dark:bg-lime-1-dark m-3 px-7 py-5 rounded-md font-poppins h-48`}>
            <Link to={`/notes/${id}`} className={"h-full flex flex-col justify-between gap-5"}  >
                <div className=" overflow-clip text-clip whitespace-break-spaces line-clamp-6">
                    <h2 className="font-semibold text-lg md:text-xl my-3">{title}</h2>
                    <p className="md:text-base text-sm max-h-48">{parser(body)}</p>
                </div>
                <small className="text-2xs">{showFormattedDate(createdAt)}</small>
            </Link>
            <div className="absolute bottom-0 right-0 z-20 bg-dark-1 text-white flex gap-2 text-xl rounded-tl-md">
                <Button id={id} onHandler={onArchive} action={archived ? "unarchive" : "archive"}/>
                <button className="mx-1" onClick={onPinnedHandler} title={pinned? "Unpin" : "Pin"}>{pinned? <TbPinFilled /> : <TbPin />}</button>
                <Button id={id} onHandler={onDelete} action={"delete"}/>
            </div>
        </div>
            
    );
}

NoteItem.propTypes = {
    ...noteItemPropTypes,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteItem;