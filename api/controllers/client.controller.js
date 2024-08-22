import Client from '../models/client.model.js';
import { errorHandler } from '../utils/error.js';

export const registerClient = async (req, res) => {
  const { clientName, clientSurname, job, clientEmail, clientTelephone, clientStatus } = req.body;

  try {
    const newClient = new Client({
      clientName,
      clientSurname,
      job,
      clientEmail,
      clientTelephone,
      clientStatus,
    });

    await newClient.save();
    res.status(201).json({ message: 'Client ajouté avec succès', client: newClient });
  } catch (error) {
    console.error('Erreur lors de l\'ajout du client:', error);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
