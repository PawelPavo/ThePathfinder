import * as React from 'react'
import { NavLink } from 'react-router-dom';


const NavBar: React.FC<INavBar> = () => {
    return(
        
            <div className="col">
                <nav className="nav justify-content-around p-3 border-bottom border-secondary">
                    <NavLink exact to="/">Home</NavLink>
                    <NavLink exact to="/pathfinder">The Pathinder</NavLink>
                    <NavLink exact to="/pathfinder-duo">The Pathfinder Duo</NavLink>
                    <NavLink exact to="/register">Register</NavLink>
                    <NavLink exact to="/login">Login</NavLink>
                </nav>
            </div>
        
    );
};

export interface INavBar{}

export default NavBar