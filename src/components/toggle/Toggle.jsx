import PropTypes from 'prop-types';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import Flag from 'react-world-flags';

function Toggle({ onToggleHandler, content }){
    const contentList = {
        'dark' : <MdOutlineDarkMode className="w-8 h-8 rounded-full object-cover"/>,
        'light' : <MdOutlineLightMode className="w-8 h-8 rounded-full object-cover"/>,
        'id' : <Flag code={"IDN"} className="border w-8 h-8 rounded-full object-cover"/>,
        'en' : <Flag code={"GBR"} className="border w-8 h-8 rounded-full object-cover"/>,
    }
    return (
        <>
            <button className="flex flex-col items-center m-auto text-sm gap-1" onClick={onToggleHandler}>{contentList[content]}{content}</button>
        </>
    );
}

Toggle.propTypes = {
    onToggleHandler: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
}

export default Toggle;