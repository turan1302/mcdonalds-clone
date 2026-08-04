import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);

  return StyleSheet.create({
    header: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: pad,
      paddingTop: Platform.OS === 'android' ? 10 : 4,
      paddingBottom: 12,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#F0F0F0',
    },
    logo: {
      width: 36,
      height: 32,
    },
  });
};
