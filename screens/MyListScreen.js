import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import ProductList from '../components/ProductList';

const MyListScreen = (props) => {
  const products = useSelector((state) => state.products.products).filter(
    (product) => product.isInList === true
  );

  if (products.length === 0) {
    return (
      <View style={styles.container}>
        <View style={styles.nodataContainer}>
          <Text>No data!</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ProductList listData={products} navigation={props.navigation} />
    </View>
  );
};

MyListScreen.navigationOptions = (navigationData) => {
  return {
    title: 'My List',
    headerBackTitle: 'Back',
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  nodataContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyListScreen;
