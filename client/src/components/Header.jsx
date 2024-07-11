import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { errorReset } from '../redux/user/userSlice';
import "../styles/Header.css"
import logo from "../assets/images/logo.png";

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  

  return (
    <div className='header'>
      <div className='nav'>
        <ul className='nav-box'>
          <div className="nav-left">
            <Link to='/'>
              <img className='logo' src={logo} alt="logo" />
              {/* { currentUser ? <li>Accueil</li> : null} */}
            </Link>
          </div>
          <div className='nav-right'>
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
          {/* <Link to='/aventure'>
            { currentUser ? <li>Aventure</li> : null}
          </Link>
          <Link to='/course'>
            { currentUser ? <li>Cours</li> : null}
          </Link> */}
        </ul>
      </div>
    </div>
  );
}
