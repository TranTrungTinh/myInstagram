import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Card, CardItem, Thumbnail, Body, Left, Right, Icon, Button } from 'native-base';


const win = Dimensions.get('window');
const ratio = win.width / 541;

export default class CartComponent extends React.Component {

  render() {

    const images = {
      "1": require('../assets/timeline1.jpg'),
      "2": require('../assets/timeline2.jpg'),
      "3": require('../assets/timeline3.jpg'),
      "4": require('../assets/timeline4.jpg')
    }

    return (
      <Card >
        <CardItem>
          <Left>
            <Thumbnail source={require('../assets/me.jpg')} />
            <Body>
              <Text>Tính Trần</Text>
              <Text note>Jun 29, 2018</Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem cardBody>
          <Image source={images[this.props.sourceImage]} style={{ height: 362*ratio, width: win.width, flex: 1 }} />
        </CardItem>

        <CardItem style={{ height: 40, paddingBottom: 0 }}>
          <Left>
            <Button transparent>
              <Icon name="ios-heart-outline" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>

        <CardItem style={{ height: 35, paddingBottom: 0 }} >
          <Text>{this.props.likes} likes </Text>
        </CardItem>

        <CardItem>
          <Body>
            <Text style={{ textAlign: "justify" }} >
              <Text style={{ fontWeight: '900' }}>LiemTran: </Text>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});