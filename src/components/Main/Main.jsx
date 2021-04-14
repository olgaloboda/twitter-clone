
import './Main.scss';
import {Route} from 'react-router-dom';
import Profile from '../Profile/Profile';
import Home from '../Home/Home';

const Main = () => {
    return(
        <main className="main">
            <Route path="/home" component={ Home } />
            <Route path="/_olgaloboda" component={ Profile } />
        </main>
    );
}

export default Main;