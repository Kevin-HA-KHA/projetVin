import React, { useEffect, useState } from 'react';
import '../styles/ClientTableAdmin.css';

function ClientTable() {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [newClient, setNewClient] = useState({
        clientName: '',
        clientSurname: '',
        job: 'Grossiste',
        clientEmail: '',
        clientTelephone: '',
        clientStatus: 'particulier',
    });

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}/api/client`);
                if (!response.ok) {
                    throw new Error('Erreur lors de la récupération des clients');
                }
                const data = await response.json();
                setClients(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setNewClient(prevState => ({
            ...prevState,
            [id]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/client/register-client`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newClient),
            });
    
            if (!response.ok) {
                throw new Error('Erreur lors de l\'ajout du client');
            }
    
            const data = await response.json(); // Assurez-vous que 'data' contient les informations complètes
            setClients(prevClients => [...prevClients, data]); // Ajoutez le client avec toutes les informations
            setNewClient({
                clientName: '',
                clientSurname: '',
                job: 'Grossiste',
                clientEmail: '',
                clientTelephone: '',
                clientStatus: 'particulier',
            });
            setShowForm(false);
        } catch (error) {
            console.error('Erreur lors de l\'ajout du client:', error);
        }
    };
    

    const handleDelete = async (id) => {
        try {
            await fetch(`${import.meta.env.VITE_API_URL}/api/client/${id}`, {
                method: 'DELETE',
            });
            setClients(prevClients => prevClients.filter(client => client._id !== id));
        } catch (error) {
            console.error('Erreur lors de la suppression du client:', error);
        }
    };

    if (loading) return <p>Chargement des clients...</p>;
    if (error) return <p>Erreur: {error}</p>;

    return (
        <div className="client-table-container">
            <h2>Gestion des clients</h2>
            <button className="add-client-button" onClick={() => setShowForm(!showForm)}>Ajouter un client</button>
            {showForm && (
                <form onSubmit={handleSubmit} className="client-form">
                    <h3>Ajouter un client</h3>
                    
                    <label htmlFor="clientName">Nom</label>
                    <input id="clientName" value={newClient.clientName} onChange={handleInputChange} required />

                    <label htmlFor="clientSurname">Prénom</label>
                    <input id="clientSurname" value={newClient.clientSurname} onChange={handleInputChange} required />
                    
                    <label htmlFor="job">Profession</label>
                    <select id="job" value={newClient.job} onChange={handleInputChange} required>
                        <option value="Grossiste">Grossiste</option>
                        <option value="Agriculteur">Agriculteur</option>
                        <option value="Viticulteur">Viticulteur</option>
                        <option value="Oenologue">Oenologue</option>
                        <option value="Revendeur">Revendeur</option>
                        <option value="Autre">Autre</option>
                    </select>
                    
                    <label htmlFor="clientEmail">Email</label>
                    <input id="clientEmail" value={newClient.clientEmail} onChange={handleInputChange} required />
                    
                    <label htmlFor="clientTelephone">Téléphone</label>
                    <input id="clientTelephone" value={newClient.clientTelephone} onChange={handleInputChange} required />
                    
                    <label htmlFor="clientStatus">Statut</label>
                    <select id="clientStatus" value={newClient.clientStatus} onChange={handleInputChange} required>
                        <option value="particulier">Particulier</option>
                        <option value="professionnel">Professionnel</option>
                    </select>

                    <button type="submit">Ajouter</button>
                </form>
            )}
            <table className="client-table">
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prénom</th>
                        <th>Profession</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                        <th>Statut</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {clients.map(client => (
                        <tr key={client._id}>
                            <td>{client.clientName}</td>
                            <td>{client.clientSurname}</td>
                            <td>{client.job}</td>
                            <td>{client.clientEmail}</td>
                            <td>{client.clientTelephone}</td>
                            <td>{client.clientStatus}</td>
                            <td>
                                <button onClick={() => handleDelete(client._id)} className="delete-button">X</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ClientTable;
