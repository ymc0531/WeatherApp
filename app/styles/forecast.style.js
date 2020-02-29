import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  date: {
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  desc: {
    color: '#a1a1a1',
    paddingLeft: 20,
  },
  temp: {
    paddingLeft: 20,
  },
  viewList: {
    paddingTop: 10,
    paddingBottom: 20,
    borderStyle: 'solid',
    borderBottomWidth: 0.5,
    borderColor: '#dbdbdb',
    flexDirection: 'row',
  },
  col1: {
    flex: 4,
  },
  col2: {
    flex: 1,
    justifyContent: 'center',
  },
  arrow: {
    paddingRight: 20,
    textAlign: 'right',
    color: 'red',
    fontWeight: '700',
  },
});