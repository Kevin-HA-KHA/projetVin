import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { errorReset } from '../redux/user/userSlice';
import "../styles/Header.css"

export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  

  return (
    <div className='header'>
      <div className='nav'>
        <ul className='nav-droite'>
          <Link to='/'>
            { currentUser ? <li>Accueil</li> : null}
          </Link>
          <Link to='/profile_page'>
            { currentUser ? <li>Profil</li> : null}
          </Link>
          <Link to='/about'>
            { currentUser ? <li>Qui sommes-nous ?</li> : null}
          </Link>
          <Link to='/produits'>
            { currentUser ? <li>Nos produits</li> : null}
          </Link>
          <Link to='/rencontrer'>
            { currentUser ? <li>Nous rencontrer</li> : null}
          </Link>
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
