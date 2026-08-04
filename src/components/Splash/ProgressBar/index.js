import React, { useMemo } from 'react';
import { View, Animated } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const ProgressBar = ({ progress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  const progressWidth = progress.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.progressTrack}>
      <Animated.View style={[styles.progressFill, { width: progressWidth }]} />
    </View>
  );
};

export default ProgressBar;
