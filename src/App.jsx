import React, { useState } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handlePurchaseClick = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="container">

      {/* ---------introduce-------- */}
      <div className="introduce">
        <div className="introduce-text">
          <h1>Introduce Your Product Quickly & Effectively</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br /><br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <div className="btn-group">
            <button className='purchase'>Purchase UI Kit</button>
            <button className='learnMore'>Learn More</button>
          </div>
        </div>
        <div className="introduce-image">
          <img src="/introduce.png" alt="Introduce" />
        </div>
      </div>

      {/* ---------light-------- */}
      <div className="light-container">
        <div className="light-text">
          <div className="light-text1">
            <h1>Light, Fast & Powerful</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
              <br /><br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          </div>
          <div className="text-group">
            <div className="light-text2">
              <img src="/icon.png" alt="Icon" />
              <h1>Title Goes Here</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
            <div className="light-text2">
              <img src="/icon.png" alt="Icon" />
              <h1>Title Goes Here</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.</p>
            </div>
          </div>
        </div>
        <div className="light-image">
          <img src="/icon2.png" alt="Light" width={540} height={525} />
        </div>
      </div>

      {/* ---------fast-------- */}
      <div className="fast-container">
        <div className="fast-image">
          <img src="/icon3.png" alt="Fast" width={480} height={315} />
        </div>
        <div className="fast-text">
          <h1>Light, Fast & Powerful</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br /><br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>

      {/* ---------powerful-------- */}
      <div className="powerful-container">
        <div className="powerful-image">
          <img src="/icon4.png" alt="Powerful" width={480} height={315} />
        </div>
        <div className="powerful-text">
          <h1>Light, Fast & Powerful</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br /><br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
        </div>
      </div>

      {/* ---------purchase-------- */}
      <div className="purchase-container">
        <div className="purchase-image">
          <img src="/icon5.png" alt="Purchase" width={445} height={315} />
        </div>
        <div className="purchase-text">
          <h1>Light, Fast & Powerful</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
            <br /><br /> mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</p>
          <button className='purchase-btn' onClick={handlePurchaseClick}>Purchase Now</button>
        </div>
      </div>

      {/* ---------modal-------- */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Sizning xaridingiz amalga oshirildi</h2>
            <button className="close-btn" onClick={closeModal}>Yopish</button>
          </div>
        </div>
      )}

      <div className="priceEveryone">
        <h1 className='price-h1'>A Price To Suit Everyone</h1>
        <p className='price-p1'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus </p>
     <h1 className='price-h2'>$40</h1>
     <p className='price-p2'>UI Design Kit</p>
<p className='price-p3'>See, One price. Simple.</p>
<button className='purchase-btn' onClick={handlePurchaseClick}>Purchase Now</button>

     
      </div>
    </div>
  );
}

export default App;
