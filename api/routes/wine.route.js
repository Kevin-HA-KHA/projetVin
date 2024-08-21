import express from 'express';
import Wine from '../models/wine.model.js';
import {
  getAllWines,
  getMeilleur,
  getNouveaute,
  getRecompense,
  getWineById,
  createWine,
  updateWine,
  deleteWine
} from '../controllers/wine.controller.js';

const router = express.Router();


// Routes pour les vins
router.get('/', getAllWines);
router.get('/meilleur', getMeilleur);
router.get('/nouveaute', getNouveaute);
router.get('/recompense', getRecompense);
router.get('/:id', getWineById);
router.post('/', createWine);
router.put('/:id', updateWine);
router.delete('/:id', deleteWine);


router.get('/meilleur', async (req, res) => {
  try {
    const wine = await Wine.find({ meilleur: true }); 
    res.json(wine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/nouveaute', async (req, res) => {
  try {
    const wine = await Wine.find({ nouveaute: true }); 
    res.json(wine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/recompense', async (req, res) => {
  try {
    const wine = await Wine.find({ recompense: true }); 
    res.json(wine);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

export default router;
