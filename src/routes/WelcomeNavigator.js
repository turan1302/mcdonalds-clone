import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Platform, Text, StyleSheet, Image } from 'react-native';
import HomeNavigator from './HomeNavigator';
import MymNavigator from './MymNavigator';
import OrderNavigator from './OrderNavigator';
import ProductsNavigator from './ProductsNavigator';
import OtherNavigator from './OtherNavigator';

const Tab = createBottomTabNavigator();
const logoM = require('../assets/images/home-logo-m.png');
const mymIconActive = require('../assets/images/tab-mym-active.png');
const mymIconInactive = require('../assets/images/tab-mym-inactive.png');
// McDonald's bottom bar palette
const TAB_COLOR_ACTIVE = '#FFBC0D';
const TAB_COLOR_INACTIVE = '#8A8A8A';
const TAB_LABEL_ACTIVE = '#1A1A1A';

const TAB_CONFIG = {
  HomeNavigator: { label: 'Anasayfa', icon: 'home', useLogo: true },
  MymNavigator: { label: 'MyM', useMymIcon: true },
  OrderNavigator: { label: 'Sipariş Ver', useScooterIcon: true },
  ProductsNavigator: { label: 'Ürünler', useFriesIcon: true },
  OtherNavigator: { label: 'Diğer', icon: 'more-horizontal' },
};

const WelcomeNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeNavigator"
      screenOptions={({ route }) => {
        const routeName = getFocusedRouteNameFromRoute(route) ?? route.name;
        const tabBarHidden = ['Menu'];
        const tabConfig = TAB_CONFIG[route.name];

        return {
          headerShown: false,
          tabBarShowLabel: true,
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: TAB_COLOR_ACTIVE,
          tabBarInactiveTintColor: TAB_COLOR_INACTIVE,
          tabBarLabel: ({ focused }) => (
            <Text
              style={{
                fontSize: 11,
                fontWeight: focused ? '700' : '500',
                color: focused ? TAB_LABEL_ACTIVE : TAB_COLOR_INACTIVE,
                marginTop: 3,
                letterSpacing: -0.1,
              }}
            >
              {tabConfig?.label}
            </Text>
          ),
          tabBarIcon: ({ focused }) => {
            const color = focused ? TAB_COLOR_ACTIVE : TAB_COLOR_INACTIVE;

            if (tabConfig?.useMymIcon) {
              return (
                <Image
                  source={focused ? mymIconActive : mymIconInactive}
                  style={{ width: 26, height: 26 }}
                  resizeMode="contain"
                />
              );
            }

            if (tabConfig?.useScooterIcon) {
              return (
                <MaterialCommunityIcons
                  name="moped"
                  size={26}
                  color={color}
                />
              );
            }

            if (tabConfig?.useFriesIcon) {
              return (
                <MaterialCommunityIcons
                  name="french-fries"
                  size={26}
                  color={color}
                />
              );
            }

            if (tabConfig?.useLogo) {
              return (
                <Image
                  source={logoM}
                  style={{
                    width: 22,
                    height: 20,
                    tintColor: focused ? undefined : TAB_COLOR_INACTIVE,
                    opacity: focused ? 1 : 0.85,
                  }}
                  resizeMode="contain"
                />
              );
            }

            return (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Feather
                  name={tabConfig?.icon ?? 'circle'}
                  size={22}
                  color={color}
                />
              </View>
            );
          },
          tabBarStyle: tabBarHidden.includes(routeName)
            ? { display: 'none' }
            : {
                backgroundColor: '#FFFFFF',
                borderTopWidth: StyleSheet.hairlineWidth,
                borderTopColor: '#E6E6E6',
                height: Platform.OS === 'ios' ? 90 : 70,
                paddingTop: 10,
                paddingBottom: Platform.OS === 'ios' ? 28 : 12,
                elevation: 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: -2 },
                shadowOpacity: 0.06,
                shadowRadius: 6,
              },
          tabBarItemStyle: {
            paddingVertical: 2,
          },
        };
      }}
    >
      <Tab.Screen name="HomeNavigator" component={HomeNavigator} />
      <Tab.Screen name="MymNavigator" component={MymNavigator} />
      <Tab.Screen name="OrderNavigator" component={OrderNavigator} />
      <Tab.Screen name="ProductsNavigator" component={ProductsNavigator} />
      <Tab.Screen name="OtherNavigator" component={OtherNavigator} />
    </Tab.Navigator>
  );
};

export default WelcomeNavigator;
