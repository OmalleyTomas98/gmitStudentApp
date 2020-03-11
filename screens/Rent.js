import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';


export default class Rent extends Component {
    render() {
        return (
          <Text style={styles.headerRent}>Rent Student Accomodation:</Text>
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

