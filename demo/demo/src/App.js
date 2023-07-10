
import './App.css';
import MyApp from './contexts/MyApp';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Header from './pages/Header';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<h1>Welcome</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
