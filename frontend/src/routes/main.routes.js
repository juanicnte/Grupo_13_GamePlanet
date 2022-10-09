const {Router} = require('express');
const router = new Router();
const {home} = require('../controller/main.controller');

router.get('/', home);

module.exports = router;