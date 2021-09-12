const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const Video = require('../models/Video');
const db = require('../config/database');
const auth = require('../middleware/auth');

const videoCtrl = require('../controllers/video');

router.get('/', auth, videoCtrl.getAllVideo);
router.post('/', auth, videoCtrl.createVideo);
router.get('/:id', auth, videoCtrl.getOneVideo);
router.put('/:id', auth, videoCtrl.modifyVideo);
router.delete('/:id', auth, videoCtrl.deleteVideo);

module.exports = router;