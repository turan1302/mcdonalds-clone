import { StyleSheet, Platform } from 'react-native';

export default (width) =>
  StyleSheet.create({
    authPill: {
      flexDirection: 'row',
      alignSelf: 'center',
      width: width * 0.62,
      borderRadius: 28,
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#DDDDDD',
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
      marginBottom: 24,
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.06,
          shadowRadius: 6,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    authOption: {
      flex: 1,
      paddingVertical: 13,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 28,
    },
    authOptionActive: {
      backgroundColor: '#FFBC0D',
    },
    authText: {
      fontSize: 14,
      fontWeight: '700',
      color: '#1A1A1A',
    },
  });
