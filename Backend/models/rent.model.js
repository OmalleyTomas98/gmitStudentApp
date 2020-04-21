const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const rentSchema = new Schema({
    address: {type: String, required: true},
    features: {type: String, required: true},
    cost: {type: Number, required: true},
    contact:{type: Number, required: true}
});

const Rent = mongoose.model('Rent', rentSchema);

module.exports = Rent;