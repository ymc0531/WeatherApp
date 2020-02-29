import React from 'react';
import { 
  FlatList, 
  ActivityIndicator, 
  Text, 
  View, 
  StatusBar,
  StyleSheet,
  ScrollView
} from 'react-native';

import styles from './app/styles/home.style.js';
import Location from './app/components/location.component.js';

export default class WeatherApp extends React.Component {

  render(){
    return(
      <ScrollView>
        <Location />
      </ScrollView>
    );
  }
}

