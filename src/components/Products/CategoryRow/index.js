import React, { useMemo } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const CategoryRow = ({ label, image, onPress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <View style={styles.thumbWrap}>
        <Image source={image} style={styles.thumb} resizeMode="cover" />
      </View>
      <Text style={styles.rowLabel}>{label}</Text>
      <Feather name="chevron-right" size={24} color="#FFFFFF" />
    </Pressable>
  );
};

export default CategoryRow;
