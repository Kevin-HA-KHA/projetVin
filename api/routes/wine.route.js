import express from 'express';
import Wine from '../models/wine.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const wine = await Wine.find(); 
    res.json(wine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
