import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { MonoText } from '../components/StyledText';

//Image Imports
import GalwayImg from '../screens/Images/galway.jpg';

export default function Nightlife() { // Paragraphs of info
  return (
    <View style={styles.container}>
    <ScrollView>
    <Text style={styles.headerNightlife}>{"\n\n"}Galway Nightlife Guide</Text>
    <Text style={styles.textCenter}>It is no doubt that Galway is the hub of nightlife in the 
    West of Ireland. {"\n"}
    Here is a quick list of the top spots in Galway City:</Text>

    <Text style={styles.subHeading}>Pubs</Text>
    <Text style={styles.subSubHeading}>The Skeff</Text>
    <Text style={styles.textCenter}>Situated in Eyre Square, The Skeff is a late night bar.{"\n"}
    However, unlike most pubs, dressing elegantly is a requirement otherwise you will be{"\n"}
    refused entry.</Text>
    <Text style={styles.subSubHeading}>Roisin Dubh</Text>
    <Text style={styles.textCenter}>A popular pub with college students, with a great atmosphere,{"\n"}
    rooftop bar, and a silent disco.</Text>

    <Text style={styles.subHeading}>{"\n"}Clubs</Text>
    <Text style={styles.subSubHeading}>DNA</Text>
    <Text style={styles.textCenter}>Situated also in Eyre Square, behind The Skeff is a club very popular with{"\n"}
    college students, with two floors for music, and an additional two floors with a bar.{"\n"}
    Not liking the music upstairs? Just go downstairs for a completely different vibe!</Text>
    <Text style={styles.subSubHeading}>Electric</Text>
    <Text style={styles.textCenter}>A unique club perfect for people who enjoy electronic music,{"\n"}
    featuring a club, bar, restaurant and arcade all in one!</Text>

    <Text style={styles.subHeading}>{"\n\n"}After a Night Out</Text>
    <Text style={styles.subSubHeading}>Food</Text>
    <Text style={styles.textCenter}>While possibly not being the best, the most popular choices are{"\n"}
    McDonald's or SuperMac's, but expect over-crowding and long queues.{"\n"}
    An extra five minute walk will bring you to a much less crowded area, offering cheaper food, {"\n"}
    much more suited to a student's budget and shorter queues</Text>
    <Text style={styles.subSubHeading}>Transport</Text>
    <Text style={styles.textCenter}>If you are planning on going out, getting back should also be considered.{"\n"}
    With clubs closing at 2am and busses terminating before midnight, a taxi is the best option, {"\n"}
    with fares around Galway City ranging from €5 to €15.</Text>
    <img src={GalwayImg}/>
    </ScrollView>
    </View>
  );
}

// Styles
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
  textCenter: {
    marginBottom: 20,
    lineHeight: 19,
    textAlign: 'center',
  },
  subHeading: {
    marginBottom: 20,
    lineHeight: 19,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  subSubHeading: {
    marginBottom: 20,
    lineHeight: 19,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});