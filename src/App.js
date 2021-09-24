import { BrowserRouter as Router } from 'react-router-dom';
import route from './routes';

function App() {
  return (
    <div className="App">
      <Router>
        Quiz App nav bar will come here
        {route}
      </Router>
    </div>
  );
}

export default App;
