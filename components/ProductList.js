import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import ProductItem from './ProductItem';

const ProductList = (props) => {
  const renderProductItem = (itemData) => {
    return (
      <ProductItem
        brand={itemData.item.brand}
        image={itemData.item.logoImageUrl}
        type={itemData.item.type}
        origin={itemData.item.origin}
        grade={itemData.item.grade}
        onSelectProduct={() => {
          props.navigation.navigate({
            routeName: 'GradeDetailScreen',
            params: {
              productId: itemData.item.id,
              productBrand: itemData.item.brand,
              productType: itemData.item.type,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderProductItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default ProductList;
