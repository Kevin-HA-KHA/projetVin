import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { errorReset } from '../redux/user/userSlice';


export default function Header() {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  

  return (
    <div className='header'>
      <div className='nav'>
        <Link to='/'>
          {/* <img className='logo' src={logo} alt="" /> */}
        </Link>
        <ul className='nav-droite'>
          <Link to='/'>
            { currentUser ? <li>Accueil</li> : null}
          </Link>
          <Link to='/profile_page'>
            { currentUser ? <li>Profil</li> : null}
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
