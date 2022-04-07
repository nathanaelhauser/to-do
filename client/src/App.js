import { v4 as uuidv4 } from 'uuid';
import './App.css';
import NoteList from './components/NoteList';

function App() {
  const NAMESPACE = 'f858a27b-5c15-4a13-add1-4f5cb6381469';
  const noteList = [
    { id: uuidv4(), title: 'First note', text: 'Text for the first note' },
    { id: uuidv4(), title: 'Second note', text: 'Text for the second note' },
    { id: uuidv4(), title: 'Third note', text: 'Text for the third note' }
  ];

  return (
    <div className="App">
      <h1>Welcome to a new app!</h1>
      <NoteList notes={noteList} />
    </div>
  );
}

export default App;
