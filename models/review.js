const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    user: String,
    review: String
}, { timestamps: true});

module.exports = mongoose.model('Review', reviewSchema);