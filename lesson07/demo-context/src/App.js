
import './App.css';
const MyApp = createContext();
const firstComp = () => {
  return   <img src={logo} className="App-logo" alt="logo" />
}
const secondComp = () => {
  return <firstComp/>
}
function App() {
  const message = "hello world"
  return (
      <div className="App">
      <header className="App-header">
        <firstComp/>
        <secondComp/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    
  );
}

export default App;
