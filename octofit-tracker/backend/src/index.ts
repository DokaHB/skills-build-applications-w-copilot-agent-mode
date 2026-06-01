import express from 'express';
import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/octofit';
const PORT = Number(process.env.PORT || 8000);

const app = express();
app.use(express.json());

app.get('/', (_req, res) => res.json({ status: 'ok' }));

mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('MongoDB connection error', err);
    process.exit(1);
  });
