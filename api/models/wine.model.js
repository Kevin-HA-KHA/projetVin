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
  wineCategory: String,
});

const Wine = mongoose.model('Wine', wineSchema);

export default Wine;