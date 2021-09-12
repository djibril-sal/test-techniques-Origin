const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const TagVideo = require('../models/Tag-Video');
const db = require('../config/database');
const auth = require('../middleware/auth');

const tagsVideoCtrl = require('../controllers/tag-videos');


router.post('/', auth, tagsVideoCtrl.createVideo);
router.delete('/:id', auth, tagsVideoCtrl.deleteVideo);

module.exports = router;