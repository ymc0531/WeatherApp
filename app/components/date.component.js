import React from 'react';
import { 
  FlatList, 
  ActivityIndicator, 
  Text, 
  View, 
  StatusBar,
  StyleSheet
} from 'react-native';

import styles from '../styles/date.style.js';

export default class DateTime extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      date: getTimeDate()
    }
  }

  render(){
    let that = this;
    setTimeout(function(){
      that.setState({date: getTimeDate()})
    }, 60000);

    return(
      <View style={styles.datebox}>
        <Text style={styles.date}>{this.state.date}</Text>
      </View>
    );
  }
}

function getTimeDate() {
  var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var day = days[new Date().getDay()];
  var date = new Date().getDate(); //Current Date
  var month = months[new Date().getMonth()]; //Current Month
  var year = new Date().getFullYear(); //Current Year
  var hours = new Date().getHours(); //Current Hours
  var min = new Date().getMinutes(); //Current Minutes
  var sec = new Date().getSeconds(); //Current Seconds
  if (min < 10) min = '0'+ min;

  var cal = day + ', ' + date + ' ' + month + ' ' + year + '   ' + hours + ':' + min + ' ' + 'SGT';
  return cal;
}
