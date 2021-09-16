const router = require('express').Router();
const port = process.env.PORT;
const imageRoutes = require('./imageRoute');

router.use('/image', imageRoutes);

router.get('/', (req, res) => {
    res.status(200).json({
        msg: 'Orchestrator DOmain Connected',
        connectOn: port,
    });
});

module.exports = router;