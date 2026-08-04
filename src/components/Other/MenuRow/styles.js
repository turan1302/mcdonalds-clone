import { StyleSheet } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.05);

  return StyleSheet.create({
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: pad,
      paddingVertical: 19,
      borderBottomWidth: StyleSheet.hairlineWidth,
      borderBottomColor: '#DDDDDD',
    },
    rowPressed: {
      backgroundColor: '#F6F6F6',
    },
    rowIcon: {
      width: 32,
      marginRight: 10,
    },
    rowLabel: {
      flex: 1,
      fontSize: Math.min(17, width * 0.043),
      fontWeight: '700',
      color: '#1A1A1A',
      letterSpacing: -0.2,
    },
  });
};
