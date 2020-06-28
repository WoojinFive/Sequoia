import React, { useState } from 'react';
import {
  ScrollView,
  Image,
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { VictoryChart, VictoryTheme, VictoryBar } from 'victory-native';
import { SimpleLineIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { Button } from 'react-native-elements';

import DefaultText from '../components/DefaultText';
import Colors from '../constants/Colors';
import { toggleList, setSelectedProductId } from '../store/actions/products';

const pieChartData = [
  {
    name: 'Fuel',
    energyConsumption: 3,
    color: 'rgba(131, 167, 234, 1)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Water',
    energyConsumption: 5,
    color: '#F00',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
  {
    name: 'Electrical',
    energyConsumption: 1,
    color: 'rgb(0, 0, 255)',
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  },
];

const pieChartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const GradeDetailScreen = (props) => {
  const [showRecomm, setShowRecomm] = useState(false);

  const productId = props.navigation.getParam('productId');
  const products = useSelector((state) => state.products.products);
  const product = products.find((product) => product.id === productId);

  const recommProducts = products
    .filter((prod) => prod.grade < product.grade && prod.type === product.type)
    .sort((a, b) => a.grade.localeCompare(b.grade));

  const scrollView = React.createRef();

  const dispatch = useDispatch();

  dispatch(setSelectedProductId(product.id));
  const toggleListHandler = () => dispatch(toggleList(product.id));

  const data = [
    { type: 'Energy Rate', value: product.energyRate },
    { type: 'Energy Rate Avg', value: 0.73 },
    { type: 'Distance Rate', value: product.distanceRate },
    { type: 'Distance Rate Avg', value: 0.34 },
  ];

  return (
    <ScrollView ref={scrollView}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginTop: 30,
            }}
          >
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={{ height: 60, marginBottom: 20 }}>
                <SimpleLineIcons name="energy" size={60} color="green" />
              </View>
              <DefaultText
                style={{ marginBottom: 10, fontSize: 14, textAlign: 'center' }}
              >
                Renewable Energy Capacity
              </DefaultText>
              <DefaultText style={{ fontSize: 30 }}>
                {product.energy} KW
              </DefaultText>
              <DefaultText>(KW per 1,000 population)</DefaultText>
            </View>
            <View style={{ flex: 1, alignItems: 'center' }}>
              <View style={{ height: 60, marginBottom: 20 }}>
                <MaterialCommunityIcons
                  name="map-marker-distance"
                  size={60}
                  color={Colors.brandColor}
                />
              </View>
              <DefaultText
                style={{ marginBottom: 10, fontSize: 14, textAlign: 'center' }}
              >
                Distance from origin
              </DefaultText>
              <DefaultText style={{ fontSize: 30 }}>
                {(product.distance * 1000).toLocaleString(undefined, {
                  maximumFractionDigits: 2,
                })}{' '}
                miles
              </DefaultText>
            </View>
          </View>
        </View>
        <View style={styles.chartContainer}>
          <View style={styles.barChart}>
            <VictoryChart
              padding={{ left: 120, right: 60, bottom: 60 }}
              width={Dimensions.get('window').width - 40}
              height={220}
              theme={VictoryTheme.material}
              domainPadding={{ x: 30 }}
            >
              <VictoryBar
                horizontal
                data={data}
                x="type"
                y="value"
                style={{
                  data: {
                    fill: ({ index }) =>
                      +index === 0 || +index === 1
                        ? 'rgba(131, 167, 234, 1)'
                        : +index === 2 || +index === 3
                        ? '#F00'
                        : 'rgb(0, 0, 255)',
                    stroke: ({ index }) =>
                      +index === 1 || +index == 3 || +index == 5
                        ? '#000000'
                        : '',
                    strokeWidth: 2,
                  },
                }}
              />
            </VictoryChart>
          </View>
        </View>

        {/* end distance detail */}
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
});

export default GradeDetailScreen;
