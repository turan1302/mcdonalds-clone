import React, { useMemo } from 'react';
import { View, Text, Pressable } from 'react-native';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const AuthSwitch = ({ value, onChange }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View style={styles.authPill}>
      <Pressable
        style={[styles.authOption, value === 'login' && styles.authOptionActive]}
        onPress={() => onChange('login')}
      >
        <Text style={styles.authText}>Giriş Yap</Text>
      </Pressable>
      <Pressable
        style={[
          styles.authOption,
          value === 'register' && styles.authOptionActive,
        ]}
        onPress={() => onChange('register')}
      >
        <Text style={styles.authText}>Kayıt Ol</Text>
      </Pressable>
    </View>
  );
};

export default AuthSwitch;
