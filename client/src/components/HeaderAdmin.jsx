import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import logo from "../assets/images/logo.png";
import '../styles/HeaderAdmin.css';

export default function HeaderAdmin() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div className='header header-admin'>
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
              <li>Agenda</li>
            </Link>
            <Link to='/gestion-client'>
              <li>Gestion client</li>
            </Link>
            <Link to='/rencontrer'>
              <li>Paramètres</li>
            </Link>
            <Link to='/admin'>
                <li>Performance</li>
            </Link>
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
