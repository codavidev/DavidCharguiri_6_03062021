const express = require('express');
const router = express.Router();
const likeCtrl = require('../controllers/likeCtrl');
const auth = require('../middleware/auth');

// Route pour gérer les likes
router.post('/:id/like', auth, likeCtrl.handleLike);

module.exports = router;