import React from 'react';

import './Navbar.css'

function Navbar () {

  return (
    <section className="navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">Sach</a>
      <a href="/portfolio" className="navbar-item">The Loai</a>
      <a href="/shop" className="navbar-item">Tac Gia</a>
      <a href="/blog" className="navbar-item">Blog</a>
      <a href="/contact" className="navbar-item">Contact</a>
  </section>
  )

}

export default Navbar;