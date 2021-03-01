import './Header.css';
import { IconButton } from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

const Header = ({ open, setOpen }) => {
    return (
        <header className="header">
            <div className="header__left">
                <IconButton onClick={() => setOpen(!open)}>
                    <MenuRoundedIcon />
                </IconButton>
            </div>
            <div className="header__right">
                <img
                    src="https://banner2.cleanpng.com/20180517/uzq/kisspng-computer-icons-user-profile-male-avatar-5afd8d7b2682b3.7338522715265662671577.jpg"
                    alt=""
                />
            </div>
        </header>
    );
};

export default Header;
