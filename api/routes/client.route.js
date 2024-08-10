import express from 'express';
import Client from '../models/client.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const client = await Client.findOne(); 
    res.json(client);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
