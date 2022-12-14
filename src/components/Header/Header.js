import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <h1>Welcome to our page</h1>
             <nav>
                <Link to="/">Home</Link>
                <Link to="/friends">Friends</Link>
                <Link to="/about">About</Link>
                <Link to="/posts">Posts</Link>
             </nav>
        </div>
    );
};

export default Header;