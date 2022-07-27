import React from 'react';
import { links } from '../data';
import { AiOutlineMenu } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'
import { useState } from 'react';

const MobileNavigation = () => {

  const [open, setOpen] = useState(false);

  const hamburgerIcon = <AiOutlineMenu className='hamburger' size='45px' color='white' onClick={() => setOpen(!open)}/>

  const closeIcon = <AiOutlineClose className='hamburger' size='45px' color='white' onClick={() => setOpen(!open)}/>

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
    <nav className='mobile-navigation sticky' data-testid='mobile-navbar'>
      <div className='nav-center'>
        <div className='navbar-links'>
          {open ? closeIcon : hamburgerIcon}
          {open && links.map((link) => {
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
        </div>
      </div>
      <div className='navbar-title'>My Portfolio</div>
    </nav>
  );
};

export default MobileNavigation;
