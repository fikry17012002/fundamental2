import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './CatatanItem';
 
function NoteList({ notes, onDelete }) {
 return (
   <div className="catatan-list">
     {
      notes.length === 0 ? (
        <p className="catatan-list__empty-message">Tidak Ada Catatan</p>
    ) : (
       notes.map((note) => (
         <NoteItem 
         key={note.id}
         id={note.id}
            onDelete={onDelete}
         {...note} />
       ))
    )
     }
   </div>
 );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
}
 
export default NoteList;