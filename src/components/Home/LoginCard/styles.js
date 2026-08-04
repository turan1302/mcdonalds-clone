import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);
  const keyWidth = width * 0.26;

  return StyleSheet.create({
    cardSection: {
      paddingHorizontal: pad,
      paddingTop: 14,
    },
    loginCard: {
      backgroundColor: '#FFFFFF',
      borderRadius: 18,
      paddingLeft: 18,
      paddingRight: 12,
      paddingTop: 18,
      paddingBottom: 18,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 12,
        },
        android: {
          elevation: 4,
        },
      }),
    },
    loginClose: {
      position: 'absolute',
      top: 10,
      right: 10,
      zIndex: 2,
      width: 30,
      height: 30,
      borderRadius: 15,
      backgroundColor: '#F1F1F1',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBody: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    loginTextWrap: {
      flex: 1,
      paddingRight: 6,
      paddingTop: 4,
    },
    loginTitle: {
      fontSize: Math.min(18, width * 0.046),
      fontWeight: '800',
      color: '#1A1A1A',
      letterSpacing: -0.2,
      marginBottom: 8,
      paddingRight: 24,
    },
    loginDescription: {
      fontSize: Math.min(13.5, width * 0.034),
      color: '#666666',
      lineHeight: Math.min(19, width * 0.048),
      marginBottom: 16,
      paddingRight: 4,
    },
    loginButton: {
      alignSelf: 'flex-start',
      backgroundColor: '#FFBC0D',
      paddingHorizontal: 24,
      paddingVertical: 11,
      borderRadius: 26,
      minWidth: 110,
      alignItems: 'center',
    },
    loginButtonPressed: {
      backgroundColor: '#F0B000',
      transform: [{ scale: 0.98 }],
    },
    loginButtonText: {
      color: '#1A1A1A',
      fontSize: 14,
      fontWeight: '700',
    },
    loginKey: {
      width: keyWidth,
      height: keyWidth * 1.05,
      marginRight: 2,
    },
  });
};
