import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contacts from './pages/contacts';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Project />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="*" element="Page does not exist" />
    </Routes>
  );
};

export default AppRoutes;
