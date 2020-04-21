import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, AsyncStorage, Keyboard } from 'react-native';
import {Actions} from 'react-native-router-flux';
import axios from 'axios';
export default class Form extends Component {

   //constructor assigned to Record Object 
   constructor(props){
    super(props);

    //This keyword binding  object to eventhandlers
    this.onChangeStudentName =this.onChangeStudentName.bind(this); 
    this.onChangeStudentG00 = this.onChangeStudentG00.bind(this); 
    this.onChangeStudentCourse=this.onChangeStudentCourse.bind(this); 
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this); 
    this.onChangeStudentAddress = this.onChangeStudentAddress.bind(this); 
    this.onChangeStudentYear = this.onChangeStudentYear.bind(this);
    this.onChangeStudentAge = this.onChangeStudentAge.bind(this);
    this.onSubmit=this.onSubmit.bind(this);

    //States of object 
    this.state =
        {
            student_name: '',
            student_g00: '',
            student_course: '',
            student_email: '', 
            student_address: '', 
            student_Year: '', 
            student_Age: ''

        }   
}

//Event handler updating the state  student_name
onChangeStudentName(e)
{
    this.setState({
        student_name: e.target.value
    });
}

//Event handler updating the state  student_g00
onChangeStudentG00(e)
{
    this.setState({
        student_g00: e.target.value
    });
}

//Event handler updating the state  record_year
onChangeStudentCourse(e)
{
    this.setState({
        student_course: e.target.value
    });
}

//Event handler updating the state  student_email
onChangeStudentEmail(e)
{
    this.setState({
        student_email: e.target.value
    });
}

//Event handler updating the state  student_address
onChangeStudentAddress(e)
{
    this.setState({
        student_address: e.target.value
    });
}

//Event handler updating the state  student_Year
onChangeStudentYear(e)
{
    this.setState({
        student_Year: e.target.value
    });
}


//Event handler updating the state  student_Age
onChangeStudentAge(e)
{
    this.setState({
        student_Age: e.target.value
    });
}


//Submit button - event handler for when client hits enter
onSubmit(e)
{
    e.preventDefault();

    //DEBUG CONSOLE statement making sure application is storing states 
    console.log('student Profile Submitted');  
    console.log(`student_name: ${this.state.student_name}`);
    console.log(`student_g00: ${this.state.student_g00}`);
    console.log(`student_course: ${this.state.student_course}`);
    console.log(`student_email: ${this.state.student_email}`);
    console.log(`student_address: ${this.state.student_address}`);
    console.log(`student_Year: ${this.state.student_Year}`);
    console.log(`student_Age: ${this.state.student_Age}`);



    //Create instance of record named newProfile 
    const newProfile = {

        //Pass current states to Record object 
        student_name: this.state.student_name,
        student_g00: this.state.student_g00,
        student_course: this.state.student_course,
        student_email: this.state.student_email, 
        student_address: this.state.student_address,
        student_Year: this.state.student_Year,
        student_Age: this.state.student_Age

                    };

    //HTTP Post method adding newRecord created to my MongoDB database
    axios.post('http://localhost:4000/studentprofile/add', newProfile)
        .then(res => console.log(res.data));

//update client states
    this.setState({

        student_name: '',
        student_g00: '',
        student_course: '',
        student_email: '', 
        student_address: '', 
        student_Year: '', 
        student_Age: ''

    })
}
 render() {
    return (

        <div style = {{position: "absolute"}}>

            <h3>Create your student Profile</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label> Student Name: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.student_name}
                            onChange={this.onChangeStudentName}
                            />
                </div>
                <div className="form-group">
                    <label> Student G00: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.student_g00}
                            onChange={this.onChangeStudentG00}
                            />
                </div>
                <div className="form-group">
                    <label> Student Course: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.student_course}
                            onChange={this.onChangeStudentCourse}
                            />
                </div>
                <div className="form-group">
                    <label> Student Email: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.student_email}
                            onChange={this.onChangeStudentEmail
                            }
                            />
                </div>
                <div className="form-group">
                    <label> Student Year: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.student_Year}
                            onChange={this.onChangeStudentYear
                            }
                            />
                </div>
                <div className="form-group">
                    <label> Student AGE: </label>
                    <input  type="text"
                            className="form-control"
                            value={this.state.student_Age}
                            onChange={this.onChangeStudentAge
                            }
                            />
                </div>

                <div className ="form-group">
                            <input type="submit" value="Create profile" className="btn btn-primary "/>
                            </div>
                </form>
                </div>
            )
        }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      position:  'relative'
    },
    signupTextCont: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingVertical: 16,
      flexDirection: 'row',
    },
    signupText: {
      color: '#12799f', 
      fontSize:16,
    },
    signupButton: {
        color: '#12799f',
        fontSize:16,
        fontWeight: '500',
    }
});