import React, { useEffect, useState } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const tansitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', tansitionNavBar);
    return () => {
      window.removeEventListener('scroll', tansitionNavBar);
    };
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className="nav__contents">
        <img
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          className="nav__avatar"
          src="https://64.media.tumblr.com/avatar_061c59a49906_512.pnj"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
