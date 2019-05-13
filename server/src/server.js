import express from 'express';
import mongoose from 'mongoose';
import {
  CenterController,
  TattooController,
  UserController
} from './components';
import ROUTES from './constants/server-uri';

const app = express();

const port = 8000;

mongoose.connect('mongodb://localhost/ayahuasca_ink', {
  useNewUrlParser: true
});

app.use(ROUTES.users, UserController);
app.use(ROUTES.tattoos, TattooController);
app.use(ROUTES.centers, CenterController);

app.listen(port, () => console.log(`Server is listening on port ${port}`));

export default app;
