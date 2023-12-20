import { useState } from 'react';
import PropTypes from 'prop-types';

function useInput(defaultValue = ''){
    const [ value, setValue ] = useState(defaultValue);
    const onInputHandler = (e) => {
        setValue(e.target.value);
    }

    return [value, onInputHandler];
}

useInput.propTypes = {
    defaultValue: PropTypes.string.isRequired,
}

export default useInput;