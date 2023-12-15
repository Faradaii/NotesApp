import PropTypes from 'prop-types';

function SearchBar({ searchq, onKeywordChange }){
    return (
        <input type="text" className="w-full border mx-1 px-3 h-7 rounded-lg" value={searchq} onChange={(e) => onKeywordChange(e.target.value)} placeholder="Cari Note"/>    
    );
}

SearchBar.propTypes = {
    searchq: PropTypes.string.isRequired,
    onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;