import { StyleSheet } from 'react-native';

const BANNER_ASPECT = 449 / 311;

export default (width) =>
  StyleSheet.create({
    bannerWrap: {
      width,
      height: width / BANNER_ASPECT,
      backgroundColor: '#111111',
      overflow: 'hidden',
    },
    banner: {
      width: '100%',
      height: '100%',
    },
  });
