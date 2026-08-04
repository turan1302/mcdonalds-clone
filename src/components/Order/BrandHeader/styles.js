import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);

  return StyleSheet.create({
    header: {
      paddingHorizontal: pad,
      paddingTop: Platform.OS === 'android' ? 10 : 4,
      paddingBottom: 6,
    },
    headerText: {
      fontSize: 15,
      fontWeight: '700',
      color: '#1A1A1A',
    },
    brandRow: {
      alignItems: 'center',
      paddingTop: 18,
      paddingBottom: 20,
    },
    brandLogo: {
      width: width * 0.5,
      height: width * 0.125,
    },
  });
};
