import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages'
import SignIn from './pages/signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} exact />
        <Route path="/signin" element={<SignIn/>} exact  />
      </Routes>
    </Router>
    
  );
}

export default App;
