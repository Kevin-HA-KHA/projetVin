import React from "react";
import "../styles/GestionClient.css";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";


export default function GestionClient() {
  const [isClicked, setIsClicked] = React.useState(false);

  return (
    <div className="gestionClient">
      <nav className="nav-gestionClient">
        <button onClick={() => {setIsClicked(false)}} style={{ backgroundColor: !isClicked ? "#BABABA" : "grey" }}>Mes clients</button>
        <button onClick={() => {setIsClicked(true)}} style={{ backgroundColor: isClicked ? "#BABABA" : "grey" }}>Listes de diffusion</button>
      </nav>
      { !isClicked ? <ClientAdmin /> : <ListeDiffusion /> }
    </div>
  );
}




export function ClientAdmin() {
  const [isAjoutClientVisible, setIsAjoutClientVisible] = React.useState(false);

  return (
    <div className="clientAdmin">
      <div className="ajoutClientBar">
        <button onClick={() => {isAjoutClientVisible ? setIsAjoutClientVisible(false) : setIsAjoutClientVisible(true)}}>+ Ajouter un client</button>
      </div>
      { isAjoutClientVisible ? <ModalClient /> : null }
    </div>    
  );
}

export function ModalClient() {
  const [clientName, setClientName] = useState('');
  const [clientSurname, setClientSurname] = useState('');
  const [job, setJob] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [clientTelephone, setClientTelephone] = useState('');
  const [clientStatus, setClientStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newClient = {
      clientName,
      clientSurname,
      job,
      clientEmail,
      clientTelephone,
      clientStatus
    };

    try {
      const response = await fetch('/api/clients', {  // Remplacez par l'URL de votre API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newClient),
      });

      if (response.ok) {
        alert('Client ajouté avec succès');
        // Réinitialiser les champs du formulaire après soumission
        setClientName('');
        setClientSurname('');
        setJob('');
        setClientEmail('');
        setClientTelephone('');
        setClientStatus('');
      } else {
        alert('Erreur lors de l\'ajout du client');
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  return (
    <div className="modalClient">
      <form onSubmit={handleSubmit}>
        <label>
          Nom :
          <input
            type="text"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            required
          />
        </label>
        <label>
          Prénom :
          <input
            type="text"
            value={clientSurname}
            onChange={(e) => setClientSurname(e.target.value)}
            required
          />
        </label>
        <label>
          Poste :
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            required
          />
        </label>
        <label>
          Email :
          <input
            type="email"
            value={clientEmail}
            onChange={(e) => setClientEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Téléphone :
          <input
            type="tel"
            value={clientTelephone}
            onChange={(e) => setClientTelephone(e.target.value)}
            required
          />
        </label>
        <label>
          Statut :
          <input
            type="text"
            value={clientStatus}
            onChange={(e) => setClientStatus(e.target.value)}
            required
          />
        </label>
        <button type="submit">Ajouter Client</button>
      </form>
    </div>
  );
}

export function ListeDiffusion() {  
  return (
    <div className="listeDiffusion">
      <h1>Liste de diffusion</h1>
    </div>
  )
}