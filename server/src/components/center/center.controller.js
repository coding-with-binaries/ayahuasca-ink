import bodyParser from 'body-parser';
import express from 'express';
import Center from './center.model';

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/* Get All Centers */
router.get('/', (req, res) => {
  Center.find({}, (err, centers) => {
    if (err) {
      return res.status(500).send('Could not get the list of centers');
    }
    return res.status(200).send(centers);
  });
});

/* Add a center in the database */
router.post('/', (req, res) => {
  Center.create(
    {
      name: req.body.name,
      geoLocation: req.body.geoLocation,
      isCurrent: false
    },
    (err, center) => {
      if (err) {
        return res.status(500).send('Could not add center');
      }
      return res.status(201).send(center);
    }
  );
});

/* Get current center */
router.get('/currentCenter', (req, res) => {
  Center.find({ isCurrent: true }, (err, currentCenter) => {
    if (err) {
      return res.status(500).send(`Could not get current center`);
    } else if (!currentCenter) {
      return res.status(404).send(`No current center`);
    }
    return res.status(200).send(currentCenter);
  });
});

/* Update current center */
router.put('/currentCenter', (req, res) => {
  Center.updateMany({ isCurrent: true }, { isCurrent: false }, (err, raw) => {
    if (err) {
      return res.status(500).send(`Could not update current center`);
    }
    const query = { name: req.body.name };
    const update = {
      name: req.body.name,
      geoLocation: req.body.geoLocation,
      isCurrent: true
    };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };
    Center.findOneAndUpdate(query, update, options, (err, currentCenter) => {
      if (err) {
        return res.status(500).send(`Could not update current center`);
      }
      return res.status(200).send(currentCenter);
    });
  });
});

export default router;
