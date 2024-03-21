import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './pages/Footer';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ProfilePage from './pages/ProfilePage';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import Calendrier from './pages/Calendrier';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path='/profile_page' element={<ProfilePage/>} />
          <Route path='/calendrier' element={<Calendrier/>} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
