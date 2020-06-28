import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { Searchbar, Button } from 'react-native-paper';

import Colors from '../constants/Colors';
import { setSearchtext } from '../store/actions/products';

import NavigationService from '../navigation/NavigationService';

const TopContainer = (props) => {
  const searchText = useSelector((state) => state.products.searchText);

  const dispatch = useDispatch();

  return (
    <View style={styles.topContainer}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Foundation name="trees" size={48} color={Colors.brandColor} />
          <Text style={styles.titleText}>Sequoia</Text>
        </View>
        <View style={styles.toggleMenu}>
          <Ionicons
            name="ios-menu"
            size={32}
            color={Colors.brandColor}
            onPress={() => NavigationService.toggleDrawer()}
          />
        </View>
      </View>
      <View style={styles.search}>
        <View style={styles.searchBarContainer}>
          <Searchbar
            inputStyl={styles.searchBar}
            placeholder="product or brand name"
            value={searchText}
            onChangeText={(value) => dispatch(setSearchtext(value))}
          />
        </View>
        <View style={styles.scanButtonContainer}>
          <Button style={styles.scanButton} mode="contained" onPress={() => {}}>
            <Ionicons name="ios-barcode" size={30} color="white" />
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 20,
  },
  titleText: {
    fontFamily: 'open-sans-bold',
    fontSize: 36,
    marginLeft: 10,
    color: Colors.brandColor,
  },
  toggleMenu: {
    marginRight: 35,
    marginTop: 20,
  },
  search: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  searchBarContainer: {
    flex: 1,
    marginHorizontal: 10,
  },
  searchBar: {
    fontSize: 1333,
  },
  scanButtonContainer: {
    marginHorizontal: 10,
  },
  scanButton: {
    height: 48,
    backgroundColor: Colors.brandColor,
    justifyContent: 'center',
  },
});

export default TopContainer;
