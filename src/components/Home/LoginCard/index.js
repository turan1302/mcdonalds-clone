import React, { useMemo } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const loginKey = require('../../../assets/images/home-login-key.png');

const LoginCard = ({ onClose, onLoginPress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.cardSection}>
      <View style={styles.loginCard}>
        <Pressable style={styles.loginClose} onPress={onClose} hitSlop={10}>
          <Feather name="x" size={15} color="#333333" />
        </Pressable>

        <View style={styles.loginBody}>
          <View style={styles.loginTextWrap}>
            <Text style={styles.loginTitle}>Henüz oturum açmadınız</Text>
            <Text style={styles.loginDescription}>
              Fırsatlara erişmek ve sipariş vermek için giriş yapın veya üye
              olun.
            </Text>
            <Pressable
              onPress={onLoginPress}
              style={({ pressed }) => [
                styles.loginButton,
                pressed && styles.loginButtonPressed,
              ]}
            >
              <Text style={styles.loginButtonText}>Giriş Yap</Text>
            </Pressable>
          </View>
          <Image source={loginKey} style={styles.loginKey} resizeMode="contain" />
        </View>
      </View>
    </View>
  );
};

export default LoginCard;
