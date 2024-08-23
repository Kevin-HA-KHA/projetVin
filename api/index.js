import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import eventRoutes from './routes/event.route.js';
import clientRoutes from './routes/client.route.js';
import wineRoutes from './routes/wine.route.js';
import cookieParser from 'cookie-parser';
import path from 'path';
dotenv.config();
import cors from 'cors';

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const __dirname = path.resolve();

const app = express();

app.use(express.json());

app.use(cors({
  origin: ['https://sil-vin.mastercmw.com', 'https://ominous-space-funicular-vj5gg56ppw7cxgqp-5173.app.github.dev'], // TIP : je voulais mettre origin: '*' mais en prod, les requetes nécessitant les cookies de credentials ne fonctionneront pas car les navigateurs n'acceptent pas les cookies si l'origine est * par sécurité
  credentials: true,
}));

app.use(cookieParser());

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/event', eventRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/wine', wineRoutes);
app.use('/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Chemin non trouvé',
  });
});

// app.use(express.static(path.join(__dirname, '/client/dist')));

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));
// });

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Erreur du serveur';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode,
  });
});
