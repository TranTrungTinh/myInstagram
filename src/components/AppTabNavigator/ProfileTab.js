import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import {
  Icon,
  Container,
  Header,
  Content,
  Button,
  Left,
  Right,
  Thumbnail,
  Body
} from "native-base";

import CartComponent from "../CartComponent";

const images = [
  { id: 1, source: require("../../assets/timeline1.jpg") },
  { id: 2, source: require("../../assets/timeline2.jpg") },
  { id: 3, source: require("../../assets/timeline3.jpg") },
  { id: 4, source: require("../../assets/timeline4.jpg") },
  { id: 5, source: require("../../assets/timeline5.jpg") },
  { id: 6, source: require("../../assets/timeline6.jpg") },
  { id: 7, source: require("../../assets/timeline7.jpg") },
  { id: 8, source: require("../../assets/timeline8.jpg") },
  { id: 9, source: require("../../assets/timeline9.jpg") }
];

const { width, height } = Dimensions.get("window");

export default class ProfileTab extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  state = {
    activeIndex: 0
  };

  segmentButtonHandler = value => {
    this.setState({ activeIndex: value });
  };

  renderOne = () => {
    return images.map(e => (
      <View
        key={e.id}
        style={[
          { width: width / 3 },
          { height: width / 3 },
          { marginBottom: 2 },
          e.id % 3 !== 1 ? { paddingLeft: 2 } : { paddingLeft: 0 }
        ]}
      >
        <Image
          source={e.source}
          style={{ flex: 1, width: undefined, height: undefined }}
        />
      </View>
    ));
  };

  renderSegment = () => {
    const { activeIndex } = this.state;
    if (activeIndex === 0) {
      return (
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {this.renderOne()}
        </View>
      );
    }
    if (activeIndex === 1) {
      return (
        <View>
          <CartComponent sourceImage="1" likes="100" key="1" />
          <CartComponent sourceImage="2" likes="50" key="2" />
          <CartComponent sourceImage="3" likes="150" key="3" />
          <CartComponent sourceImage="4" likes="200" key="4" />
        </View>
      );
    }
    if (activeIndex === 2) {
      return (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: 350
          }}
        >
          <Image
            source={require("../../assets/profile.png")}
            style={{ width: 150, height: 150 }}
          />
          <Text style={{ fontSize: 24, fontWeight: "300", paddingBottom: 10 }}>
            Photos of You
          </Text>
          <Text>When people tag you in photos, they'll appear here.</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Icon name="person-add" style={{ paddingLeft: 10 }} />
          </Left>
          <Body>
            <Text style={styles.headerTitle}>tinhtran</Text>
          </Body>
          <Right>
            <Icon name="menu" style={{ paddingRight: 10 }} />
          </Right>
        </Header>

        <Content>
          <View style={styles.profileContainer}>
            <View style={styles.profileRoot}>
              <View style={styles.profileImage}>
                <Thumbnail
                  source={require("../../assets/me.jpg")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={styles.profileInfo}>
                <View style={styles.profileInfoDetail}>
                  <View style={styles.profileInfoDetailRoot}>
                    <Text>9</Text>
                    <Text style={styles.profileInfoDetailSub}>posts</Text>
                  </View>
                  <View style={styles.profileInfoDetailRoot}>
                    <Text>98</Text>
                    <Text style={styles.profileInfoDetailSub}>followers</Text>
                  </View>
                  <View style={styles.profileInfoDetailRoot}>
                    <Text>140</Text>
                    <Text style={styles.profileInfoDetailSub}>following</Text>
                  </View>
                </View>

                <View style={styles.profileInfoSettings}>
                  <Button bordered style={styles.profileInfoSettingsEdit}>
                    <Text style={{ fontWeight: "600", fontSize: 15 }}>
                      Edit Profile
                    </Text>
                  </Button>
                  <Button bordered style={styles.profileInfoSettingsIcon}>
                    <Icon
                      name="settings"
                      style={{ color: "black", fontSize: 15 }}
                    />
                  </Button>
                </View>
              </View>
            </View>
            <View style={styles.profileName}>
              <Text style={{ fontWeight: "600" }}>Tinh Tran</Text>
            </View>
          </View>

          <View style={styles.profileSegmentRoot}>
            <View style={styles.profileSegment}>
              <Button
                transparent
                onPress={() => this.segmentButtonHandler(0)}
                active={this.state.activeIndex === 0}
              >
                <Icon
                  type="MaterialIcons"
                  name="grid-on"
                  style={this.state.activeIndex === 0 ? {} : { color: "grey" }}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentButtonHandler(1)}
                active={this.state.activeIndex === 1}
              >
                <Icon
                  type="MaterialCommunityIcons"
                  name="menu"
                  style={this.state.activeIndex === 1 ? {} : { color: "grey" }}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentButtonHandler(2)}
                active={this.state.activeIndex === 2}
              >
                <Icon
                  type="MaterialCommunityIcons"
                  name="clipboard-account"
                  style={this.state.activeIndex === 2 ? {} : { color: "grey" }}
                />
              </Button>
              <Button
                transparent
                onPress={() => this.segmentButtonHandler(3)}
                active={this.state.activeIndex === 3}
              >
                <Icon
                  type="FontAwesome"
                  name="bookmark-o"
                  style={this.state.activeIndex === 3 ? {} : { color: "grey" }}
                />
              </Button>
            </View>
          </View>
          {this.renderSegment()}
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: "Avenir",
    fontWeight: "600"
  },
  profileContainer: {
    paddingTop: 10
  },
  profileRoot: {
    flexDirection: "row"
  },
  profileImage: {
    flex: 1,
    alignItems: "center"
  },
  profileName: {
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  profileInfo: {
    flex: 3
  },
  profileInfoDetail: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  profileInfoDetailRoot: {
    alignItems: "center"
  },
  profileInfoDetailSub: {
    fontSize: 10,
    color: "grey"
  },
  profileInfoSettings: {
    flexDirection: "row",
    paddingTop: 10
  },
  profileInfoSettingsEdit: {
    flex: 5,
    justifyContent: "center",
    height: 30,
    borderColor: "grey",
    marginLeft: 10,
    marginRight: 5
  },
  profileInfoSettingsIcon: {
    flex: 1,
    height: 30,
    borderColor: "grey",
    marginRight: 10
  },
  profileSegmentRoot: {
    paddingTop: 10
  },
  profileSegment: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    borderTopColor: "#eae5e5",
    borderBottomColor: "#eae5e5"
  }
});
