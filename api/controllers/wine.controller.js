import Wine from '../models/wine.model.js';

// Récupérer tous les vins
export const getAllWines = async (req, res) => {
    try {
        const wines = await Wine.find();
        res.json(wines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer tous les vins meilleures ventes
export const getMeilleur = async (req, res) => {
    try {
        const wines = await Wine.find({ meilleur: true });
        res.json(wines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Récupérer tous les vins recompensés
export const getRecompense = async (req, res) => {
    try {
        const wines = await Wine.find({ recompense: true });
        res.json(wines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


// Récupérer tous les vins nouveautés
export const getNouveaute = async (req, res) => {
    try {
        const wines = await Wine.find({ nouveaute: true });
        res.json(wines);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



// Récupérer un vin par ID
export const getWineById = async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id);
        if (!wine) {
            return res.status(404).json({ message: 'Vin non trouvé' });
        }
        res.json(wine);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Ajouter un nouveau vin
export const createWine = async (req, res) => {
    const wine = new Wine({
        wineTitle: req.body.wineTitle,
        wineDate: req.body.wineDate,
        wineDescription: req.body.wineDescription,
        tagVineText: req.body.tagVineText,
        tagLocText: req.body.tagLocText,
        tagColorText: req.body.tagColorText,
        imageUrl: req.body.imageUrl,
        MeilleurCategory: req.body.MeilleurCategory,
        NouveauteCategory: req.body.NouveauteCategory,
        RecompenseCategory: req.body.RecompenseCategory,
    });

    try {
        const newWine = await wine.save();
        res.status(201).json(newWine);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Mettre à jour un vin
export const updateWine = async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id);
        if (!wine) {
            return res.status(404).json({ message: 'Vin non trouvé' });
        }

        // Mettre à jour les champs
        wine.wineTitle = req.body.wineTitle || wine.wineTitle;
        wine.wineDate = req.body.wineDate || wine.wineDate;
        wine.wineDescription = req.body.wineDescription || wine.wineDescription;
        wine.tagVineText = req.body.tagVineText || wine.tagVineText;
        wine.tagLocText = req.body.tagLocText || wine.tagLocText;
        wine.tagColorText = req.body.tagColorText || wine.tagColorText;
        wine.imageUrl = req.body.imageUrl || wine.imageUrl;
        wine.MeilleurCategory = req.body.MeilleurCategory || wine.MeilleurCategory;
        wine.NouveauteCategory = req.body.NouveauteCategory || wine.NouveauteCategory;
        wine.RecompenseCategory = req.body.RecompenseCategory || wine.RecompenseCategory;

        const updatedWine = await wine.save();
        res.json(updatedWine);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Supprimer un vin
export const deleteWine = async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id);
        if (!wine) {
            return res.status(404).json({ message: 'Vin non trouvé' });
        }
        await Wine.deleteOne({ _id: req.params.id });
        res.json({ message: 'Vin supprimé' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

