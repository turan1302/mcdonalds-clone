import React, { useEffect, useMemo, useRef } from 'react';
import { View, Image, Animated, Easing } from 'react-native';
import createStyles from './styles';
import ProgressBar from '../../components/Splash/ProgressBar';
import useDimensions from '../../hooks/useDimensions';
import * as NavigationService from '../../common/NavigationService';

const splashMeal = require('../../assets/images/splash-meal.png');

const Splash = () => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);
  const progress = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: false,
    }).start();

    const timer = setTimeout(() => {
      NavigationService.reset();
    }, 2000);

    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image source={splashMeal} style={styles.image} resizeMode="contain" />
        <ProgressBar progress={progress} />
      </View>
    </View>
  );
};

export default Splash;
