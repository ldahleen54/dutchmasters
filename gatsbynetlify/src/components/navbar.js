import React from 'react';
import { Link } from 'gatsby'
const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <Link to="/" className="navbar-brand">Dutchmasters</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-content" aria-controls="navbar-content" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbar-content">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
                        <li class="nav-item">
                            <Link to="/info" className="btn btn-primary">Important Info!</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/pictures" className="btn btn-secondary">Pictures</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/scores" className="btn btn-secondary">Scores</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/videos" className="btn btn-secondary">Videos</Link>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More Stuff
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link to="/champions" className="dropdown-item">Champions</Link></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><Link to="/history" className="dropdown-item">History of the Shootout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;