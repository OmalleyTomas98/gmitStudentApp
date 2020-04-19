import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

import { MonoText } from '../components/StyledText';

export default function Nightlife() {
  return (
    <Text style={styles.headerNightlife}>Galway Nightlife</Text>
  );
}

/*Nightlife.navigationOptions = {
  header: null,
};*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerNightlife: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 26,
    lineHeight: 19,
    textAlign: 'center',
},
});