const router = require('express').Router();
let Rent = require('../models/rent.model');

router.route('/').get((req, res) => {
    Rent.find()
    .then(rents => res.json(rents))
    //If error, return status 400
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add property
router.route('/add').post((req, res) => {
    const address = req.ody.address;
    const features = req.body.features;
    const cost = Number(req.body.cost);
    const contact = Number(req.body.contact);

    const newRent = new Rent({
        address,
        features,
        cost,
        contact,
    });

    // Save changes
    newRent.save()
    .then(() => res.json('Property Added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Retrieve property from database
router.route('/:id').get((req, res) => {
    Rent.findById(req.params.id)
    .then(rent => res.json(rent))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Delete property from database
router.route('/:id').delete((req, res) => {
    Rent.findByIdAndDelete(req.params.id)
      .then(() => res.json('Property Deleted'))
      .catch(err => res.status(400).json('Error: ' + err));
});

// Update property
router.route('/update/:id').post((req, res) => {
    Rent.findById(req.params.id)
    .then(rent => {
        rent.address = req.body.username;
        rent.features = req.body.features;
        rent.cost = Number(req.body.cost);
        rent.contact = Number(req.body.contact);

        rent.save()
        .then(() => res.json('Property Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;