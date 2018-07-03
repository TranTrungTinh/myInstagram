import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Icon, Container, Header, Content, Button, Left, Right, Thumbnail, Body } from 'native-base';

export default class ProfileTab extends React.Component {
  
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="ios-person-outline" style={{ color:tintColor }}  />
    )
  }
  
  render() {
    return (
      <Container style={styles.container} >
        <Header>
          <Left><Icon name="md-person-add" style={{ paddingLeft: 10 }} /></Left>
          <Body><Text style={{ fontSize: 20, fontFamily: 'Avenir', fontWeight: '600' }} >tinhtran</Text></Body>
          <Right><Icon type="Entypo" name="back-in-time" style={{ paddingRight: 10 }} /></Right>
        </Header>

        <Content>
          <View style={{paddingTop: 10}} >
            <View style={{ flexDirection: 'row' }} >
              <View style={{flex: 1, alignItems: 'center' }} >
                <Thumbnail 
                  source={require('../../assets/me.jpg')} 
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{flex: 3}} >

                <View style={{flexDirection: 'row', justifyContent: 'space-around'}} >
                  <View style={{alignItems: 'center'}} >
                    <Text>4</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }} >posts</Text>
                  </View>
                  <View style={{alignItems: 'center'}} >
                    <Text>98</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }} >followers</Text>
                  </View>
                  <View style={{alignItems: 'center'}} >
                    <Text>140</Text>
                    <Text style={{ fontSize: 10, color: 'grey' }} >following</Text>
                  </View>
                </View>

                <View style={{flexDirection: 'row', paddingTop: 10}} >
                  <Button bordered
                    style={{ flex: 5, justifyContent: 'center', height: 30, borderColor: 'grey', marginLeft: 10 }}
                  >
                    <Text style={{fontWeight: '600', fontSize: 15}} >Edit Profile</Text>
                  </Button>
                  <Button bordered
                    style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 30, borderColor: 'grey', marginRight: 10, marginLeft: 5}}
                  >
                    <Icon name="settings" style={{ color: 'black', fontSize: 17 }} />
                  </Button>
                </View>

              </View>
            </View>
            <View style={{paddingVertical: 5, paddingHorizontal: 20}} >
              <Text style={{fontWeight: '600'}} >Tinh Tran</Text>
            </View>
          </View>
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
