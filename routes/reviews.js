var express = require('express');
var router = express.Router();
var reviewsCtrl = require('../controllers/reviews');

router.get('/', reviewsCtrl.index);
router.post('/', reviewsCtrl.create);
router.put('/:id', reviewsCtrl.update);
router.delete('/:id', reviewsCtrl.delete);

module.exports = router;
