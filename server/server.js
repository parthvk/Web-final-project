
const multer = require("multer");
const path = require("path");
const postRoute = require("./app/routes/posts");

const places = require("./app/routes/places-routes");

let express = require('express'),
    app = express(),
    port = 5000,
    mongoose = require('mongoose'), //created model loading here
    bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors());
app.use("/images", express.static(path.join(__dirname, "/images")));

// mongoose instance connection url connection
mongoose.connect("mongodb+srv://26pratik:qwerty1234@cluster0.dbjcn.mongodb.net/travel-db", {
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log('Connected to Database')).catch((e)=>{
    console.log('Error: ',e);
})
mongoose.Promise = global.Promise;

//Adding body parser for handling request and response objects.
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Enabling CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//Code to upload image files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
}); 

app.use("/api/posts", postRoute);

const initApp = require('./app/app');
initApp(app);
places(app);

app.listen(port);
console.log('Server started on port: ' + port);
