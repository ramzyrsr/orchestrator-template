const router = require('express').Router();
const ImageController = require('../controller/imageController');

router.post('/upload', ImageController.Upload);

module.exports = router;