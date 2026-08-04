import { StyleSheet } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);
  const heroHeight = width * 0.48;

  return StyleSheet.create({
    heroSection: {
      paddingHorizontal: pad,
      paddingTop: 8,
    },
    eyebrow: {
      fontSize: 15,
      fontWeight: '600',
      color: '#1A1A1A',
      marginBottom: 6,
    },
    title: {
      fontSize: Math.min(30, width * 0.075),
      fontWeight: '800',
      color: '#1A1A1A',
      letterSpacing: -0.4,
      lineHeight: Math.min(36, width * 0.09),
      marginBottom: 12,
    },
    description: {
      fontSize: Math.min(14.5, width * 0.037),
      color: '#333333',
      lineHeight: Math.min(21, width * 0.054),
      marginBottom: 8,
    },
    heroImage: {
      width: '100%',
      height: heroHeight,
      marginTop: 8,
      marginBottom: 18,
    },
    buttonRow: {
      flexDirection: 'row',
      gap: 10,
      marginBottom: 28,
    },
    primaryButton: {
      flex: 1,
      backgroundColor: '#FFBC0D',
      borderRadius: 10,
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryButtonPressed: {
      backgroundColor: '#F0B000',
    },
    primaryButtonText: {
      color: '#1A1A1A',
      fontSize: 15,
      fontWeight: '700',
    },
    secondaryButton: {
      flex: 1.35,
      backgroundColor: '#FFFFFF',
      borderRadius: 10,
      borderWidth: 1.5,
      borderColor: '#1A1A1A',
      paddingVertical: 14,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 8,
    },
    secondaryButtonPressed: {
      backgroundColor: '#F7F7F7',
    },
    secondaryButtonText: {
      color: '#1A1A1A',
      fontSize: 14,
      fontWeight: '700',
      textAlign: 'center',
    },
  });
};
