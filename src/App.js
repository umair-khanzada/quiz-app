import { BrowserRouter as Router } from 'react-router-dom';
import route from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        Quiz App
        {route}
      </Router>
    </div>
  );
}

export default App;
