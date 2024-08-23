import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { errorReset } from '../redux/user/userSlice';
import "../styles/Header.css"
import logo from "../assets/images/logo.png";

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    window.scrollTo(0, 0);
  };

  return (
    <div className='header'>
      <div className='nav'>
        <ul className='nav-box'>
          <div className="nav-left">
            <Link to='/'>
              <img className='logo' src={logo} alt="logo" />
            </Link>
          </div>
          <div className='nav-right'>
            {/* REGULAR MENU */}
            <div className="regular-menu">
              <Link to='/about'>
                <li>Qui sommes-nous</li>
              </Link>
              <Link to='/produits'>
                <li>Nos produits</li>
              </Link>
              <Link to='/rencontrer'>
                <li>Contactez nous</li>
              </Link>
              { currentUser ?
                <Link to='/profile_page'>
                  { currentUser ? <li>Profil</li> : null}
                </Link>
              :
                null
              }
            </div>
            {/* MOBILE MENU */}
            <div className={`mobile-menu ${isMenuOpen && "fixed"}`}>
              <div className={`burger-menu`} >
                <input type="checkbox" id="checkbox3" className="checkbox3 visuallyHidden" checked={isMenuOpen} onChange={toggleMenu}></input>
                <label htmlFor="checkbox3">
                    <div className="hamburger hamburger3">
                        <span className="bar bar1"></span>
                        <span className="bar bar2"></span>
                        <span className="bar bar3"></span>
                        <span className="bar bar4"></span>
                    </div>
                </label>
              </div>
            </div>
          </div>          
        </ul>
      </div>
      {/* LATERAL SLIDE BURGER MENU */}
      <div className={`mobile-slide-menu ${isMenuOpen && "open"}`}>
        <div className="mobile-slide-menu-box">
          <Link to='/' onClick={toggleMenu}>
            <li>Accueil</li>
          </Link>
          <Link to='/about' onClick={toggleMenu}>
            <li>Qui sommes-nous</li>
          </Link>
          <Link to='/produits' onClick={toggleMenu}>
            <li>Nos produits</li>
          </Link>
          <Link to='/rencontrer' onClick={toggleMenu}>
            <li>Contactez nous</li>
          </Link>
          { currentUser ?
            <Link to='/profile_page' onClick={toggleMenu}>
              { currentUser ? <li>Profil</li> : null}
            </Link>
          :
            null
          }
        </div>
      </div>
    </div>

  );
}
