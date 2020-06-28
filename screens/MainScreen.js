import React from 'react';
import { useSelector } from 'react-redux';
import { View, StyleSheet, Dimensions, Keyboard, Image } from 'react-native';
import MapView from 'react-native-maps';

import TopContainer from '../components/TopContainer';
import SearchResultScreen from './SearchResultScreen';

const MainScreen = (props) => {
  const searchText = useSelector((state) => state.products.searchText);

  let output =
    searchText.length != 0 ? (
      <SearchResultScreen navigation={props.navigation} />
    ) : (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 44.723234,
            longitude: -63.69535,
            latitudeDelta: 0.003,
            longitudeDelta: 0.003,
          }}
          onPress={() => {
            Keyboard.dismiss();
          }}
        >
          <MapView.Marker
            coordinate={{ latitude: 44.723234, longitude: -63.69535 }}
            title={"I'm here"}
          />
          <MapView.Marker
            coordinate={{ latitude: 44.723334, longitude: -63.69301 }}
            title={'Shop'}
          >
            <Image
              source={require('../assets/icons/shop_marker.png')}
              style={{ width: 50, height: 50 }}
            />
          </MapView.Marker>
          <MapView.Marker
            coordinate={{ latitude: 44.722054, longitude: -63.69341 }}
            title={'Shop2'}
          >
            <Image
              source={require('../assets/icons/shop_marker.png')}
              style={{ width: 50, height: 50 }}
            />
          </MapView.Marker>
          <MapView.Marker
            coordinate={{ latitude: 44.724454, longitude: -63.69535 }}
            title={'Shop3'}
          >
            <Image
              source={require('../assets/icons/shop_marker.png')}
              style={{ width: 50, height: 50 }}
            />
          </MapView.Marker>
          <MapView.Marker
            coordinate={{ latitude: 44.723754, longitude: -63.69435 }}
            title={'Shop4'}
          >
            <Image
              source={require('../assets/icons/shop_marker.png')}
              style={{ width: 50, height: 50 }}
            />
          </MapView.Marker>
        </MapView>
        <View style={styles.mapDrawerOverlay} />
      </View>
    );

  return (
    <View style={styles.container}>
      <TopContainer />
      {output}
    </View>
  );
};

MainScreen.navigationOptions = (navData) => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  mapDrawerOverlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.0,
    height: Dimensions.get('window').height - 200,
    width: 10,
  },
});

export default MainScreen;
