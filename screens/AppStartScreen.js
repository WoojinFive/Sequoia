import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import { Foundation } from '@expo/vector-icons';

import LoginScreen from './LoginScreen';

import Colors from '../constants/Colors';

const AppStartScreen = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutHandle = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timeoutHandle);
  }, []);

  if (!isLoading) {
    return <LoginScreen />;
  }

  return (
    <View style={styles.container}>
      <Foundation name="trees" size={100} color="white" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.brandColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AppStartScreen;
