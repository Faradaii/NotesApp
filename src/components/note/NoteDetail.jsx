import parser from 'html-react-parser';
import PropTypes from 'prop-types';

import { showFormattedDate } from '../../utils';

function NoteDetail({ note }){
    return (
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl md:text-5xl font-semibold">{note.title}</h1>
            <small className="text-sm md:text-base">{showFormattedDate(note.createdAt)}</small>
            <p className="text-base md:text-lg mt-3">{parser(note.body)}</p>
        </div>    
    );
}

NoteDetail.propTypes = {
    note: PropTypes.object.isRequired,
};

export default NoteDetail;