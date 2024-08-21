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
        meilleur: false,
        nouveaute: false,
        recompense: false
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

    const getNextId = () => {
        if (wines.length === 0) {
            return 1; // Si la liste est vide, commencer par 1
        }
        const maxId = Math.max(...wines.map(wine => wine.id));
        return maxId + 1; // Ajouter 1 au plus grand ID existant
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const newWineWithId = { ...newWine, id: getNextId() };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/wine`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newWineWithId),
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
                meilleur: false,
                nouveaute: false,
                recompense: false
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
            setWines(prevWines => prevWines.filter(wine => wine._id !== id));
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
                    {/* <label htmlFor="id">Id</label>
                    <input id="id" value={newWine.id} onChange={handleInputChange} required /> */}

                    <label htmlFor="wineTitle">Titre du vin</label>
                    <input id="wineTitle" value={newWine.wineTitle} onChange={handleInputChange} required />
                    
                    <label htmlFor="wineDate">Date</label>
                    <input id="wineDate" value={newWine.wineDate} onChange={handleInputChange} required />
                    
                    <label htmlFor="wineDescription">Description</label>
                    <textarea id="wineDescription" value={newWine.wineDescription} onChange={handleInputChange} required />
                    
                    <label htmlFor="tagVineText">Cépage</label>
                    <input id="tagVineText" value={newWine.tagVineText} onChange={handleInputChange} required />
                    
                    <label htmlFor="tagLocText">Région</label>
                    <input id="tagLocText" value={newWine.tagLocText} onChange={handleInputChange} required />
                    
                    <label htmlFor="tagColorText">Couleur</label>
                    <input id="tagColorText" value={newWine.tagColorText} onChange={handleInputChange} required />
                    
                    <label htmlFor="imageUrl">URL de l'image</label>
                    <input id="imageUrl" value={newWine.imageUrl} onChange={handleInputChange} />
                    
                    <label>
                        <input id="meilleur" type="checkbox" checked={newWine.meilleur} onChange={handleInputChange} />
                        Meilleur
                    </label>
                    
                    <label>
                        <input id="nouveaute" type="checkbox" checked={newWine.nouveaute} onChange={handleInputChange} />
                        Nouveauté
                    </label>
                    
                    <label>
                        <input id="recompense" type="checkbox" checked={newWine.recompense} onChange={handleInputChange} />
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
                        <th>Cépage</th>
                        <th>Région</th>
                        <th>Couleur</th>
                        <th>Image</th>
                        <th>Meilleur</th>
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
                            <td>{wine.meilleur ? 'Oui' : 'Non'}</td>
                            <td>{wine.nouveaute ? 'Oui' : 'Non'}</td>
                            <td>{wine.recompense ? 'Oui' : 'Non'}</td>
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
