import {NavLink} from 'react-router-dom';

import './Header.scss';
import CreatePost from './CreatePost/CreatePost';

const Header = () => {
    return (
        <header className="header">
            <nav className="nav">
                <h1 className="nav__logo-wrapper">
                    <NavLink to="/home" className="nav__logo">
                        <span className="nav__text" aria-hidden="true">Twitter logo</span>
                        <span className="nav__icon"><i className="fab fa-twitter"></i></span>
                    </NavLink>
                </h1>
                <ul>
                    <li className="nav__link-wrapper">
                        <NavLink to="/home" className="nav__link" activeClassName="nav__link--active">
                            <span className="nav__icon"><i className="fas fa-home"></i></span>
                            <span className="nav__text">Home</span>
                        </NavLink>
                    </li>
                    <li className="nav__link-wrapper">
                        <a href="/explore" className="nav__link" activeClassName="nav__link--active">
                            <span className="nav__icon"><i className="fas fa-hashtag"></i></span>
                            <span className="nav__text">Explore</span>
                        </a>
                    </li>
                    <li className="nav__link-wrapper">
                        <a href="/notifications" className="nav__link" activeClassName="nav__link--active">
                            <span className="nav__icon"><i className="far fa-bell"></i></span>
                            <span className="nav__text">Notifications</span>
                        </a>
                    </li>
                    <li className="nav__link-wrapper">
                        <a href="/messages" className="nav__link" activeClassName="nav__link--active">
                            <span className="nav__icon"><i className="far fa-envelope"></i></span>
                            <span className="nav__text">Messages</span>
                        </a>
                    </li>
                    <li className="nav__link-wrapper">
                        <a href="/bookmarks" className="nav__link" activeClassName="nav__link--active">
                            <span className="nav__icon"><i className="far fa-bookmark"></i></span>
                            <span className="nav__text">Bookmarks</span>
                        </a>
                    </li>
                    <li className="nav__link-wrapper">
                        <a href="/lists" className="nav__link" activeClassName="nav__link--active">
                            <span className="nav__icon"><i className="far fa-list-alt"></i></span>
                            <span className="nav__text">Lists</span>
                        </a>
                    </li>
                    <li className="nav__link-wrapper">
                        <NavLink to="/_olgaloboda" className="nav__link" activeClassName="nav__link--active">
                            <span className="nav__icon"><i className="fas fa-user"></i></span>
                            <span className="nav__text">Profile</span>
                        </NavLink>
                    </li>
                </ul>
                <div className="nav__link-wrapper">
                    <button type="button" className="nav__link">
                        <span className="nav__icon"><i className="fas fa-ellipsis-h"></i></span>
                        <span className="nav__text">More</span>
                    </button>
                </div>
                <button type="button" className="btn--default">
                    <span className="nav__text">Tweet</span>
                </button>
            </nav>
        </header>
    );
}

export default Header;