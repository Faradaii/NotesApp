import PropTypes from 'prop-types';

import NoteItem from './NoteItem';

function NoteList({ notes, onDelete, onArchive }){

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {
                notes.map((note) => (
                    <NoteItem 
                        key={note.id}
                        {...note}
                        onDelete={onDelete}
                        onArchive={onArchive}
                    />
                ))
            }
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.array.isRequired,
    onDelete: PropTypes.func.isRequired,
    onArchive: PropTypes.func.isRequired,
}

export default NoteList;