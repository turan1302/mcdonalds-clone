import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);

  return StyleSheet.create({
    header: {
      paddingHorizontal: pad,
      paddingTop: Platform.OS === 'android' ? 10 : 4,
      paddingBottom: 8,
    },
    logo: {
      width: width * 0.18,
      height: width * 0.1,
    },
  });
};
