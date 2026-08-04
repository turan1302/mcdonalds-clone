import { StyleSheet } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.05);
  const thumbSize = width * 0.2;

  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: pad,
      paddingVertical: 18,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#3A3A3A',
    },
    rowPressed: {
      backgroundColor: '#242424',
    },
    thumbWrap: {
      width: thumbSize,
      height: thumbSize,
      borderRadius: 12,
      backgroundColor: '#FFFFFF',
      overflow: 'hidden',
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: 18,
    },
    thumb: {
      width: '100%',
      height: '100%',
    },
    rowLabel: {
      flex: 1,
      fontSize: Math.min(18, width * 0.046),
      fontWeight: '800',
      color: '#FFFFFF',
      letterSpacing: -0.2,
    },
  });
};
