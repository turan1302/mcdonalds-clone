import React, { useState } from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import Header from '../../components/Home/Header';
import Banner from '../../components/Home/Banner';
import PromoSection from '../../components/Home/PromoSection';
import LoginCard from '../../components/Home/LoginCard';

const Home = () => {
  const [showLoginCard, setShowLoginCard] = useState(true);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces
        contentContainerStyle={styles.scrollContent}
      >
        <Header />
        <Banner />
        <PromoSection
          title="Örümcek Adam: Yepyeni Bir Gün Menüleri Geldi! 🕸️"
          description="Favori menünü seç, aksiyona katıl, 4 koleksiyonluk figürden birine sahip ol! 🍔🍟"
        />
        {showLoginCard && (
          <LoginCard onClose={() => setShowLoginCard(false)} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
