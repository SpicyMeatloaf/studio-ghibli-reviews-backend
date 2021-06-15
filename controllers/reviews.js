var Review = require('../models/review');

module.exports = {
    index,
    create,
    update,
    delete: deleteReview,
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

function update(req, res) {
    Review.findByIdAndUpdate(req.params.id, req.body, function() {
        index(req, res);
    })
}

function deleteReview(req, res) {
    Review.findByIdAndDelete(req.params.id, function() {
        index(req, res);
    })
}
