import React, { useMemo } from 'react';
import { View, Image } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const banner = require('../../../assets/images/home-banner.png');

const Banner = () => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.bannerWrap}>
      <Image source={banner} style={styles.banner} resizeMode="cover" />
    </View>
  );
};

export default Banner;
