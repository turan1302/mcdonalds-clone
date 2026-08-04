import { StyleSheet, Platform } from 'react-native';

export default (width) => {
  const pad = Math.max(16, width * 0.045);
  const cardWidth = width * 0.48;

  return StyleSheet.create({
    rewardsHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: pad,
      marginBottom: 14,
    },
    rewardsTitle: {
      fontSize: 22,
      fontWeight: '800',
      color: '#1A1A1A',
    },
    seeAll: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 4,
    },
    seeAllText: {
      color: '#2B6CB0',
      fontSize: 14,
      fontWeight: '600',
    },
    rewardsList: {
      paddingHorizontal: pad,
      gap: 12,
      paddingBottom: 8,
    },
    rewardCard: {
      width: cardWidth,
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      paddingTop: 14,
      paddingBottom: 14,
      paddingHorizontal: 10,
      alignItems: 'center',
      borderWidth: StyleSheet.hairlineWidth,
      borderColor: '#E8E8E8',
      ...Platform.select({
        ios: {
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.08,
          shadowRadius: 8,
        },
        android: {
          elevation: 3,
        },
      }),
    },
    rewardImageWrap: {
      width: cardWidth * 0.78,
      height: cardWidth * 0.78,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    rewardImage: {
      width: '100%',
      height: '100%',
    },
    unavailableBadge: {
      position: 'absolute',
      bottom: '28%',
      left: 4,
      right: 4,
      backgroundColor: 'rgba(20,20,20,0.88)',
      borderRadius: 16,
      paddingVertical: 6,
      paddingHorizontal: 8,
    },
    unavailableText: {
      color: '#FFFFFF',
      fontSize: 10,
      fontWeight: '600',
      textAlign: 'center',
      lineHeight: 13,
    },
    pointsPill: {
      borderWidth: 1.5,
      borderColor: '#1A1A1A',
      borderRadius: 18,
      paddingHorizontal: 14,
      paddingVertical: 6,
      backgroundColor: '#FFFFFF',
    },
    pointsText: {
      color: '#1A1A1A',
      fontSize: 13,
      fontWeight: '700',
    },
  });
};
