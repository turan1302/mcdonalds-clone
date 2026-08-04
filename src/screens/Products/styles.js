import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.05);

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    topBar: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: pad,
      paddingTop: Platform.OS === 'android' ? 12 : 6,
      paddingBottom: 14,
    },
    topBarTitle: {
      fontSize: 17,
      fontWeight: '700',
      color: '#1A1A1A',
    },
    scrollContent: {
      backgroundColor: '#1A1A1A',
      flexGrow: 1,
      paddingBottom: 24,
    },
    heading: {
      fontSize: Math.min(28, width * 0.07),
      fontWeight: '800',
      color: '#FFFFFF',
      letterSpacing: -0.3,
      paddingHorizontal: pad,
      paddingTop: 28,
      paddingBottom: 10,
    },
  });
};
