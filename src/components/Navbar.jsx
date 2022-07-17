import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav-header">
            <Link to="/" className="nav-link">🎶 Beanix</Link>
            <Link to="/" className="nav-link nav-link-right">Sign In</Link>
            <Link to="/" className="nav-link nav-link-right">Join</Link>
        </nav>
    );
}