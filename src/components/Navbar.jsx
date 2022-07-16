import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="nav-header">
            <Link to="/" className="nav-link">🎶</Link>
            <Link to="/" className="nav-link nav-link-right">Pricing</Link>
            <Link to="/" className="nav-link nav-link-right">Try demo</Link>
        </nav>
    );
}