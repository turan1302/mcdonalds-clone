import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.05);
  const heroWidth = width * 0.4;

  return StyleSheet.create({
    heroRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingLeft: pad,
      paddingRight: pad * 0.5,
      paddingTop: Platform.OS === 'android' ? 24 : 12,
      marginBottom: 24,
    },
    heading: {
      fontSize: Math.min(30, width * 0.075),
      fontWeight: '800',
      color: '#1A1A1A',
      letterSpacing: -0.4,
    },
    heroImage: {
      width: heroWidth,
      height: heroWidth * 0.82,
    },
  });
};
