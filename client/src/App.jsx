import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import { PopupWidget} from 'react-calendly';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
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
        </Route>
      </Routes>
      {/* <PopupWidget
            // url="https://calendly.com/cmille749/30min?month=2024-03"
            url="https://calendly.com/kevinha27/reservation-de-creneau-s-il-vin"
            rootElement={document.getElementById("root")}
            text="Prendre rendez-vous"
            textColor="#ffffff"
            color="#6b0e2b"
        /> */}
      <Footer />
    </BrowserRouter>
  );
}
