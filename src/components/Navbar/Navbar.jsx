import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni boshqarish uchun useState qo‘shildi

  // Modalni ochish
  const openModal = () => setIsModalOpen(true);

  // Modalni yopish
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='nav-container'>
      <div className="nav-left">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>

      <div className="nav-center">
        <Link to="/">Landing</Link>
      </div>

      <div className="nav-right">
        <button className='buy' onClick={openModal}>Buy now</button>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Your order is received</h2>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar;