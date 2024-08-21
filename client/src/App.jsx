import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Calendrier from './pages/Calendrier';
import About from './pages/QuiSommesNous';
import Produits from './pages/Produits';
import Rencontrer from './pages/Rencontrer';
import HeaderAdmin from './components/HeaderAdmin';
import GestionClient from './pages/GestionClient';
import { PopupWidget} from 'react-calendly';


function AppContent() {
  const location = useLocation();
  const isProfilePage = location.pathname === '/profile_page';

  return (
    <>
      <Header />
      {/* { !isProfilePage && <Header /> }
      { isProfilePage && <HeaderAdmin /> } */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/admin' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/produits' element={<Produits/>} />
        <Route path='/rencontrer' element={<Rencontrer/>} />
        <Route element={<PrivateRoute/>}>
          <Route path='/profile_page' element={<ProfilePage/>} />
          <Route path='/calendrier' element={<Calendrier/>} />
          <Route path='/gestion-client' element={<GestionClient/>} />
        </Route>
      </Routes>
      { !isProfilePage && <Footer /> }
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}