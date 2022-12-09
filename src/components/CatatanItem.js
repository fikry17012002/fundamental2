import React from 'react';
import PropTypes from 'prop-types';
import NoteItemBody from './CatatanItemBody';
import DeleteButton from './DeleteButton';
 
function NoteItem({title, body, createdAt, id, onDelete }) {
 return (
   <div className="catatan-item">
     <NoteItemBody id={id} title={title} createdAt={createdAt} body={body} />
     <DeleteButton id={id} onDelete={onDelete} />
   </div>
 );
}
 
NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default NoteItem;
