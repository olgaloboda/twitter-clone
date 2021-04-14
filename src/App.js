import {BrowserRouter as Router} from 'react-router-dom';

import './App.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        <Main />
      </div>
    </Router>
    
  );
}

export default App;