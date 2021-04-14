import {NavLink} from 'react-router-dom';

import './Header.scss';
import CreatePost from './CreatePost/CreatePost';

const Header = () => {
    return (
        <header>
            <nav className="nav">
                    <img src="" alt="" />
                    <ul>
                        <li><NavLink to="/home" className="nav__link" activeClassName="nav__link--active">Home</NavLink></li>
                        <li><a href="/explore" className="nav__link" activeClassName="nav__link--active">Explore</a></li>
                        <li><a href="/notifications" className="nav__link" activeClassName="nav__link--active">Notifications</a></li>
                        <li><a href="/messages" className="nav__link" activeClassName="nav__link--active">Messages</a></li>
                        <li><a href="/bookmarks" className="nav__link" activeClassName="nav__link--active">Bookmarks</a></li>
                        <li><a href="/lists" className="nav__link" activeClassName="nav__link--active">Lists</a></li>
                        <li><NavLink to="/_olgaloboda" className="nav__link" activeClassName="nav__link--active">Profile</NavLink></li>
                    </ul>
                <CreatePost />
            </nav>
        </header>
    );
}

export default Header;