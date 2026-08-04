import React, { useMemo } from 'react';
import { View, Image } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const mymLogo = require('../../../assets/images/mym-logo.png');

const Header = () => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.header}>
      <Image source={mymLogo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

export default Header;
