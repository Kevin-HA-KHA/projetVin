import express from 'express';
import Event from '../models/event.model.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const event = await Event.findOne(); 
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
