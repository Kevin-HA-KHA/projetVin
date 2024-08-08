import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  startDate: String,
  endDate: String,
  eventName: String,
  location: String,
  description: String,
  moreInfoLink: String,
  logoUrl: String,
});

const Event = mongoose.model('Event', eventSchema);

export default Event;
