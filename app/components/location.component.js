import React from 'react';
import { 
  FlatList, 
  ActivityIndicator, 
  Text, 
  View, 
  StatusBar,
  StyleSheet
} from 'react-native';

import styles from '../styles/location.style.js';
import DateTime from './date.component.js';
import Forecast from './forecast.component.js';

export default class Location extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      date: ''
    }
  }

  componentDidMount(){
    return fetch('http://api.openweathermap.org/data/2.5/weather?id=1733046&appid=a616f69b7064a8fc93339f882611964f')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson,
        }, function(){

        });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  render(){
    if(this.state.isLoading){
      return(
        <View style={styles.aibox}>
          <ActivityIndicator/>
        </View>
      )
    }

    var weatherList = [];
    //for(var i=0;i<)

    return(
      <View>
        <View style={styles.header}>
          <Text style={styles.location}>{this.state.dataSource.name}</Text>
        </View>
        <DateTime />
        <View style={styles.body1}>
          <Text style={styles.temp}>{Math.ceil(this.state.dataSource.main.temp-272.15)} &#8451;</Text>
          <Text style={styles.weather}>{this.state.dataSource.weather[0].description}</Text>
        </View>
        <Forecast />
      </View>
    );
  }
}


