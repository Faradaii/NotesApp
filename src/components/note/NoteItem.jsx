import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';

import { showFormattedDate } from '../../utils';
import Button from '../button/Button';

function NoteItem({ id, title, body, createdAt, onDelete, onArchive }){
    return (
        <div className={"relative bg-lime-1 m-3 px-7 py-5 rounded-md font-poppins"}>
            <Link to={`/notes/${id}`} className={"h-full flex flex-col justify-between gap-5"}  >
                <div className=" overflow-clip text-clip whitespace-break-spaces line-clamp-6">
                    <h2 className="font-semibold text-lg md:text-xl my-3">{title}</h2>
                    <p className="md:text-base text-sm max-h-48">{parser(body)}</p>
                </div>
                <small>{showFormattedDate(createdAt)}</small>
            </Link>
            <div className="absolute bottom-0 right-0 z-20 bg-dark-1 text-white flex gap-2 text-xl rounded-tl-md">
                <Button id={id} onHandler={onDelete} action={"delete"}/>
                <Button id={id} onHandler={onArchive} action={"archive"}/>
            </div>
        </div>
            
    );
}

NoteItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteItem;