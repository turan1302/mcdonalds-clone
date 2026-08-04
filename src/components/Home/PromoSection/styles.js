import { StyleSheet } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);

  return StyleSheet.create({
    promoSection: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: pad,
      paddingTop: 20,
      paddingBottom: 22,
      flexDirection: 'row',
      alignItems: 'center',
    },
    promoTextWrap: {
      flex: 1,
      paddingRight: 14,
    },
    promoTitle: {
      fontSize: Math.min(22, width * 0.055),
      fontWeight: '800',
      color: '#1A1A1A',
      letterSpacing: -0.3,
      lineHeight: Math.min(28, width * 0.07),
      marginBottom: 8,
    },
    promoDescription: {
      fontSize: Math.min(14, width * 0.036),
      color: '#5C5C5C',
      lineHeight: Math.min(20, width * 0.052),
    },
    arrowButton: {
      width: 42,
      height: 42,
      borderRadius: 21,
      backgroundColor: '#EFEFEF',
      alignItems: 'center',
      justifyContent: 'center',
    },
    arrowPressed: {
      backgroundColor: '#E2E2E2',
      transform: [{ scale: 0.96 }],
    },
  });
};
