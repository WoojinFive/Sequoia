import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { useSelector } from 'react-redux';

import ProductList from '../components/ProductList';

const SearchResultScreen = (props) => {
  const searchText = useSelector((state) => state.products.searchText);
  const products = useSelector((state) => state.products.products).filter(
    (product) =>
      product.type.toLowerCase().includes(searchText.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchText.toLowerCase())
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

SearchResultScreen.navigationOptions = (navData) => {
  return {
    headerShown: false,
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
  navigator: {
    justifyContent: 'flex-start',
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 200,
  },
});

export default SearchResultScreen;
