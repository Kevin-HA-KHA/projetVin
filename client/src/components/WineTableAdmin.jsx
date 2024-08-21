import React, { useEffect, useState } from 'react';
import '../styles/WineTableAdmin.css';

function WineTable() {
    const [wines, setWines] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newWine, setNewWine] = useState({
        id: '',
        wineTitle: '',
        wineDate: '',
        wineDescription: '',
        tagVineText: '',
        tagLocText: '',
        tagColorText: '',
        imageUrl: '',
        MeilleurCategory: false,
        NouveauteCategory: false,
        RecompenseCategory: false
    });

    useEffect(() => {
        const fetchWines = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/wine`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des vins');
                }
                const data = await response.json();
                setWines(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchWines();
    }, []);

    const handleInputChange = (e) => {
        const { id, value, type, checked } = e.target;
        setNewWine(prevState => ({
            ...prevState,
            [id]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/wine`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newWine),
            });
            const data = await response.json();
            setWines(prevWines => [...prevWines, data]);
            setNewWine({
                id: '',
                wineTitle: '',
                wineDate: '',
                wineDescription: '',
                tagVineText: '',
                tagLocText: '',
                tagColorText: '',
                imageUrl: '',
                MeilleurCategory: false,
                NouveauteCategory: false,
                RecompenseCategory: false
            });
            setShowForm(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du vin:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/wine/${id}`, {
                method: 'DELETE',
            });
            setWines(prevWines => prevWines.filter(wine => wine.id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression du vin:', error);
        }
    };

    if (loading) return <p>Chargement des vins...</p>;
    if (error) return <p>Erreur: {error}</p>;

    return (
        <div className="wine-table-container">
            <h2>Gestion des vins</h2>
            <button className="add-wine-button" onClick={() => setShowForm(!showForm)}>Ajouter un vin</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="wine-form">
                    <h3>Ajouter un vin</h3>
                    <label htmlFor="id">Id</label>
                    <input id="id" value={newWine.id} onChange={handleInputChange} required />

                    <label htmlFor="wineTitle">Titre du vin</label>
                    <input id="wineTitle" value={newWine.wineTitle} onChange={handleInputChange} required />
                    
                    <label htmlFor="wineDate">Date</label>
                    <input id="wineDate" value={newWine.wineDate} onChange={handleInputChange} required />
                    
                    <label htmlFor="wineDescription">Description</label>
                    <textarea id="wineDescription" value={newWine.wineDescription} onChange={handleInputChange} required />
                    
                    <label htmlFor="tagVineText">Tag Vigne</label>
                    <input id="tagVineText" value={newWine.tagVineText} onChange={handleInputChange} required />
                    
                    <label htmlFor="tagLocText">Tag Localisation</label>
                    <input id="tagLocText" value={newWine.tagLocText} onChange={handleInputChange} required />
                    
                    <label htmlFor="tagColorText">Tag Couleur</label>
                    <input id="tagColorText" value={newWine.tagColorText} onChange={handleInputChange} required />
                    
                    <label htmlFor="imageUrl">URL de l'image</label>
                    <input id="imageUrl" value={newWine.imageUrl} onChange={handleInputChange} />
                    
                    <label>
                        <input id="MeilleurCategory" type="checkbox" checked={newWine.MeilleurCategory} onChange={handleInputChange} />
                        Meilleur
                    </label>
                    
                    <label>
                        <input id="NouveauteCategory" type="checkbox" checked={newWine.NouveauteCategory} onChange={handleInputChange} />
                        Nouveauté
                    </label>
                    
                    <label>
                        <input id="RecompenseCategory" type="checkbox" checked={newWine.RecompenseCategory} onChange={handleInputChange} />
                        Récompense
                    </label>

                    <button type="submit">Ajouter</button>
                </form>
            )}
            <table className="wine-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom du Vin</th>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Texte de Cépage</th>
                        <th>Texte de Localisation</th>
                        <th>Texte de Couleur</th>
                        <th>Image</th>
                        <th>Meilleur vente</th>
                        <th>Nouveauté</th>
                        <th>Récompense</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {wines.map((wine) => (
                        <tr key={wine.id}>
                            <td>{wine.id}</td>
                            <td>{wine.wineTitle}</td>
                            <td>{wine.wineDate}</td>
                            <td>{wine.wineDescription}</td>
                            <td>{wine.tagVineText}</td>
                            <td>{wine.tagLocText}</td>
                            <td>{wine.tagColorText}</td>
                            <td><img src={wine.imageUrl} alt={wine.wineTitle} width="50" /></td>
                            <td>{wine.MeilleurCategory ? 'Oui' : 'Non'}</td>
                            <td>{wine.NouveauteCategory ? 'Oui' : 'Non'}</td>
                            <td>{wine.RecompenseCategory ? 'Oui' : 'Non'}</td>
                            <td>
                                <button onClick={() => handleDelete(wine._id)} className="delete-button">X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WineTable;
