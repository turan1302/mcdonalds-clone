import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Mym/Header';
import Hero from '../../components/Mym/Hero';
import RewardsSection from '../../components/Mym/RewardsSection';

const REWARDS = [
  {
    id: '1',
    image: require('../../assets/images/mym-reward-1.png'),
    points: '1500 puan',
    unavailable: true,
  },
  {
    id: '2',
    image: require('../../assets/images/mym-reward-2.png'),
    points: '1500 puan',
    unavailable: true,
  },
];

const Mym = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <Hero />
        <RewardsSection rewards={REWARDS} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Mym;
