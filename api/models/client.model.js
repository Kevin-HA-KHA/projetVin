import mongoose from 'mongoose';

const clientSchema = new mongoose.Schema({
  clientName: String,
  clientSurname: String,
  job: String,
  clientEmail: String,
  clientTelephone: String,
  clientStatus: String,
});

const Client = mongoose.model('Client', clientSchema);

export default Client;
