import React from 'react';
import { 
  FlatList, 
  ActivityIndicator, 
  Text, 
  View, 
  StatusBar,
  StyleSheet
} from 'react-native';

import styles from '../styles/forecast.style.js';

export default class Forecast extends React.Component {

  constructor(props){
    super(props);
    this.state ={ 
      isLoading: true,
      date: ''
    }
  }

  componentDidMount(){
    return fetch('http://api.openweathermap.org/data/2.5/forecast?id=1733046&appid=a616f69b7064a8fc93339f882611964f')
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

    var tmpList = this.state.dataSource.list;
    var weatherList = [{date: tmpList[0].dt_txt.substr(0,10), minTemp: tmpList[0].main.temp, maxTemp: tmpList[0].main.temp, description: tmpList[0].weather[0].description}];
    var currDate = tmpList[0].dt_txt.substr(0,10);
    var tmpDate = '';
    var tmpTemp = 0;

    for(var i=0;i<tmpList.length;i++) {
      tmpDate = tmpList[i].dt_txt.substr(0,10);
      tmpTemp = tmpList[i].main.temp;
      if(tmpDate==currDate) {
        for(var j=0;j<weatherList.length;j++) {
          if(weatherList[j].date==tmpDate) {
            if(tmpTemp<weatherList[j].minTemp) weatherList[j].minTemp = tmpTemp;
            if(tmpTemp>weatherList[j].maxTemp) weatherList[j].maxTemp = tmpTemp;
          }
        }
      }else{
        var objList = {date: tmpDate, minTemp: tmpTemp, maxTemp: tmpTemp, description: tmpList[i].weather[0].description};
        weatherList.push(objList);
        currDate = tmpDate;
      }
    }

    var viewList = [];
    for(var i = 0; i < weatherList.length; i++){
      var y = weatherList[i].date.substr(0,4);
      var m = weatherList[i].date.substr(5,2);
      var d = weatherList[i].date.substr(8,2);
      
      viewList.push(
        <View key = {i} style={styles.viewList}>
          <View style={styles.col1}>
            <Text style={styles.date}>{getFullDate(y+'-'+m+'-'+d)}</Text>
            <Text style={styles.temp}>{Math.ceil(weatherList[i].minTemp-272.15)}&#8451; - {Math.ceil(weatherList[i].maxTemp-272.15)}&#8451;</Text>
            <Text style={styles.desc}>{weatherList[i].description}</Text>
          </View>
          <View style={styles.col2}>
            <Text style={styles.arrow}>></Text>
          </View>
        </View>
      )
    }

    return(
      <View>
        {viewList}
      </View>
    );
  }
}

function getFullDate(dates) {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var dd = new Date(dates);
  var date = dd.getDate(); //Current Date
  var month = months[dd.getMonth()]; //Current Month
  var year = dd.getFullYear(); //Current Year
  var day = days[dd.getDay()];
  if(month < 10) month = '0' + month;
  if(date < 10) date = '0' + date;

  var cal = date + ' ' + month + ' ' + year + ', ' + day;
  return cal;
}


