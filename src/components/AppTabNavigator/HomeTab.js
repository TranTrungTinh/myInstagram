import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Content, Icon, Thumbnail } from 'native-base';

import CartComponent from '../CartComponent';
import StoryComponent from '../StoryComponent';

export default class HomeTab extends React.Component {

  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-home" style={{ color:tintColor }}  />
    )
  }

  render() {
    return (
      <Container style={styles.container}>

        <View style={{ height: 100 }} >
          <ScrollView 
            style={{ flex: 1 }} 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              paddingStart: 5,
              paddingEnd: 5,
              alignItems: 'center'
            }}
          >
            <StoryComponent sourceImage="1" name="kyhoa" key="1"/>
            <StoryComponent sourceImage="2" name="huynhthu" key="2"/>
            <StoryComponent sourceImage="3" name="quochuy" key="3"/>
            <StoryComponent sourceImage="4" name="hoangduy" key="4"/>
            <StoryComponent sourceImage="5" name="vanpho" key="5"/>
            <StoryComponent sourceImage="6" name="locninh" key="6"/>
            <StoryComponent sourceImage="7" name="binhlam" key="7"/>
            <StoryComponent sourceImage="8" name="totam" key="8"/>
            <StoryComponent sourceImage="9" name="ngochan" key="9"/>
          </ScrollView>
        </View>

        <Content>
          <CartComponent sourceImage="1" likes="100" key="1"/>
          <CartComponent sourceImage="2" likes="50" key="2"/>
          <CartComponent sourceImage="3" likes="150" key="3"/>
          <CartComponent sourceImage="4" likes="200" key="4"/>
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