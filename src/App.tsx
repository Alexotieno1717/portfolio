
import './styles/global.css'
import Header from "./components/navigation/Header";
import { BrowserRouter as Router } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Header />
      {/* Other components and routes go here */}
    </Router>
  );
}

export default App;
