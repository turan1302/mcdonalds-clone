import React, { useMemo } from 'react';
import { View, Text, Image } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const mcDeliveryLogo = require('../../../assets/images/order-mcdelivery-logo.png');

const BrandHeader = () => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>McDonald's</Text>
      </View>
      <View style={styles.brandRow}>
        <Image
          source={mcDeliveryLogo}
          style={styles.brandLogo}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

export default BrandHeader;
