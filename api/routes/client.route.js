import express from 'express';
import Client from '../models/client.model.js';
import { registerClient } from '../controllers/client.controller.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const client = await Client.find(); 
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/register-client', registerClient);

export default router;
