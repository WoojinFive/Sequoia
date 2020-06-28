import React from 'react';
import { View, StyleSheet } from 'react-native';

import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from '@expo/vector-icons';
import { Button } from 'react-native-elements';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

const UserInfoScreen = (props) => {
  return (
    <View style={styles.topContainer}>
      <View style={styles.infoContainer}>
        <View>
          <FontAwesome name="user-circle" size={100} color={Colors.accent} />
        </View>
        <View>
          <DefaultText style={{ fontSize: 20 }}>john.doe@gmail.ocm</DefaultText>
          <Button
            title="Edit My Info"
            style={{ marginTop: 20 }}
            onPress={() => {}}
          />
        </View>
      </View>
      <View style={styles.pointContainer}>
        <DefaultText style={{ fontSize: 30, fontFamily: 'open-sans-bold' }}>
          My Points
        </DefaultText>
        <DefaultText style={{ fontSize: 20, marginTop: 20 }}>
          21,500 pts
        </DefaultText>
      </View>
      <View style={styles.historyContainer}>
        <View style={{ width: '80%' }}>
          <DefaultText
            style={{
              fontSize: 30,
              fontFamily: 'open-sans-bold',
              marginBottom: 20,
            }}
          >
            My History
          </DefaultText>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            height: 50,
            backgroundColor: 'white',
            paddingHorizontal: 40,
          }}
        >
          <FontAwesome5 name="coins" size={24} color={Colors.brandColor} />
          <View style={{ width: '50%' }}>
            <DefaultText style={{ fontSize: 20 }}>500 pts earned</DefaultText>
          </View>
          <DefaultText style={{ fontSize: 20 }}>June 17</DefaultText>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            height: 50,
            backgroundColor: 'white',
            paddingHorizontal: 40,
          }}
        >
          <FontAwesome5 name="coins" size={24} color={Colors.brandColor} />
          <View style={{ width: '50%' }}>
            <DefaultText style={{ fontSize: 20 }}>1,500 pts earned</DefaultText>
          </View>
          <DefaultText style={{ fontSize: 20 }}>June 8</DefaultText>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            height: 50,
            backgroundColor: 'white',
            paddingHorizontal: 40,
          }}
        >
          <FontAwesome5 name="coins" size={24} color={Colors.brandColor} />
          <View style={{ width: '50%' }}>
            <DefaultText style={{ fontSize: 20 }}>2,300 pts earned</DefaultText>
          </View>
          <DefaultText style={{ fontSize: 20 }}>June 1</DefaultText>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            height: 50,
            backgroundColor: 'white',
            paddingHorizontal: 40,
          }}
        >
          <MaterialCommunityIcons
            name="leaf"
            size={24}
            color={Colors.brandColor}
          />
          <View style={{ width: '50%' }}>
            <DefaultText style={{ fontSize: 20 }}>
              Green Search Pro badge achieved
            </DefaultText>
          </View>
          <DefaultText style={{ fontSize: 20 }}>May 25</DefaultText>
        </View>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 15,
            height: 50,
            backgroundColor: 'white',
            paddingHorizontal: 40,
          }}
        >
          <FontAwesome5 name="coins" size={24} color={Colors.brandColor} />
          <View style={{ width: '50%' }}>
            <DefaultText style={{ fontSize: 20 }}>300 pts earned</DefaultText>
          </View>
          <DefaultText style={{ fontSize: 20 }}>May 20</DefaultText>
        </View>
      </View>
    </View>
  );
};

UserInfoScreen.navigationOptions = (navigationData) => {
  return {
    title: 'My Info',
    headerBackTitle: 'Back',
  };
};

const styles = StyleSheet.create({
  topContainer: {
    // flex: 1,
    marginTop: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointContainer: {
    width: '80%',
    justifyContent: 'space-between',
    marginTop: 50,
  },
  historyContainer: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default UserInfoScreen;
