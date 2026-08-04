import { StyleSheet } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);

  return StyleSheet.create({
    addressRow: {
      flexDirection: 'row',
      alignSelf: 'center',
      alignItems: 'flex-start',
      marginBottom: 28,
      paddingHorizontal: pad,
    },
    addressIcon: {
      marginTop: 2,
      marginRight: 10,
    },
    addressTitle: {
      fontSize: 15,
      fontWeight: '800',
      color: '#1A1A1A',
      marginBottom: 3,
    },
    addressSubtitle: {
      fontSize: 14,
      color: '#8A8A8A',
    },
  });
};
