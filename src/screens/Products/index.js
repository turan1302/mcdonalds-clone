import React, { useMemo } from 'react';
import { View, Text, ScrollView, StatusBar, SafeAreaView } from 'react-native';
import createStyles from './styles';
import CategoryRow from '../../components/Products/CategoryRow';
import useDimensions from '../../hooks/useDimensions';

const CATEGORIES = [
  {
    id: '1',
    label: 'Burgerler',
    image: require('../../assets/images/products-burgers.png'),
  },
  {
    id: '2',
    label: 'Happy Meal®',
    image: require('../../assets/images/products-happymeal.png'),
  },
  {
    id: '3',
    label: 'Atıştırmalıklar',
    image: require('../../assets/images/products-snacks.png'),
  },
  {
    id: '4',
    label: 'Soslar',
    image: require('../../assets/images/products-sauces.png'),
  },
  {
    id: '5',
    label: 'Soğuk İçecekler',
    image: require('../../assets/images/products-colddrinks.png'),
  },
];

const Products = () => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Ürünler</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.heading}>Ürünler</Text>

        {CATEGORIES.map((item) => (
          <CategoryRow key={item.id} label={item.label} image={item.image} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Products;
