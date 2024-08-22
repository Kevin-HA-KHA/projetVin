import React, { useEffect, useState } from 'react';
import '../styles/EventTableAdmin.css';

function EventTable() {
    const [event, setEvent] = useState(null);
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
        logoUrl: '',
    });

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération de l\'événement');
                }
                const data = await response.json();
                setEvent(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchEvent();
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewEvent(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newEvent),
            });
            const data = await response.json();
            setEvent(data);
            setNewEvent({
                startDate: '',
                endDate: '',
                eventName: '',
                location: '',
                description: '',
                moreInfoLink: '',
                logoUrl: '',
            });
            setShowForm(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout de l\'événement:', error);
        }
    };

    const handleDelete = async () => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/event/${event._id}`, {
                method: 'DELETE',
            });
            setEvent(null);
        } catch (error) {
            console.error('Erreur lors de la suppression de l\'événement:', error);
        }
    };

    if (loading) return <p>Chargement de l'événement...</p>;
    if (error) return <p>Erreur: {error}</p>;

    return (
        <div className="event-table-container">
            <h2>Gestion de l'événement</h2>
            <button className="add-event-button" onClick={() => setShowForm(!showForm)}>Ajouter un événement</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="event-form">
                    <h3>Ajouter un événement</h3>

                    <label htmlFor="eventName">Nom de l'événement</label>
                    <input id="eventName" value={newEvent.eventName} onChange={handleInputChange} required />

                    <label htmlFor="startDate">Date de début</label>
                    <input id="startDate" value={newEvent.startDate} onChange={handleInputChange} required />

                    <label htmlFor="endDate">Date de fin</label>
                    <input id="endDate" value={newEvent.endDate} onChange={handleInputChange} required />

                    <label htmlFor="location">Lieu</label>
                    <input id="location" value={newEvent.location} onChange={handleInputChange} required />

                    <label htmlFor="description">Description</label>
                    <textarea id="description" value={newEvent.description} onChange={handleInputChange} required />

                    <label htmlFor="moreInfoLink">Lien pour plus d'infos</label>
                    <input id="moreInfoLink" value={newEvent.moreInfoLink} onChange={handleInputChange} />

                    <label htmlFor="logoUrl">URL du logo</label>
                    <input id="logoUrl" value={newEvent.logoUrl} onChange={handleInputChange} />

                    <button type="submit">Ajouter</button>
                </form>
            )}

            {event ? (
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
                        <tr key={event._id}>
                            <td>{event.eventName}</td>
                            <td>{event.startDate}</td>
                            <td>{event.endDate}</td>
                            <td>{event.location}</td>
                            <td>{event.description}</td>
                            <td>
                                <a href={event.moreInfoLink} target="_blank" rel="noopener noreferrer">
                                    Plus d'infos
                                </a>
                            </td>
                            <td><img src={event.logoUrl} alt={event.eventName} width="50" /></td>
                            <td>
                                <button onClick={handleDelete} className="delete-button">Supprimer</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            ) : (
                <p>Aucun événement disponible.</p>
            )}
        </div>
    );
}

export default EventTable;
