import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';

import DefaultText from './DefaultText';

const ProductItem = (props) => {
  return (
    <View style={styles.productItem}>
      <TouchableOpacity onPress={props.onSelectProduct}>
        <View>
          <View style={{ ...styles.productRow, ...styles.productDetail }}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: props.image }}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
            <View style={styles.typeContainer}>
              <DefaultText>{props.type}</DefaultText>
            </View>
            {/* <View style={styles.modelContainer}>
              <DefaultText>{props.model}</DefaultText>
            </View> */}
            <View style={styles.originContainer}>
              <DefaultText>{props.origin}</DefaultText>
            </View>
            <View style={styles.gradeContainer}>
              <DefaultText>Grade {props.grade}</DefaultText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    height: 80,
    width: '100%',
    backgroundColor: '#e3e3e3',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  imageContainer: {
    width: '15%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  brandContainer: {
    width: '20%',
  },
  typeContainer: {
    width: '20%',
  },
  modelContainer: {
    width: '30%',
  },
  originContainer: {
    width: '30%',
  },
  gradeContainer: {
    width: '20%',
  },
  productRow: {
    flexDirection: 'row',
  },
  productDetail: {
    paddingHorizontal: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '100%',
  },
});

export default ProductItem;
