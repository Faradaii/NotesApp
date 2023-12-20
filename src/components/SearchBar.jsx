import PropTypes from 'prop-types';
import { useContext } from 'react';

import { localization } from '../utils/localization';
import LocaleContext from '../contexts/LocaleContext';

function SearchBar({ searchq, onKeywordChange }){
    const {locale} = useContext(LocaleContext);
    return (
        <input type="text" className="w-full border mx-1 px-3 h-7 rounded-lg bg-white-light dark:bg-white-dark" value={searchq} onChange={(e) => onKeywordChange(e.target.value)} placeholder={localization[locale].searchbar.placeholder}/>    
    );
}

SearchBar.propTypes = {
    searchq: PropTypes.string.isRequired,
    onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;