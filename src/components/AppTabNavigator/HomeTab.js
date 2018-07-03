import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Content, Icon } from 'native-base';

import CartComponent from '../CartComponent';

export default class HomeTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color:tintColor }}  />
    )
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <CartComponent sourceImage="1" likes="100"/>
          <CartComponent sourceImage="2" likes="50"/>
          <CartComponent sourceImage="3" likes="150"/>
          <CartComponent sourceImage="4" likes="200"/>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});