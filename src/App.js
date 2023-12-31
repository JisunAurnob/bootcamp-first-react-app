import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import StudentDetails from './pages/StudentDetails';
import Products from './pages/Products';
import ContactUs from './pages/ContactUs';

function App() {
  return (
   <Routes>
    <Route exact path="/" element={<Home />} /> 
    <Route exact path="/about-us" element={<AboutUs />} /> 
    <Route exact path="/student-details/:id/:name" element={<StudentDetails />} /> 
    <Route exact path="/products" element={<Products />} /> 
    <Route exact path="/contact-us" element={<ContactUs />} /> 
   </Routes>
  );
}

export default App;
