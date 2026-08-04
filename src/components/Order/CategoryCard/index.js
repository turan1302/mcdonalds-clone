import React, { useMemo } from 'react';
import { Text, Image, Pressable } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const CategoryCard = ({ label, image, onPress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.categoryCard,
        pressed && styles.categoryCardPressed,
      ]}
    >
      <Image source={image} style={styles.categoryImage} resizeMode="contain" />
      <Text style={styles.categoryLabel}>{label}</Text>
    </Pressable>
  );
};

export default CategoryCard;
