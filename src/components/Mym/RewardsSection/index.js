import React, { useMemo } from 'react';
import { View, Text, Image, ScrollView, Pressable } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import createStyles from './styles';
import useDimensions from '../../../hooks/useDimensions';

const RewardsSection = ({ rewards, onSeeAllPress }) => {
  const { width } = useDimensions();
  const styles = useMemo(() => createStyles(width), [width]);

  return (
    <View>
      <View style={styles.rewardsHeader}>
        <Text style={styles.rewardsTitle}>Ödüller</Text>
        <Pressable style={styles.seeAll} onPress={onSeeAllPress}>
          <Text style={styles.seeAllText}>Hepsini gör</Text>
          <Feather name="arrow-right" size={14} color="#2B6CB0" />
        </Pressable>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.rewardsList}
      >
        {rewards.map((item) => (
          <View key={item.id} style={styles.rewardCard}>
            <View style={styles.rewardImageWrap}>
              <Image
                source={item.image}
                style={styles.rewardImage}
                resizeMode="contain"
              />
              {item.unavailable && (
                <View style={styles.unavailableBadge}>
                  <Text style={styles.unavailableText}>
                    Gün veya saat kullanıma uygun değil.
                  </Text>
                </View>
              )}
            </View>
            <View style={styles.pointsPill}>
              <Text style={styles.pointsText}>{item.points}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RewardsSection;
