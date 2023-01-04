import React from 'react';
import { StyleSheet, View, Text, Image, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';

export default function Header({ navigation, title }) {
    
      const openMenu = () => {
     navigation.openDrawer();
      }
    
      return (
     <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.header}>
        <MaterialIcons name='menu' size={28} onPress={openMenu} style={globalStyles.icon} />
        <View style={globalStyles.headerTitle}>
             <Image source={require('../assets/heart_logo.png')} style={globalStyles.headerImage} />
          <Text style={globalStyles.headerText}>{ title }</Text>
        </View>
     </ImageBackground>
      )
    }

