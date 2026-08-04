import React, { useMemo } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const mymHero = require('../../../assets/images/mym-hero.png');

const Hero = ({ onRegisterPress, onInfoPress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.heroSection}>
      <Text style={styles.eyebrow}>MyMcDonald's</Text>
      <Text style={styles.title}>Sipariş ver, puanları topla</Text>
      <Text style={styles.description}>
        Siparişlerinde puanları biriktirip, lezzetli ve her anına eşlik
        edebilecek ödülleri almak yada uygulamaya ve sana özel teklifleri
        görebilmek için üye ol.
      </Text>

      <Image source={mymHero} style={styles.heroImage} resizeMode="contain" />

      <View style={styles.buttonRow}>
        <Pressable
          onPress={onRegisterPress}
          style={({ pressed }) => [
            styles.primaryButton,
            pressed && styles.primaryButtonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Kaydol</Text>
        </Pressable>
        <Pressable
          onPress={onInfoPress}
          style={({ pressed }) => [
            styles.secondaryButton,
            pressed && styles.secondaryButtonPressed,
          ]}
        >
          <Text style={styles.secondaryButtonText}>Daha fazla bilgi edin</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Hero;
