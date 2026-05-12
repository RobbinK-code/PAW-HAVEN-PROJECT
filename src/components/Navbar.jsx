import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
    <div className="nav-content">
      <h1 >Paw Haven Rescue</h1>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/adopt">Adopt</Link>
        <Link to="/volunteer">Volunteer</Link>
        <Link to="/donate">Donate</Link>
        <Link to="/report-case">Report</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;