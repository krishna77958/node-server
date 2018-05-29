const express = require('express'),cors = require('cors');
const app = express();
// const mongo = require('mongodb');
// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/";
const admin = require('firebase-admin');
var multer = require('multer');
    var xlstojson = require("xls-to-json-lc");
    var xlsxtojson = require("xlsx-to-json-lc");

	var jsonLocation = "./fir-ecf24-firebase-adminsdk-i32ey-a0c9565240.json";
var fireBaseDatabaseURL = "https://fir-ecf24.firebaseio.com/";
var serviceAccount = require(jsonLocation);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: fireBaseDatabaseURL
});

// var jsonLocation = "./firebaseProjrctKeyInfo.json";
// var fireBaseDatabaseURL = "https://coursetree-00001.firebaseio.com";
// var serviceAccount = require(jsonLocation);
	
app.listen(3000, () => {
  console.log('Server started!');
});

app.get('/',function(req,res){
		res.sendFile(__dirname + "/index.html");
	});

const bodyParser = require('body-parser');

app.use(bodyParser.json());

var originsWhitelist = [
  'http://localhost:4200',      //this is my front-end url for development
   // 'http://www.myproductionurl.com'
];
var corsOptions = {
  origin: function(origin, callback){
        var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
  },
  credentials:true
}

var storage = multer.diskStorage({ //multers disk storage settings
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            var datetimestamp = Date.now();
            cb(null, file.fieldname + '-' + datetimestamp + '.' + file.originalname.split('.')[file.originalname.split('.').length -1])
        }
    });

    var upload = multer({ //multer settings
                    storage: storage,
                    fileFilter : function(req, file, callback) { //file filter
                        if (['xls', 'xlsx'].indexOf(file.originalname.split('.')[file.originalname.split('.').length-1]) === -1) {
                            return callback(new Error('Wrong extension type'));
                        }
                        callback(null, true);
                    }
                }).single('file');

app.use(cors(corsOptions));

 app.get('/upload', function(req, res) {
        var exceltojson;
		
		var databaseRef = "fir-ecf24";
var db = admin.database();
var ref = db.ref(databaseRef);
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
  res.json({ data: snapshot.val()});
});
		
		// console.log(req.body);
        // upload(req,res,function(err){
            // if(err){
                 // res.json({error_code:1,err_desc:err});
                 // return;
            // }
            // /** Multer gives us file info in req.file object */
            // if(!req.file){
                // res.json({error_code:1,err_desc:"No file passed"});
                // return;
            // }
            // /** Check the extension of the incoming file and 
             // *  use the appropriate module
             // */
            // if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1] === 'xlsx'){
                // exceltojson = xlsxtojson;
            // } else {
                // exceltojson = xlstojson;
            // }
            // console.log(req.file.path);
            // try {
                // exceltojson({
                    // input: req.file.path,
                    // output: null, //since we don't need output.json
                    // lowerCaseHeaders:true
                // }, function(err,result){
                    // if(err) {
                        // return res.json({error_code:1,err_desc:err, data: null});
                    // } 
					
					


// var childNode = "teacher";
// var d = true;

// if(d){

// var databaseRef = "fir-ecf24";
// var db = admin.database();
// var ref = db.ref(databaseRef);
// ref.once("value", function(snapshot) {
  // console.log(snapshot.val());
// });


// var check = [{
	// teacherName:'krishna'
// },{
	// teacherName:'shri hari'
// }]
// var demoAttendance=[{date:'0/00/2001',status:'present'}]
// var usersRef = ref.child('saving-data');
// console.log("array length ===========");
// console.log(result.length);
 // // for(var j=0; j<result.length; j++){
		 // usersRef.push(result);
		 // console.log("object data===========");
		 // // console.log(result[j]);
	 // // }
// // for(var i=0; i<1000; i++){
	// // var usersRef = ref.child(i);
	
	// // usersRef.update({
  // // "mobile": 7894561230,
  // // "email":"krishna@demo.com",
  // // "city":"bellary"
// // });
	
	
// // check[i] = {
	// // teacherName:'Teacher Name'+i
// // }	
	
// // }




// }
					
                    // res.json({error_code:0,err_desc:null, data: result});
                // });
            // } catch (e){
                // res.json({error_code:1,err_desc:"Corupted excel file"});
            // }
        // })
       
    });

// app.route('/api/class').post((req, res) => {
  
  // MongoClient.connect(url, function(err, db) {
  // if (err) throw err;
  // var dbo = db.db("coursetree-balabharathi");
  // var myobj = req.body;
  // dbo.collection("class").find( function(err, res) {
    // if (err) throw err;
    // console.log("document read");
	// console.log(res.id);
    // db.close();
  // });
// });
  // res.status(201).send(req.body)
// });