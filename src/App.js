import './App.css';
import 'boxicons';
import { BrowserRouter as Router} from "react-router-dom";
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
