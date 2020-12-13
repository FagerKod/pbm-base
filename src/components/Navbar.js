import React from 'react';
import { Link } from 'gatsby';
import logo from '../img/logo.svg';

const Navbar = () => {
  return (
    <nav
      className='bg-green-500 flex justify-center'
      role='navigation'
      aria-label='main-navigation'>
      <div className='w-1280px'>
        <Link to='/' className='navbar-item' title='Logo'>
          <img src={logo} className='w-16 h-auto' alt='Plugga med bilder' />
        </Link>
        {/* Hamburger menu */}

        <div id='navMenu' className='flex align-center'>
          <Link className='h-12 px-4 py-4' to='/about'>
            About
          </Link>
          <Link className='h-12 px-4 py-4' to='/products'>
            Products
          </Link>
          <Link className='h-12 px-4 py-4' to='/blog'>
            Blog
          </Link>
          <Link className='h-12 px-4 py-4' to='/contact'>
            Contact
          </Link>
          <Link className='h-12 px-4 py-4' to='/contact/examples'>
            Form Examples
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
