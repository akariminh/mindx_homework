import './App.css';
import SearchInput from './components/SearchInput';
import TodoList from './components/TodoList'

function App() {
  return (
    <div className="wrapper">
        <SearchInput />
      <div className="todo">
        <TodoList />
      </div>
    </div>
  );
}

export default App;
