import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const handlePurchaseClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };
    return (
        <div className='footer-container'>
            <div className="footer-top">
                <p className='footer-top-p'>©2023 Yourcompany</p>
                <Link to="/">Landing</Link>
                <button className='purchase-btn' onClick={handlePurchaseClick}>Purchase Now</button>

            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Sizning xaridingiz amalga oshirildi</h2>
                        <button className="close-btn" onClick={closeModal}>Yopish</button>
                    </div>
                </div>
            )}

            <div className="footer-bottom">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>

                <div className="footer-icons">
                    <a target='_blank' href="https://www.facebook.com/"><img src="./facebook.png" alt="facebook" /></a>
                    <a target='_blank' href="https://www.linkedin.com/"><img src="./linkedin.png" alt="linkedin" /></a>
                    <a target='_blank' href="https://x.com/"><img src="./twitter.png" alt="twitter" /></a>
                    <a target='_blank' href="https://www.youtube.com/"><img src="./youtube.png" alt="youtube" /></a>
                    <a target='_blank' href="https://www.instagram.com/"><img src="./instagram.png" alt="instagram" /></a>
                </div>
            </div>

            <div className="top"><a href="/">^</a></div>

        </div>
    )
}

export default Footer