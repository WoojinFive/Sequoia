import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';

import { Foundation, AntDesign, FontAwesome } from '@expo/vector-icons';
import { TextInput, Button } from 'react-native-paper';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import NavigationService from '../navigation/NavigationService';
import MainNavigator from '../navigation/MainNavigator';

const LoginScreen = (props) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [isLoginScreen, setIsLoginScreen] = useState(true);
  const [isMainScreen, setIsMainScreen] = useState(false);

  if (isMainScreen) {
    return (
      <MainNavigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }

  let result = null;

  if (!isMainScreen && !isLoginScreen) {
    result = (
      <View style={styles.topContainer}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.logoContainer}>
            <Foundation name="trees" size={100} color="white" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                width: '80%',
                height: 55,
              }}
              theme={{ colors: { primary: Colors.brandColor } }}
              mode="outlined"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={{ width: '80%', height: 55 }}
              theme={{ colors: { primary: Colors.brandColor } }}
              mode="outlined"
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <TextInput
              style={{ width: '80%', height: 55 }}
              theme={{ colors: { primary: Colors.brandColor } }}
              mode="outlined"
              placeholder="Confirm Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              mode="outlined"
              style={{
                backgroundColor: 'white',
                width: '80%',
                height: 55,
                marginTop: 7,
                justifyContent: 'center',
              }}
              color={Colors.brandColor}
              onPress={() => setIsMainScreen(true)}
            >
              SIGN UP
            </Button>
          </View>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 100,
              paddingHorizontal: 5,
            }}
          >
            <DefaultText style={{ color: 'white' }}>
              Already have an account?
            </DefaultText>
            <DefaultText
              style={{ color: 'white' }}
              onPress={() => setIsLoginScreen(true)}
            >
              LOGIN
            </DefaultText>
          </View>
          <View style={styles.snsContainer}>
            <DefaultText style={{ color: 'white', fontSize: 16 }}>
              Or signup with
            </DefaultText>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}
            >
              <View style={styles.snsButton}>
                <AntDesign name="google" size={24} color="#DB4437" />
              </View>
              <View style={styles.snsButton}>
                <AntDesign name="twitter" size={24} color="#1DA1F2" />
              </View>
              <View style={styles.snsButton}>
                <FontAwesome name="facebook" size={24} color="#4267B2" />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
  if (!isMainScreen && isLoginScreen) {
    result = (
      <View style={styles.topContainer}>
        <View
          style={{
            flex: 1,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <View style={styles.logoContainer}>
            <Foundation name="trees" size={100} color="white" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={{
                width: '80%',
                height: 55,
              }}
              theme={{ colors: { primary: Colors.brandColor } }}
              mode="outlined"
              placeholder="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
            <TextInput
              style={{ width: '80%', height: 55 }}
              theme={{ colors: { primary: Colors.brandColor } }}
              mode="outlined"
              placeholder="Password"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
            <Button
              mode="outlined"
              style={{
                backgroundColor: 'white',
                width: '80%',
                height: 55,
                marginTop: 7,
                justifyContent: 'center',
              }}
              color={Colors.brandColor}
              onPress={() => setIsMainScreen(true)}
            >
              LOGIN
            </Button>
          </View>
          <View
            style={{
              width: '80%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 15,
              paddingHorizontal: 5,
            }}
          >
            <DefaultText style={{ color: 'white' }}>
              Forgot password?
            </DefaultText>
            <DefaultText
              style={{ color: 'white' }}
              onPress={() => setIsLoginScreen(false)}
            >
              SIGN UP
            </DefaultText>
          </View>

          <View style={styles.snsContainer}>
            <DefaultText style={{ color: 'white', fontSize: 16 }}>
              Or login with
            </DefaultText>
            <View
              style={{
                width: '50%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
              }}
            >
              <View style={styles.snsButton}>
                <AntDesign name="google" size={24} color="#DB4437" />
              </View>
              <View style={styles.snsButton}>
                <AntDesign name="twitter" size={24} color="#1DA1F2" />
              </View>
              <View style={styles.snsButton}>
                <FontAwesome name="facebook" size={24} color="#4267B2" />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      {result}
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    flex: 1,
    backgroundColor: Colors.brandColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    flex: 1,
    marginTop: 200,
  },
  inputContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  snsContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 80,
  },
  snsButton: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoginScreen;
