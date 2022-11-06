import React, { Component } from 'react'
import { Link } from "react-router-dom";
export class NavBar extends Component {
    // handle_lightmode = () => {}
    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-dark fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="/">News Monkey</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/general">general</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/sports">sports</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/health">health</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/business">business</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/entertainment">entertainment</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/science">science</Link></li>
                            <li className="nav-item"><Link className="nav-link text-white" to="/technology">technology</Link></li>
                        </ul>
                        <div class="form-check form-switch">
                            <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar