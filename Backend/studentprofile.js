//Define mongo and schema 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create/define record Object Scehema to access the mongoDB
let Studentprofile = new Schema({


    //Define and object variables and their dataTypes
    student_name: {
        type: String
    },
    student_g00: {
        type: String
    },
    student_course:  {
        type: String
    },
    student_email: {
        type: String
    }
    , 
    student_address: {
        type: String
    }
     , 
    student_Year: {
        type: String
    }
     , 
    student_Age: {
        type: String
    }
});

//Export Student Profile model
module.exports = mongoose.model('Studentprofile', Studentprofile);