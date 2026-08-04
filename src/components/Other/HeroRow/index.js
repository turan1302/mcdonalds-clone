import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const heroImage = require('../../../assets/images/other-hero.png');

const HeroRow = ({ title = 'Diğer' }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.heroRow}>
      <Text style={styles.heading}>{title}</Text>
      <Image source={heroImage} style={styles.heroImage} resizeMode="contain" />
    </View>
  );
};

export default HeroRow;
