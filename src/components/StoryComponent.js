import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Thumbnail } from 'native-base';

export default class AddMediaTab extends React.Component {

  render() {
    const images = {
      '1': require('../assets/stories/1.jpg'),
      '2': require('../assets/stories/2.jpg'),
      '3': require('../assets/stories/3.jpg'),
      '4': require('../assets/stories/4.jpg'),
      '5': require('../assets/stories/5.jpg'),
      '6': require('../assets/stories/6.jpg'),
      '7': require('../assets/stories/7.jpg'),
      '8': require('../assets/stories/8.jpg'),
      '9': require('../assets/stories/9.jpg'),
    };
    const { container, thubnail, nameTag } = styles;
    return (
      <View style={container} >
        <Thumbnail 
          style={thubnail}
          source={images[this.props.sourceImage]} 
        />
        <Text style={nameTag}>{this.props.name}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  thubnail: {
    marginHorizontal: 5, 
    borderColor: 'pink', 
    borderWidth: 2
  },
  nameTag: {
    fontSize: 12, 
    fontWeight: '200', 
    paddingTop: 5
  }
});