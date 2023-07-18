import './App.css';
import 'boxicons';
import { BrowserRouter as Router} from "react-router-dom";
import { Pages } from './components/Pages';
import { DataProvider } from './context/DataProvider';

function App() {
  return (
    <DataProvider>
      <div>
        <Router>
          <Pages />
        </Router>  
      </div>
    </DataProvider>
  );
}

export default App;
