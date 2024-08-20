import mongoose from 'mongoose';

const wineSchema = new mongoose.Schema({
  id: Number,
  wineTitle: String,
  wineDate: String,
  wineDescription: String,
  tagVineText: String,
  tagLocText: String,
  tagColorText: String,
  imageUrl: String,
  MeilleurCategory: Boolean,
  NouveauteCategory: Boolean,
  RecompenseCategory: Boolean,
});

const Wine = mongoose.model('Wine', wineSchema);

export default Wine;