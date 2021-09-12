const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const TagVideo = require('../models/Tags');
const db = require('../config/database');
const auth = require('../middleware/auth');

const tagsCtrl = require('../controllers/tags');


router.post('/', auth, tagsCtrl.createVideo);
router.delete('/:id', auth, tagsCtrl.deleteVideo);

module.exports = router;