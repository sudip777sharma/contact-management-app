import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contacts from './pages/Contacts';
import ChartsAndMaps from './pages/ChartsAndMaps';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import ContactForm from './components/ContactForm';
import EditContactDetails from './components/EditContactDetails';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Contacts />} />
        <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
        <Route path="/add-contact" element={<ContactForm />} />
        <Route path="/edit-contact/:id" element={<EditContactDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
