import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const MenuRow = ({ label, icon, onPress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}
    >
      <View style={styles.rowIcon}>
        <Feather name={icon} size={22} color="#1A1A1A" />
      </View>
      <Text style={styles.rowLabel}>{label}</Text>
      <Feather name="chevron-right" size={24} color="#1A1A1A" />
    </Pressable>
  );
};

export default MenuRow;
