import React, { useState } from 'react';
import FontLink from './components/FontLink';
import Nav from './components/Nav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LessonsPage from './pages/LessonsPage';
import ConsultancyPage from './pages/ConsultancyPage';
import ContactPage from './pages/ContactPage';


export default function App() {
  const [page, setPage] = useState("home");

  const pages = {
    home: <HomePage setPage={setPage}/>,
    about: <AboutPage setPage={setPage}/>,
    lessons: <LessonsPage setPage={setPage}/>,
    consultancy: <ConsultancyPage setPage={setPage}/>,
    contact: <ContactPage/>,
  };

  return (
    <>
      <FontLink/>
      <Nav page={page} setPage={setPage}/>
      {pages[page]}
      <Footer setPage={setPage}/>
    </>
  );
}
