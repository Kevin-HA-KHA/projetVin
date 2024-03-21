import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUserDataSuccess,
  getUserDataFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
  signOut,
  errorReset
} from '../redux/user/userSlice';

export default function ProfilePage() {
    const dispatch = useDispatch();
    const fileRef = useRef(null);
    const [formData, setFormData] = useState({});
    const [updateSuccess, setUpdateSuccess] = useState(false);
    const { currentUser, loading, error } = useSelector((state) => state.user);
    // Convertir la date en objet Date
    const createdAtDate = new Date(currentUser.createdAt);
    // Options de formatage pour le mois
    const options = { month: 'long', day: 'numeric', year: 'numeric' };
    // Formater la date selon les options
    const formattedDate = createdAtDate.toLocaleDateString('fr-FR', options);

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        dispatch(updateUserStart());
        // 1. Encapsulez la requête asynchrone dans une fonction qui renvoie une promesse
        const updateUserData = async () => {
          const res = await fetch(`/api/user/update/${currentUser._id}`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          return await res.json();
        };
    
        const data = await updateUserData(); 
        console.log(data);
    
        if (data.success === false) {
          dispatch(updateUserFailure(data));
          return;
        }
        dispatch(updateUserSuccess(data));
        setUpdateSuccess(true);
      } catch (error) {
        dispatch(updateUserFailure(error));
      }
    };
  
    const handleDeleteAccount = async () => {
      try {
        dispatch(deleteUserStart());
        const res = await fetch(`/api/user/delete/${currentUser._id}`, {
          method: 'DELETE',
        });
        const data = await res.json();
        if (data.success === false) {
          dispatch(deleteUserFailure(data));
          return;
        }
        dispatch(deleteUserSuccess(data));
      } catch (error) {
        dispatch(deleteUserFailure(error));
      }
    };

    const handleSignOut = async () => {
      try {
        await fetch('/api/auth/signout');
        dispatch(signOut())
      } catch (error) {
        console.log(error);
      }
    };

    useEffect(() => {
      const fetchData = async () => {
        try {
          const res = await fetch(`/api/user/${currentUser._id}`);
          const data = await res.json();
          if (data.success === false) {
            dispatch(getUserDataFailure(data));
            return;
          }
          dispatch(getUserDataSuccess(data));
        } catch (err) {
          dispatch(getUserDataFailure(err));
        }
      };
      fetchData();
    }, []);

    return (
        <div className='profil'>
          <div className='change-profil'>
            <p className='username'>{currentUser.username}</p> 
            <form onSubmit={handleSubmit} className='flex-column'>
              <label htmlFor="username">Nom d'utilisateur</label>
              <input
                defaultValue={currentUser.username}
                type='text'
                id='username'
                placeholder="Nom d'utilisateur"
                className=''
                onChange={handleChange}
              />
              <label htmlFor="password">Mot de passe</label>
              <input
                type='password'
                id='password'
                placeholder='Mot de passe'
                className=''
                onChange={handleChange}
              />
              <p className='rounded-lg p-3'>
                  Inscrit le : {formattedDate}
              </p>
              <button className=''>
                {loading ? 'Chargement...' : 'Mettre à jour'}
              </button>
              {/* <p className=''>{error && 'Une erreur est survenue!'}</p> */}
          <div>
            <Link><button onClick={handleSignOut} className=''>Se déconnecter</button></Link>
            <Link><button onClick={handleDeleteAccount} className=''>Supprimer le compte</button></Link>
          </div>
              {/* <p className=''>
                {updateSuccess && `Votre profil a bien été mis à jour !`}
              </p> */}
          </form>

          </div>
          <div className='dashboard'>
            <h1>Tableau de bord</h1>  
          </div>
        </div>
        
    )
}