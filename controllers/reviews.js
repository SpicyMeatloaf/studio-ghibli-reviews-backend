var Review = require('../models/review');

module.exports = {
    index,
    create,
}

function index(req, res) {
    Review.find({}, function (err, reviews) {
        res.status(200).json(reviews);
    });
}

function create(req, res) {
    Review.create(req.body, function (err, review) {
        res.status(201).json({review});
    });
}