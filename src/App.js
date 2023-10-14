import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} /> 
    <Route exact path="/about-us" element={<AboutUs />} /> 
   </Routes>
  );
}

export default App;
