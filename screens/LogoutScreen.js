import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LogOutScreen = (props) => {
  return (
    <View style={styles.topContainer}>
      <Text>Log Out</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogOutScreen;
