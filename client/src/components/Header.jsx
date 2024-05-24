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
            { <li>Accueil</li> }
          </Link>
          <Link to='/profile_page'>
            { <li>Profil</li> }
          </Link>
          <Link to='/about'>
            {  <li>Qui sommes-nous ?</li> }
          </Link>
          <Link to='/produits'>
            {  <li>Nos produits</li> }
          </Link>
          <Link to='/rencontrer'>
            {  <li>Nous rencontrer</li> }
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
