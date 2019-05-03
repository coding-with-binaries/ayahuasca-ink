import bodyParser from 'body-parser';
import express from 'express';
import Tattoo from './tattoo.model';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* Get All Tattooes in the Database */
router.get('/', (req, res) => {
  Tattoo.find({}, (err, tattoos) => {
    if (err) {
      return res.status(500).send('Could not get the list of tattoos');
    }
    return res.status(200).send(tattoos);
  });
});

/* Add a Tattoo in the database */
router.post('/', (req, res) => {
  Tattoo.create(
    {
      title: req.body.title,
      source: req.body.source
    },
    (err, tattoo) => {
      if (err) {
        return res.status(500).send('Could not add tattoo');
      }
      return res.status(201).send(tattoo);
    }
  );
});

/* Get Tattoo by Id */
router.get('/:id', (req, res) => {
  Tattoo.findById(req.params.id, (err, tattoo) => {
    if (err) {
      return res
        .status(500)
        .send(`Could not get tattoo with id: ${req.params.id}`);
    } else if (!tattoo) {
      return res.status(404).send(`No tattoo with id: ${req.params.id}`);
    }
    return res.status(200).send(tattoo);
  });
});

export default router;
