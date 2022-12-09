import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/CatatanDetail';
import { getSingleNote } from '../utils/api';
 
function DetailPageWrapper() {
    const { id } = useParams();
    return <DetailPage id={String(id)} />;
}
 
class DetailPage extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      note: getSingleNote(props.id)
    };
  }
 
  render() {
    if (this.state.note === null) {
      return <p>catatan is not found!</p>;
    }
 
    return (
      <section>
        <NoteDetail {...this.state.note} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
}
 
export default DetailPageWrapper;