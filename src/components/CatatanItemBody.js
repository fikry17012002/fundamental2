import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { showFormatDate } from "../utils/data.js";
 
function NoteItemBody({id, title, body, createdAt}) {
 return (
   <div className="catatan-item__body">
     <h3 className="catatan-item__title">
     <Link to={`/notes/${id}`}>{title}</Link>
     </h3>
     <h6 className="catatan-item__createdAt">{showFormatDate(createdAt)}</h6>
     <p className="catatan-item__username">{body}</p>
   </div>
 );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
}
 
export default NoteItemBody;