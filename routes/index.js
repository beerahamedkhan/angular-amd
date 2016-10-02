var express = require('express');
var router = express.Router();
var multer  = require('multer')
//var upload = multer({ dest: 'uploads/' })

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + '/../uploads')
  },
  filename: function (req, file, cb) {
  	console.log(file);
    cb(null,  file.originalname)
  }
})
 
var upload = multer({ storage: storage })
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Express' });
});

/* GET home page. */
router.get('/angularamd', function(req, res, next) {
  res.render('angularamd', { title: 'Express' });
});


/* POST Upload file */
router.post('/upload', upload.single('pic'), function(req, res, next) {
	console.log(req.files);	
	res.json({
		msg : "File uploaded"
	})
});

var cpUpload = upload.fields([{ name: 'pic', maxCount: 1 }, { name: 'thumb', maxCount: 1 }])

router.post('/uploadMultiple', cpUpload, function(req, res, next) {
	console.log(req.files);	
	res.json({
		msg : "File uploaded"
	})
});

module.exports = router;
