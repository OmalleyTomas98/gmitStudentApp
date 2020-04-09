//Defintions , requirements , express , cors , mongoose , router
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const recordRoutes = express.Router();

//Define port No for server to run on 
const PORT = 4000;

//Define the Studentprofile Schema
let Studentprofile = require('./studentprofile');

//Cors Definition 
app.use(cors());
app.use(bodyParser.json());


//Defines the mongoDB Connection I created
const mongoDB =  'mongodb+srv://studentUser2020:studentUser2020@studentinfo-7luad.mongodb.net/test?retryWrites=true&w=majority';
//Connects to my Mongo Cluster 

mongoose.connect(mongoDB,{useNewUrlParser:true});

//Define the connection
const connection = mongoose.connection;



//Open Connection
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
 
recordRoutes.route('/').get(function(req, res) {
    //Mongoose  find() query to 
    Studentprofile.find(function(err, studentprofiles) {
        if (err) {
            //DEBUG ERROR REPORT TO CONSOLE
            console.log(err);
        } else {
            //Format  records via JSON 
            res.json(studentprofiles);
        }
    });
});

//Catches the objects Unique ID and displays the records ID  displays through JSON 
recordRoutes.route('/:id').get(function(req, res) {
    //creates id var and returns record
    let id = req.params.id;
    //
    Studentprofile.findById(id, function(err, studentprofile) {
        res.json(studentprofile);
        
    });
});

//update function updates the spefic object based off of their Unique ID
recordRoutes.route('/update/:id').post(function(req, res) {
    Studentprofile.findById(req.params.id, function(err, studentprofile) {
        //DEBUG Return error if the specific object ID is not found
        if (!studentprofile)
            //DEBUG return HTTP error status 404 if not found 
            res.status(404).send("data is not found");

        else
            //Mapping Requests to instance variables found in the records schema
            studentprofile.student_name = req.body.student_name;
            studentprofile.student_g00 = req.body.student_g00;
            studentprofile.student_course = req.body.student_course;
            studentprofile.student_email = req.body.student_email;
            studentprofile.student_address = req.body.student_address;
            studentprofile.student_Year = req.body.student_Year;
            studentprofile.student_Age = req.body.student_Age;


            //call studentprofile object/schema and save the instances of the records then prompt update to console
            studentprofile.save().then(studentprofile => {
                res.json('studentprofile updated!');
            })
            .catch(err => {
                //Debug send HTTP error Status 400 if the the update was not possible to the serve 
                res.status(400).send("Update not possible");
            });
    });
});

//Create  a query to show The Total number of Albums , formats and so on inside of your data 
var query = Studentprofile.find({ 'student_g00': 'G00361128' });

//Add a Record into the MongoDB test.records Database
recordRoutes.route('/add').post(function(req, res) {
    let studentprofile = new Studentprofile(req.body);
    studentprofile.save()
        .then(studentprofile => {
            //Debug HTTP STATUS 200 if Successfull in the CONSOLE 
            res.status(200).json({'recostudentprofilerd': 'studentprofile added successfully'});
        })
           //Debug HTTP STATUS 400 if Successfull in the CONSOLE 
        .catch(err => {
            res.status(400).send('adding new studentprofile failed');
        });
});

//USE the db records folder (records.js)
app.use('/studentprofile', recordRoutes);
   

//Display the port in use to the console for ease of debugging
app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});