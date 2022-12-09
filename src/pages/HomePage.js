import React from 'react';
import ThemeContext from '../contexts/ThemeContext';
import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/CatatanList';
import SearchBar from '../components/SearchBar';
import { getNote, deleteNote } from '../utils/api'; 

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get('keyword') || ''
  });
  const { theme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    getNote().then(({ data }) => {
      setNotes(data);
    });
  }, [notes]);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    // update the contacts state from network.js
    const { data } = await getNote();
    setNotes(data);
  }
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(
      keyword.toLowerCase()
    );
  });

  return (
    <section>
      <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
      <h2>Daftar Catatan</h2>
      <NoteList notes={filteredNotes} onDelete={onDeleteHandler} />
    </section>
  )
}

export default HomePage


