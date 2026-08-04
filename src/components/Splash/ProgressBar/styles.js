import { StyleSheet } from 'react-native';

export default (width) =>
  StyleSheet.create({
    progressTrack: {
      marginTop: 28,
      width: width * 0.42,
      height: 3,
      backgroundColor: '#E5E5E5',
      borderRadius: 2,
      overflow: 'hidden',
    },
    progressFill: {
      height: '100%',
      backgroundColor: '#2B2B2B',
      borderRadius: 2,
    },
  });
