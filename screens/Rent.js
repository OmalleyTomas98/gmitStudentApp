import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import "bootstrap/dist/css/bootstrap.min.css"
//import RentNav from './RentNav'

export default class Rent extends Component {
  constructor(props) {
    super(props);

    // Constructor
    this.onChangeAddress  = this.onChangeAddress.bind(this);
    this.onChangeFeatures  = this.onChangeFeatures.bind(this);
    this.onChangeCost  = this.onChangeCost.bind(this);
    this.onChangeContact  = this.onChangeContact.bind(this);
    this.onSubmiti = this.onSubmit.bind(this);

    this.state = {
      address: '',
      features: '',
      cost: 0,
      contact: 0
    }
  }

  onChangeAddress(e) {
    this.setState({
      address: e.target.value
    });
  }

  onChangeFeatures(e) {
    this.setState({
      features: e.target.value
    });
  }

  onChangeCost(e) {
    this.setState({
      cost: e.target.value
    });
  }

  onChangeContact(e) {
    this.setState({
      contact: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const rent = {
      address: this.state.address,
      features: this.state.features,
      cost: this.state.cost,
      contact: this.state.contact
    }
    console.log(rent);
  }

    render() {
        return (
        <div>
           <Text style={styles.headerRent}>Rent Student Accomodation:</Text>
          <h3>Post New Accomodation</h3>
            <form>{this.onSubmit}
              <div className="form-group">
            <label>Address</label>
            <input type="text"
             required
             className="form-control"
            value={this.state.address}
            onChange={this.onChangeAddress}
            />
          </div>

          <div className="form-group">
            <label>Features</label>
            <input type="text"
             required
             className="form-control"
             value={this.state.features}
             onChange={this.onChangeFeatures}
             />
          </div>
          
          <div className="form-group">
             <label>Cost</label>
             <input type="text"
              required
              className="form-control"
              value={this.state.cost}
              onChange={this.onChangeCost}
              />
          </div>

          <div className="form-group">
              <label>Contact</label>
              <input type="text"
               required
               className="form-control"
               value={this.state.contact}
               onChange={this.onChangeContact}
               />
            </div>
               
               <div className="form-group">
                 <input type="submit" value="Post" className="btn btn-primary"></input>
               </div>
             </form>
            </div>
        );
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      headerRent: {
        marginBottom: 20,
        color: 'rgba(0,0,0,0.4)',
        fontSize: 26,
        lineHeight: 19,
        textAlign: 'center',
    },
  });

