var express = require('express');

var router = express.Router();

const onboarding = require("../app/v1/onboarding/router")

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.use("/onboarding", onboarding)

// const verifyToken=


module.exports = router;
