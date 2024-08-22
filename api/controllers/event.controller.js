// controllers/event.controller.js

import Event from '../models/event.model.js';

// Récupérer tous les événements
export const getAllEvents = async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer tous les événements
export const getOneEvents = async (req, res) => {
    try {
        const events = await Event.findOne();
        res.json(events);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer un événement par ID
export const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);
        if (!event) return res.status(404).json({ message: "Événement non trouvé" });
        res.json(event);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Créer un nouvel événement
export const createEvent = async (req, res) => {
    const { startDate, endDate, eventName, location, description, moreInfoLink, logoUrl } = req.body;
    const event = new Event({
        startDate,
        endDate,
        eventName,
        location,
        description,
        moreInfoLink,
        logoUrl
    });

    try {
        const newEvent = await event.save();
        res.status(201).json(newEvent);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Mettre à jour un événement
export const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!event) return res.status(404).json({ message: "Événement non trouvé" });
        res.json(event);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un événement
export const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);
        if (!event) return res.status(404).json({ message: "Événement non trouvé" });
        res.json({ message: "Événement supprimé avec succès" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
