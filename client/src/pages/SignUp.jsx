import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/SignUp.css';

export default function SignUp() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      navigate('/admin');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };
  return (

<div className='container'>
  <div className='banner singup-banner container flex-center'>
    <div className='singup-block'>
      <form onSubmit={handleSubmit} className='singup'>
        <div className='intro'>
          <h1 className=''>Créer un compte</h1>
        </div>
        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          type='text'
          placeholder="Nom d'utilisateur"
          id='username'
          className=''
          onChange={handleChange}
        />
        <label htmlFor="password">Mot de passe</label>
        <input
          type='password'
          placeholder='Mot de passe'
          id='password'
          className=''
          onChange={handleChange}
        />
        <button
            disabled={loading}
            className=''
          >
            {loading ? 'Chargement...' : 'S\'inscrire'}
        </button>
      </form>
      <div className='singup-link'>
        <Link to='/admin'>
          <span className=''>Déjà un compte ?</span>
        </Link>
      </div>
      <p className=''>{error && 'Une erreur s\'est produite!'}</p>
    </div>
    </div>
    </div>
  );
}
