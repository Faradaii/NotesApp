import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function RoundedButton({ address, className, text }){
    return (
        <Link to={`${address}`} className={`font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 ${className}`}>{text}</Link>    
    );
}

RoundedButton.propTypes = {
    address: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

export default RoundedButton;