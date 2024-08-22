import express from 'express';
import {
    getAllEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
} from '../controllers/event.controller.js';

const router = express.Router();

// Route pour récupérer tous les événements
router.get('/', getAllEvents);

// Route pour récupérer un événement par ID
router.get('/:id', getEventById);

// Route pour créer un nouvel événement
router.post('/', createEvent);

// Route pour mettre à jour un événement par ID
router.put('/:id', updateEvent);

// Route pour supprimer un événement par ID
router.delete('/:id', deleteEvent);

export default router;
