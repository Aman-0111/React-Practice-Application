import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>The React Training Arc</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/todo">To Do List</Link>
                <Link to="/recipe">Recipe Finder</Link>
                <Link to="/create">New Post</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;