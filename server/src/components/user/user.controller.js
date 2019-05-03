import bodyParser from 'body-parser';
import express from 'express';
import User from './user.model';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* Get All Users in the Database */
router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      return res.status(500).send('Could not get the list of users');
    }
    return res.status(200).send(users);
  });
});

/* Add a user in the database */
router.post('/', (req, res) => {
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone
    },
    (err, user) => {
      if (err) {
        return res.status(500).send('Could not add user');
      }
      return res.status(201).send(user);
    }
  );
});

export default router;
