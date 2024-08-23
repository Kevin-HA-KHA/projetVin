import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    updateUserStart, 
    updateUserSuccess, 
    updateUserFailure, 
    deleteUserStart, 
    deleteUserSuccess, 
    deleteUserFailure, 
    signOut 
} from '../redux/user/userSlice';
import '../styles/AccountManagementAdmin.css';

const AccountManagement = () => {
    const dispatch = useDispatch();
    const { currentUser, loading, error } = useSelector(state => state.user);
    const [formData, setFormData] = useState({
        username: currentUser?.username || '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            dispatch(updateUserStart());
            const res = await fetch(`${import.meta.env.VITE_API_URL}/api/user/update/${currentUser._id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials: 'include',
                body: JSON.stringify(formData),
            });
            const data = await res.json();

            if (!res.ok) {
                dispatch(updateUserFailure(data.message));
                return;
            }

            dispatch(updateUserSuccess(data));
            alert('Profil mis à jour avec succès!');
        } catch (err) {
            dispatch(updateUserFailure('Une erreur est survenue lors de la mise à jour.'));
        }
    };

    const handleDelete = async () => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte? Cette action est irréversible.")) {
            try {
                dispatch(deleteUserStart());
                const res = await fetch(`/api/user/delete/${currentUser._id}`, {
                    method: 'DELETE',
                });
                const data = await res.json();

                if (!res.ok) {
                    dispatch(deleteUserFailure(data.message));
                    return;
                }

                dispatch(deleteUserSuccess());
                alert('Compte supprimé avec succès.');
                dispatch(signOut());
            } catch (err) {
                dispatch(deleteUserFailure('Une erreur est survenue lors de la suppression.'));
            }
        }
    };

    return (
        <div className="account-management">
            <h2>Gérer mon compte</h2>
            <form onSubmit={handleUpdate} className="account-form">
                <div>
                    <label htmlFor="username">Nom d'utilisateur</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        value={formData.username} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <div>
                    <label htmlFor="password">Nouveau mot de passe</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        value={formData.password} 
                        onChange={handleChange} 
                        required 
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Mise à jour...' : 'Mettre à jour'}
                </button>
                {/* Vérifiez que error est une chaîne avant de l'afficher */}
                {error && typeof error === 'string' && <p className="error-message">{error}</p>}
            </form>
            <button className="delete-button" onClick={handleDelete}>
                Supprimer mon compte
            </button>
        </div>
    );
};

export default AccountManagement;
