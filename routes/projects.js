var express = require('express');
var router = express.Router();
var Projects = require('../controllers/projects');
var Teachers = require('../models/teacher');
/* GET home page. */

router.get('/', Projects.findProjects);
// router.get('/projects', projects.showproject);
router.get('/tags/:tag', Projects.findTagProjects);


router.get('/add', function(req, res) {
  Teachers.find({}, function(err, results) {
    if (err) throw err;
    //console.log(results);
    res.render('addproject', {
      results: results
    });
  });

});

router.post('/add', Projects.addproject);

router.get('/:id', Projects.showProject);


/*test purpose*/
/*
var multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads');
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + file.originalname);
  }
});

var upload = multer({
  storage: storage
});

router.post('/test', upload.single('img'), function(req, res, err) {
  if (err) console.log(err);
  console.log("==================");
  res.redirect('/');
});
*/
module.exports = router;
