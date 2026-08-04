import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);
  const cardWidth = (width - pad * 2 - 12) / 2;

  return StyleSheet.create({
    categoryCard: {
      width: cardWidth,
      backgroundColor: '#FAFAFA',
      borderRadius: 20,
      paddingTop: 16,
      paddingBottom: 18,
      paddingHorizontal: 12,
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#ECECEC',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.05,
          shadowRadius: 6,
        },
        android: {
          elevation: 2,
        },
      }),
    },
    categoryCardPressed: {
      backgroundColor: '#F1F1F1',
    },
    categoryImage: {
      width: cardWidth * 0.62,
      height: cardWidth * 0.62,
      marginBottom: 12,
    },
    categoryLabel: {
      fontSize: Math.min(16, width * 0.041),
      fontWeight: '800',
      color: '#1A1A1A',
      textAlign: 'center',
    },
  });
};
