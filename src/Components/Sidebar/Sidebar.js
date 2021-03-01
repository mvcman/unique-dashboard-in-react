import './Sidebar.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardRoundedIcon from '@material-ui/icons/DashboardRounded';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';
import ApartmentRoundedIcon from '@material-ui/icons/ApartmentRounded';
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';

const Sidebar = ({ open }) => {
    const [link, setLink] = useState('dashboard');
    return (
        <div className={open ? 's-navbar' : 'l-navbar'}>
            <div className="toggle-div">
                <div className="toggle-button">
                    <div className="toggle-top"></div>
                    <div className="toggle-btn">
                        <div className="toggle-btn-icon">a</div>
                    </div>
                    <div className="toggle-bottom"></div>
                </div>
            </div>
            <nav className="nav">
                <div>
                    {/* <Link to="/dashboard" className="nav__logo">
                        <DashboardRoundedIcon className="nav__logo-icon" />
                        <span className="nav__logo-name">Dashboard</span>
                    </Link> */}
                    <ul className="nav__list">
                        <Link
                            to="/dashboard"
                            className={
                                link === 'dashboard' ? 'active-link' : 'link'
                            }
                            onClick={() => setLink('dashboard')}
                        >
                            <div
                                className={
                                    link === 'dashboard'
                                        ? 'nav__link-up-active'
                                        : 'nav__link-up'
                                }
                            ></div>
                            <div
                                className={
                                    link === 'dashboard'
                                        ? 'nav__link1'
                                        : 'nav__link'
                                }
                            >
                                <DashboardRoundedIcon className="nav__logo-icon" />
                                <span className="nav__logo-name">
                                    Dashboard
                                </span>
                            </div>
                            <div
                                className={
                                    link === 'dashboard'
                                        ? 'nav__link-down-active'
                                        : 'nav__link-down'
                                }
                            ></div>
                        </Link>
                        <Link
                            to="/teams"
                            onClick={() => setLink('teams')}
                            className={
                                link === 'teams' ? 'active-link' : 'link'
                            }
                        >
                            <div
                                className={
                                    link === 'teams'
                                        ? 'nav__link-up-active'
                                        : 'nav__link-up'
                                }
                            ></div>
                            <div
                                className={
                                    link === 'teams'
                                        ? 'nav__link1'
                                        : 'nav__link'
                                }
                            >
                                <ApartmentRoundedIcon className="nav__logo-icon" />
                                <span className="nav__logo-name">Teams</span>
                            </div>
                            <div
                                className={
                                    link === 'teams'
                                        ? 'nav__link-down-active'
                                        : 'nav__link-down'
                                }
                            ></div>
                        </Link>
                        <Link
                            to="/users"
                            className={
                                link === 'users' ? 'active-link' : 'link'
                            }
                            onClick={() => setLink('users')}
                        >
                            <div
                                className={
                                    link === 'users'
                                        ? 'nav__link-up-active'
                                        : 'nav__link-up'
                                }
                            ></div>
                            <div
                                className={
                                    link === 'users'
                                        ? 'nav__link1'
                                        : 'nav__link'
                                }
                            >
                                <GroupRoundedIcon className="nav__logo-icon" />
                                <span className="nav__logo-name">Users</span>
                            </div>

                            <div
                                className={
                                    link === 'users'
                                        ? 'nav__link-down-active'
                                        : 'nav__link-down'
                                }
                            ></div>
                        </Link>
                        <Link
                            to="/settings"
                            className={
                                link === 'settings' ? 'active-link' : 'link'
                            }
                            onClick={() => setLink('settings')}
                        >
                            <div
                                className={
                                    link === 'settings'
                                        ? 'nav__link-up-active'
                                        : 'nav__link-up'
                                }
                            ></div>
                            <div
                                className={
                                    link === 'settings'
                                        ? 'nav__link1'
                                        : 'nav__link'
                                }
                            >
                                <SettingsIcon className="nav__logo-icon" />
                                <span className="nav__logo-name">Settings</span>
                            </div>
                            <div
                                className={
                                    link === 'settings'
                                        ? 'nav__link-down-active'
                                        : 'nav__link-down'
                                }
                            ></div>
                        </Link>
                    </ul>
                </div>
                <div>
                    <Link
                        to="/logout"
                        className={
                            link === 'logout' ? 'nav__link1' : 'nav__link'
                        }
                        onClick={() => setLink('logout')}
                    >
                        <ExitToAppRoundedIcon className="nav__logo-icon" />
                        <span className="nav__logo-name">Logout</span>
                    </Link>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;
