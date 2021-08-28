const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
    id: { type: Number, required: true},
    description: String,
    value: Number
});

const HomeModel = mongoose.model('Home', HomeSchema);

module.exports = HomeModel;