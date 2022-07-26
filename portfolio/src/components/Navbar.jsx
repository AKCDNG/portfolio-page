import React from 'react';
import { links } from '../data';

const Navbar = () => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute('href');
    const location = document.querySelector(target).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 60,
    });
  };
  return (
    <nav className='navbar sticky' data-testid='navbar'>
      <div className='nav-center'>
        <div className='navbar-links'>
          {links.map((link) => {
            return (
              <a
                className='navbar-text'
                href={link.url}
                key={link.id}
                onClick={handleClick}>
                {link.text}
              </a>
            );
          })}
          <div className="navbar-title">My Portfolio</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
