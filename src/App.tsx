import AppRoutes from './AppRoutes';
import './styles/global.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
