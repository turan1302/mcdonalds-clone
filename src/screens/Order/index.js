import React, { useMemo, useState } from 'react';
import { View, Image, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import createStyles from './styles';
import BrandHeader from '../../components/Order/BrandHeader';
import AuthSwitch from '../../components/Order/AuthSwitch';
import AddressRow from '../../components/Order/AddressRow';
import CategoryCard from '../../components/Order/CategoryCard';
import useDimensions from '../../hooks/useDimensions';

const banner = require('../../assets/images/order-banner.png');

const CATEGORIES = [
  {
    id: '1',
    label: 'Cazip Teklifler',
    image: require('../../assets/images/order-card-offers.png'),
  },
  {
    id: '2',
    label: 'En Sevilenler',
    image: require('../../assets/images/order-card-popular.png'),
  },
];

const Order = () => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);
  const [authTab, setAuthTab] = useState('register');

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <BrandHeader />
        <AuthSwitch value={authTab} onChange={setAuthTab} />
        <AddressRow />

        <Image source={banner} style={styles.banner} resizeMode="cover" />

        <View style={styles.cardsGrid}>
          {CATEGORIES.map((item) => (
            <CategoryCard key={item.id} label={item.label} image={item.image} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Order;
