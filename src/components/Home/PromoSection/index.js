import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const PromoSection = ({ title, description, onPress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.promoSection}>
      <View style={styles.promoTextWrap}>
        <Text style={styles.promoTitle}>{title}</Text>
        <Text style={styles.promoDescription}>{description}</Text>
      </View>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          styles.arrowButton,
          pressed && styles.arrowPressed,
        ]}
      >
        <Feather name="chevron-right" size={22} color="#1A1A1A" />
      </Pressable>
    </View>
  );
};

export default PromoSection;
