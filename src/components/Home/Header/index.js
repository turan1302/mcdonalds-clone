import React, { useMemo } from 'react';
import { View, Image } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const logoM = require('../../../assets/images/home-logo-m.png');

const Header = () => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.header}>
      <Image source={logoM} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

export default Header;
