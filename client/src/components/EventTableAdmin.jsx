import React, { useEffect, useState } from 'react';
import { storage } from '../../firebaseConfig';  // Assurez-vous que ce chemin est correct
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import '../styles/EventTableAdmin.css';

function EventTable() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newEvent, setNewEvent] = useState({
        startDate: '',
        endDate: '',
        eventName: '',
        location: '',
        description: '',
        moreInfoLink: '',
        logoFile: null,  // Changement ici
        logoUrl: '',  // URL de l'image après upload
    });

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des événements');
                }
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    const handleInputChange = (e) => {
        const { id, value, type, files } = e.target;
        setNewEvent(prevState => ({
            ...prevState,
            [id]: type === 'file' ? files[0] : value  // Traitement des fichiers ici
        }));
    };

    const handleImageUpload = async (file) => {
        if (file) {
            const storageRef = ref(storage, `event-logos/${file.name}`);
            try {
                await uploadBytes(storageRef, file);
                const downloadURL = await getDownloadURL(storageRef);
                return downloadURL;
            } catch (error) {
                console.error('Erreur lors de l\'upload de l\'image:', error);
                return '';
            }
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Ajouter https:// si nécessaire
        let correctedLink = newEvent.moreInfoLink;
        if (!/^https?:\/\//i.test(correctedLink)) {
            correctedLink = `https://${correctedLink}`;
        }
    
        try {
            const logoUrl = await handleImageUpload(newEvent.logoFile);
            const eventToSave = { 
                ...newEvent, 
                moreInfoLink: correctedLink,  // Utiliser le lien corrigé
                logoUrl 
            };
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(eventToSave),
            });
            const data = await response.json();
            setEvents(prevEvents => [...prevEvents, data]);
            setNewEvent({
                startDate: '',
                endDate: '',
                eventName: '',
                location: '',
                description: '',
                moreInfoLink: '',
                logoFile: null,
                logoUrl: '',
            });
            setShowForm(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'événement:', error);
        }
    };
    

    const handleDelete = async (id) => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/event/${id}`, {
                method: 'DELETE',
            });
            setEvents(prevEvents => prevEvents.filter(event => event._id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'événement:', error);
        }
    };

    if (loading) return <p>Chargement des événements...</p>;
    if (error) return <p>Erreur: {error}</p>;

    return (
        <div className="event-table-container">
            <h2>Gestion des événements</h2>
            <button className="add-event-button" onClick={() => setShowForm(!showForm)}>Ajouter un événement</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="event-form">
                    <h3>Ajouter un événement</h3>

                    <label htmlFor="eventName">Nom de l'événement</label>
                    <input id="eventName" value={newEvent.eventName} onChange={handleInputChange} required />

                    <label htmlFor="startDate">Date de début</label>
                    <input id="startDate" type="date" value={newEvent.startDate} onChange={handleInputChange} required />

                    <label htmlFor="endDate">Date de fin</label>
                    <input id="endDate" type="date" value={newEvent.endDate} onChange={handleInputChange} required />

                    <label htmlFor="location">Lieu</label>
                    <input id="location" value={newEvent.location} onChange={handleInputChange} />

                    <label htmlFor="description">Description</label>
                    <textarea id="description" value={newEvent.description} onChange={handleInputChange} />

                    <label htmlFor="moreInfoLink">Lien pour plus d'infos</label>
                    <input id="moreInfoLink" value={newEvent.moreInfoLink} onChange={handleInputChange} />

                    <label htmlFor="logoFile">Logo</label>
                    <input id="logoFile" type="file" onChange={handleInputChange} accept="image/png, image/jpeg? image/webp" />

                    <button type="submit">Ajouter</button>
                </form>
            )}

            <table className="event-table">
                <thead>
                    <tr>
                        <th>Nom de l'événement</th>
                        <th>Date de début</th>
                        <th>Date de fin</th>
                        <th>Lieu</th>
                        <th>Description</th>
                        <th>Plus d'infos</th>
                        <th>Logo</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {events.length > 0 ? (
                        events.map((event) => (
                            <tr key={event._id}>
                                <td>{event.eventName}</td>
                                <td>{event.startDate}</td>
                                <td>{event.endDate}</td>
                                <td>{event.location}</td>
                                <td>{event.description}</td>
                                <td>{event.moreInfoLink}</td>
                                <td><img src={event.logoUrl} alt={event.eventName} width="50" /></td>
                                <td>
                                    <button onClick={() => handleDelete(event._id)} className="delete-button">Supprimer</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="8">Aucun événement disponible.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default EventTable;
