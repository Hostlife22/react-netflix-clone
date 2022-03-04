import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

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
          onClick={() => navigate('/')}
          className="nav__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <img
          onClick={() => navigate('/profile')}
          className="nav__avatar"
          src="https://64.media.tumblr.com/avatar_061c59a49906_512.pnj"
          alt=""
        />
      </div>
    </div>
  );
}

export default Nav;
