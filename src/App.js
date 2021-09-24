import { BrowserRouter as Router } from 'react-router-dom';
import route from './routes';
// import QuizListContainer from "./features/QuizList/QuizListContainer";
import QuizCreateEditContainer from './features/QuizCreateEdit/QuizCreateEditContainer';

function App() {
  return (
    <div className="App">
      <Router>
        Quiz App nav bar will come here
        {route}
      </Router>
      <QuizCreateEditContainer />
    </div>
  );
}

export default App;
