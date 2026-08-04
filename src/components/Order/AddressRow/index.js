import React, { useMemo } from 'react';
import { View, Text } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const AddressRow = ({ title = 'Kayıtlı Adres Bulunamadı', subtitle = 'Adres seçiniz' }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.addressRow}>
      <Feather
        name="map-pin"
        size={22}
        color="#FFBC0D"
        style={styles.addressIcon}
      />
      <View>
        <Text style={styles.addressTitle}>{title}</Text>
        <Text style={styles.addressSubtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

export default AddressRow;
