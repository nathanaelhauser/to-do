import './App.css';
import NoteList from './components/NoteList';

function App() {
  const noteList = [
    { title: 'First note', text: 'Text for the first note' },
    { title: 'Second note', text: 'Text for the second note' },
    { title: 'Third note', text: 'Text for the third note' }
  ];

  return (
    <div className="App">
      <h1>Welcome to a new app!</h1>
      <NoteList notes={noteList} />
    </div>
  );
}

export default App;
