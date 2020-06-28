import React from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator, HeaderBackButton } from 'react-navigation-stack';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import GradeDetailScreen from '../screens/GradeDetailScreen';
import PackagingDetailScreen from '../screens/PackagingDetailScreen';
import SearchResultScreen from '../screens/SearchResultScreen';
import RewardScreen from '../screens/RewardScreen';
import MainScreen from '../screens/MainScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import Colors from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';
import LogOutScreen from '../screens/LogoutScreen';
import MyListScreen from '../screens/MyListScreen';

const TopTabNavigator = createMaterialTopTabNavigator(
  {
    GradeDetailScreen: {
      screen: GradeDetailScreen,
      navigationOptions: {
        tabBarLabel: 'Grade',
      },
    },
    PackagingDetailScreen: {
      screen: PackagingDetailScreen,
      navigationOptions: {
        tabBarLabel: 'Packaging',
      },
    },
  },
  {
    tabBarOptions: {
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
      activeTintColor: Colors.accent,
      inactiveTintColor: Colors.brandColor,
      style: {
        backgroundColor: 'white',
      },
    },
  }
);

const UserInfoNavigator = createStackNavigator(
  {
    UserInfoScreen: {
      screen: UserInfoScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerBackTitle: 'Back',
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      };
    },
  }
);

const MyListNavigator = createStackNavigator(
  {
    MyListScreen: {
      screen: MyListScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerBackTitle: 'Back',
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      };
    },
  }
);

const RewardNavigator = createStackNavigator(
  {
    RewardScreen: {
      screen: RewardScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerBackTitle: 'Back',
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      };
    },
  }
);

const LogoutNavigator = createStackNavigator(
  {
    LogoutScreen: {
      screen: LogOutScreen,
    },
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerBackTitle: 'Back',
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
        headerLeft: () => (
          <HeaderBackButton onPress={() => navigation.goBack(null)} />
        ),
      };
    },
  }
);

const MainStackNavigator = createStackNavigator({
  MainScreen: { screen: MainScreen },
  SearchResultScreen: { screen: SearchResultScreen },
  TopTab: {
    screen: TopTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        title:
          navigation.state.routes[0].params.productBrand +
          ' - ' +
          navigation.state.routes[0].params.productType,
        headerBackTitle: 'Back',
        headerRight: () => (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title="Menu"
              iconName="ios-menu"
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        ),
      };
    },
  },
});

const MainNavigator = createDrawerNavigator(
  {
    MainStack: {
      screen: MainStackNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
      },
    },
    UserInfo: {
      screen: UserInfoNavigator,
      navigationOptions: {
        drawerLabel: 'User Info',
      },
    },
    MyList: {
      screen: MyListNavigator,
      navigationOptions: {
        drawerLabel: 'My List',
      },
    },
    Reward: {
      screen: RewardNavigator,
      navigationOptions: {
        drawerLabel: 'Badges',
      },
    },
    Logout: {
      screen: LogoutNavigator,
      navigationOptions: {
        drawerLabel: 'Log Out',
      },
    },
  },
  {
    contentOptions: {
      activeTintColor: Colors.accent,
      labelStyle: {
        fontFamily: 'open-sans-bold',
      },
    },
    style: { marginTop: 50 },
  }
);

export default createAppContainer(MainNavigator);
