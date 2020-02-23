import React from 'react';
import {  Image } from 'react-native';


import {
  StyleSheet,
  Button,
  View,
  SafeAreaView,
  Text,
  Alert,
} from 'react-native';
import Constants from 'expo-constants';
//      <Image source={require('./assets/icon.png')} />

function Separator() {
  return <View style={styles.separator} />;
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
         Welcome
        </Text>
        <Button
          title="Nightlife"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
         <Image
          style={{width: 50, height: 50}}
          source={require('./assets/beer-outline.svg')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the backgroud color of the button.
        </Text>
        <Button
          title="Student Calender"
          color="grey"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

        <Image
          style={{width: 50, height: 50 }}
          source={require('./assets/calendar-outline.svg')}
        />
      </View>
      <Separator />

       <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the backgroud color of the button.
        </Text>
        <Button
          title="Student Accomodation"
          color="red"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

        <Image
          style={{width: 50, height: 50 }}
          source={require('./assets/home-outline.svg')}
        />
      </View>
      <Separator />





       <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the backgroud color of the button.
        </Text>
        <Button
          title="Student Grinds Exchange"
          color="green"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

        <Image
          style={{width: 50, height: 50 }}
          source={require('./assets/phone-portrait-outline.svg')}
        />
      </View>
      <Separator />



    <View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the backgroud color of the button.
        </Text>
        <Button
          title="Online Student ID"
          color="#f194ff"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

        <Image
          style={{width: 50, height: 50 }}
          source={require('./assets/card-outline.svg')}
        />
      </View>
      <Separator />
<View>
        <Text style={styles.title}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the backgroud color of the button.
        </Text>
        <Button
          title="Student Forums"
          color="orange"
          onPress={() => Alert.alert('Button with adjusted color pressed')}
        />

        <Image
          style={{width: 50, height: 50 }}
          source={require('./assets/book-outline.svg')}
        />
      </View>
      <Separator />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
