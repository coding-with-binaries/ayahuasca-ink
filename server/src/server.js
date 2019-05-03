import express from 'express';
import mongoose from 'mongoose';
import ROUTES from './constants/server-uri';
import { UserController } from './user';

const app = express();

const port = 8000;

mongoose.connect('mongodb://localhost/ayahuasca_ink', {
  useNewUrlParser: true
});

app.use(ROUTES.users, UserController);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;
