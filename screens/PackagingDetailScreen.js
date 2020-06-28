import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-native-elements';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';

import { toggleList } from '../store/actions/products';

const PackagingDetailScreen = (props) => {
  const [showRecomm, setShowRecomm] = useState(false);

  const productId = useSelector((state) => state.products.selectedId);
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === productId);

  const recommProducts = products
    .filter((prod) => prod.grade < product.grade && prod.type === product.type)
    .sort((a, b) => a.grade.localeCompare(b.grade));

  const dispatch = useDispatch();
  const toggleListHandler = () => dispatch(toggleList(product.id));

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.mainInfoContainer}>
          <View style={styles.productImage}>
            <Image
              source={{ uri: product.productImageUrl }}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
          <View style={styles.productDetail}>
            <DefaultText style={styles.brand}>{product.brand}</DefaultText>
            <DefaultText style={styles.type}>{product.type}</DefaultText>
            <DefaultText style={styles.origin}>
              Product of {product.origin}
            </DefaultText>
            <DefaultText style={styles.grade}>
              Grade {product.grade}
            </DefaultText>
          </View>
        </View>
        <Button
          title={product.isInList ? 'Remove from My List' : 'Add to My List'}
          style={{ marginTop: 30 }}
          onPress={toggleListHandler}
        />
        {/* end main info */}
        <View style={styles.distanceDetailContainer}>
          <DefaultText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam.
          </DefaultText>
        </View>
        {/* end distance detail */}
        <View>
          <View>
            <DefaultText
              style={{
                fontFamily: 'open-sans-bold',
                fontSize: 24,
                marginBottom: 20,
              }}
            >
              The list of materials used
            </DefaultText>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <View>
                <Image
                  fadeDuration={300} // default value is 300
                  source={require('../assets/icons/plastic_container.png')}
                  style={styles.icon}
                  resizeMode="cover"
                />
                <DefaultText>Plastic Container</DefaultText>
              </View>
              <View>
                <Image
                  fadeDuration={300} // default value is 300
                  source={require('../assets/icons/paper_packaging.png')}
                  style={styles.icon}
                  resizeMode="cover"
                />
                <DefaultText>Paper Packaging</DefaultText>
              </View>
            </View>
          </View>
        </View>
        <View style={{ marginVertical: 60 }}>
          <View>
            <DefaultText
              style={{
                fontFamily: 'open-sans-bold',
                fontSize: 24,
                marginBottom: 20,
              }}
            >
              How to recycle them?
            </DefaultText>
            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'flex-start',
              }}
            >
              <DefaultText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam. Lorem ipsum dolor
                sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam. Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam.
              </DefaultText>
            </View>
          </View>
        </View>

        {recommProducts.length === 0 ? null : (
          <View style={styles.compareContainer}>
            <Button
              title={
                showRecomm ? 'Hide Recommendations' : 'Show Recommendations'
              }
              style={styles.recommButton}
              onPress={(currentState) => {
                setShowRecomm((currentState) => !currentState);
              }}
            />
            {showRecomm ? (
              recommProducts.map((product) => (
                <View key={product.id} style={{ flex: 1, width: '100%' }}>
                  <TouchableOpacity
                    style={styles.recommMainInfoContainer}
                    onPress={(currentState) => {
                      setShowRecomm((currentState) => !currentState),
                        scrollView.current.scrollTo({
                          x: 0,
                          y: 0,
                          animated: true,
                        }),
                        props.navigation.navigate({
                          routeName: 'GradeDetailScreen',
                          params: {
                            productId: product.id,
                            productBrand: product.brand,
                          },
                        });
                    }}
                  >
                    <View style={styles.productImage}>
                      <Image
                        source={{ uri: product.productImageUrl }}
                        style={styles.image}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.productDetail}>
                      <DefaultText style={styles.brand}>
                        {product.brand}
                      </DefaultText>
                      <DefaultText style={styles.type}>
                        {product.type}
                      </DefaultText>
                      <DefaultText style={styles.origin}>
                        Product of {product.origin}
                      </DefaultText>
                      <DefaultText style={styles.grade}>
                        Grade {product.grade}
                      </DefaultText>
                    </View>
                  </TouchableOpacity>
                  <View
                    style={{
                      backgroundColor: 'rgba(0, 102, 153, 0.2)',
                      height: 1,
                    }}
                  />
                </View>
              ))
            ) : (
              <View style={{ marginTop: 100 }}></View>
            )}
          </View>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  mainInfoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  productImage: {
    width: 160,
    height: 160,
  },
  productDetail: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: 20,
  },
  brand: {
    fontSize: 20,
  },
  type: {
    fontSize: 20,
  },
  origin: {
    fontSize: 20,
  },
  grade: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  distanceDetailContainer: {
    flex: 1,
    paddingVertical: 30,
  },
  distance: {
    fontSize: 24,
    fontFamily: 'open-sans-bold',
  },
  chartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
  },
  barChart: {
    paddingLeft: 20,
  },
  compareContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recommButton: {
    marginBottom: 15,
  },
  recommMainInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
  },
  toggleMenu: {
    marginRight: 35,
    marginTop: 20,
  },
  icon: {
    width: 100,
    height: 100,
    marginRight: 30,
    marginBottom: 10,
  },
});

export default PackagingDetailScreen;
