
import './App.css';
import MyApp from './contexts/MyApp';
import FirstComp from './components/FirstComp';
function App() {
  const message = "hello, sample test has successfully run"
  return (
    <MyApp.Provider value={{text: message}}>
      <div className="App">
      <header className="App-header">
        <FirstComp/>
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
    </MyApp.Provider>
    
  );
}

export default App;
