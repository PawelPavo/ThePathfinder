import * as React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar: React.FC<INavBar> = () => {
    return(
        <section className="row my-2">
            <div className="col-12">
                <nav className="nav justify-content-around p-3 border-bottom border-secondary">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink exact to="/pathfinder">The Pathinder</NavLink>
                    <NavLink exact to="/pathfinder-duo">The Pathfinder Duo</NavLink>
                    <NavLink exact to="/register">Register</NavLink>
                    <NavLink exact to="/login">Login</NavLink>
                </nav>
            </div>
        </section>
    );
};

export interface INavBar{}

export default NavBar