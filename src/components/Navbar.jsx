import { Link, NavLink } from 'react-router-dom';

export default function NavBar(){
    return(
        <nav>
            <h1>Example NavBar content</h1>
            <Link to={'/'}>Home </Link>
            <NavLink to={'/'}>Home </NavLink>
            <NavLink to={'/about'}>About Me </NavLink>
            <NavLink to={'/contact'}>Contact Me </NavLink>
        </nav>
    )
}