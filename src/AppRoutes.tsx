import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about';
import Project from './pages/project';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/works" element={<Project />} />
      <Route path="*" element="Page does not exist" />
    </Routes>
  );
};

export default AppRoutes;
