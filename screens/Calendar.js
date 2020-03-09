import React, {Component} from 'react';
import {StyleSheet, View, ScrollView, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';


export default class _Calendar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selected: undefined
    };
  }

  onDayPress = (day) => {
    this.setState({selected: day.dateString});
  }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.text}>Semester 2 @ GMIT </Text>
        <Calendar
          style={styles.calendar}
          hideExtraDays
          onDayPress={this.onDayPress}
          markedDates={{
            [this.state.selected]: {
              selected: true, 
              disableTouchEvent: true, 
              selectedDotColor: 'orange'
            }
          }}
        
        />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  calendar: {
    marginBottom: 10
  },
  text: {
    textAlign: 'center',
    padding: 10,
    backgroundColor: 'lightgrey',
    fontSize: 16
  }
});