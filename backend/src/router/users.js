const { Router } = require('express');
const router = Router();

router.route('/')
    .get((req, res) => res.send('ruta de usuarios'));
    
module.exports = router;