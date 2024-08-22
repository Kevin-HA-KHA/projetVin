import express from 'express';
import Client from '../models/client.model.js';
import { registerClient } from '../controllers/client.controller.js';

const router = express.Router();

// Récupérer tous les clients
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Créer un nouveau client
router.post('/register-client', registerClient);

// Supprimer un client
router.delete('/:id', async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    if (!client) return res.status(404).json({ message: 'Client non trouvé' });

    await client.deleteOne();
    res.json({ message: 'Client supprimé' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
