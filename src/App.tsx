import './styles/global.css';
import Header from './components/navigation/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import BannerSection from './components/sections/BannerSection';
import { BannerData } from './mock';

function App() {
  return (
    <Router>
      <Header />
      <BannerSection data={BannerData} />
      {/* Other components and routes go here */}
    </Router>
  );
}

export default App;
