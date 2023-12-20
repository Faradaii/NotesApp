import PropTypes from 'prop-types';
import { MdOutlineDeleteOutline, MdOutlineArchive, MdOutlineUnarchive } from 'react-icons/md';

function Button({id, onHandler, action }){

  const actionIcon = {
      'delete': <MdOutlineDeleteOutline/>,
      'unarchive': <MdOutlineUnarchive />,
      'archive': <MdOutlineArchive />,
  };

  return (
      <button className="p-2" title={action} onClick={() => onHandler(id)}>{actionIcon[action]}</button>
  );
}

Button.propTypes = {
    id: PropTypes.string.isRequired,
    onHandler: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired
};

export default Button;