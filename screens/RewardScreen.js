import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const RewardScreen = (props) => {
  return (
    <ScrollView>
      <View style={styles.topContainer}>
        <View style={styles.header}>
          <DefaultText style={{ fontSize: 18 }}>Hi John Doe!</DefaultText>
          <DefaultText
            style={{ fontSize: 26, paddingTop: 10, textAlign: 'center' }}
          >
            You have a new badge available.
          </DefaultText>
        </View>
        <View style={styles.badgeImage}>
          <SimpleLineIcons name="energy" size={160} color={Colors.brandColor} />
        </View>
        <View style={styles.button}>
          <Button title="Take a badge" style={{ color: Colors.brandColor }} />
        </View>
        <View style={styles.achievements}>
          <DefaultText style={{ fontSize: 26 }}>Achievements</DefaultText>
          <View style={styles.achieveItem}>
            <View
              style={{
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Ionicons name="ios-leaf" size={60} color={Colors.brandColor} />
            </View>
            <View style={{ marginLeft: 15, justifyContent: 'space-between' }}>
              <DefaultText
                style={{ fontSize: 18, fontFamily: 'open-sans-bold' }}
              >
                Green Search Pro
              </DefaultText>
              <DefaultText>Description</DefaultText>
              <View style={styles.share}>
                <Ionicons name="logo-instagram" size={24} color="black" />
                <Ionicons name="logo-facebook" size={24} color="black" />
                <Ionicons name="logo-twitter" size={24} color="black" />
              </View>
            </View>
          </View>
          <View style={styles.achieveItem}>
            <View
              style={{
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FontAwesome
                name="shopping-basket"
                size={60}
                color={Colors.brandColor}
              />
            </View>
            <View style={{ marginLeft: 15, justifyContent: 'space-between' }}>
              <DefaultText
                style={{ fontSize: 18, fontFamily: 'open-sans-bold' }}
              >
                Happy Green Shopper
              </DefaultText>
              <DefaultText>Description</DefaultText>
              <View style={styles.share}>
                <Ionicons name="logo-instagram" size={24} color="black" />
                <Ionicons name="logo-facebook" size={24} color="black" />
                <Ionicons name="logo-twitter" size={24} color="black" />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.challenges}>
          <DefaultText style={{ fontSize: 26 }}>Challenges</DefaultText>
          <View style={styles.achieveItem}>
            <View
              style={{
                width: 100,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <SimpleLineIcons
                name="energy"
                size={60}
                color={Colors.brandColor}
              />
            </View>
            <View style={{ marginLeft: 15, justifyContent: 'space-around' }}>
              <DefaultText
                style={{ fontSize: 18, fontFamily: 'open-sans-bold' }}
              >
                Best Energy Saver
              </DefaultText>
              <DefaultText>Description</DefaultText>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

RewardScreen.navigationOptions = (navigationData) => {
  return {
    title: 'My Badge',
    headerBackTitle: 'Back',
  };
};

const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor: '#e0e0e0',
    flex: 1,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 50,
  },
  header: {
    width: '80%',
    alignItems: 'center',
  },
  badgeImage: {
    marginTop: 20,
  },
  button: {
    width: '50%',
    marginTop: 20,
  },
  share: {
    width: 120,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  achievements: {
    width: '80%',
    marginTop: 30,
  },
  achieveItem: {
    flexDirection: 'row',
    marginTop: 20,
    width: '100%',
  },
  challenges: {
    width: '80%',
    marginTop: 30,
  },
});

export default RewardScreen;
