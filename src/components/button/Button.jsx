import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline, MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';

import { getNote } from '../../utils/local-data';

function Button({id, onHandler, action }){
    const note = getNote(id);
    const actionIcon = {
        'delete': <MdOutlineDeleteOutline/>,
        'archive': note.archived? <MdOutlineUnarchive /> : <MdOutlineArchive />,
    };

    return (
        <button className="p-2" onClick={() => onHandler(id)}>{actionIcon[action]}</button>
    );
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    onHandler: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired
};

export default Button;