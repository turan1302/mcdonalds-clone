import { StyleSheet } from 'react-native';

const BANNER_ASPECT = 449 / 317;

export default (width) => {
  const pad = Math.max(16, width * 0.045);

  return StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: '#FFFFFF',
    },
    scrollContent: {
      paddingBottom: 28,
      backgroundColor: '#FFFFFF',
      flexGrow: 1,
    },
    banner: {
      width,
      height: width / BANNER_ASPECT,
      marginBottom: 20,
    },
    cardsGrid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      paddingHorizontal: pad,
      gap: 12,
    },
  });
};
