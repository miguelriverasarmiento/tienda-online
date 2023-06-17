import './App.css';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import 'boxicons';
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Pages } from './components/Pages';

function App() {
  return (
    <div>
      <Router>
        <Pages />
      </Router>  
    </div>
  );
}

export default App;
