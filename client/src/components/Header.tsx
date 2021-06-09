import {NavLink} from 'react-router-dom';

function Header() {
    
    return (
        <div className="header">
            <nav className="links-container">
                <NavLink to="/dashboard" activeClassName="active-link"> Dashboard</NavLink>
            </nav>
        </div>
    );
}
export default Header;