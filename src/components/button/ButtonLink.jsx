import PropTypes from 'prop-types';
import { MdOutlineAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

function ButtonLink({ action }){
    const actionIcon = {
        'add' : {
            'icon': <MdOutlineAdd />, 
            'path': '/notes/add',
        },
    };

    return (
        <button className="p-2"><Link to={actionIcon[action]['path']}>{actionIcon[action]['icon']}</Link></button>
    );
}

ButtonLink.propTypes = {
    action: PropTypes.string.isRequired
};

export default ButtonLink;