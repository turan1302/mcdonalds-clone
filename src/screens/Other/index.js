import React from 'react';
import { ScrollView, StatusBar, SafeAreaView } from 'react-native';
import styles from './styles';
import HeroRow from '../../components/Other/HeroRow';
import MenuRow from '../../components/Other/MenuRow';

const MENU_ITEMS = [
  { id: '1', label: 'Hesabım', icon: 'user' },
  { id: '2', label: 'Hakkımızda', icon: 'info' },
  { id: '3', label: 'Bize Ulaşın', icon: 'mail' },
  { id: '4', label: 'Şartlar ve Koşullar', icon: 'file-text' },
  { id: '5', label: 'Yardım ve Destek', icon: 'help-circle' },
  { id: '6', label: 'Bölge & Dil', icon: 'globe' },
];

const Other = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HeroRow />

        {MENU_ITEMS.map((item) => (
          <MenuRow key={item.id} label={item.label} icon={item.icon} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Other;
