import React from 'react';
import PropTypes from 'prop-types';
import { showFormatDate } from '../utils/data';

function NoteDetail({title, body, createdAt}) {
  return (
    <div className="catatan-item__body">
     <h3 className="catatan-item__title">{title}</h3>
     <h6 className="catatan-item__createdAt">{showFormatDate(createdAt)}</h6>
     <p className="catatan-item__username">{body}</p>
   </div>
  );
}

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired
};

export default NoteDetail;
