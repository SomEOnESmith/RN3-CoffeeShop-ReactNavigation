import React from "react";
import { Card, CardItem, Thumbnail, Text, Left, ListItem } from "native-base";
import { ImageBackground, View } from "react-native";
import itemStyle from "./CoffeeList/styles";
import sunrise from "../assets/images/sunrise.jpg";

const Profile = () => {
  const styles = itemStyle;
  const img = { image: sunrise };
  return (
    <ImageBackground
      source={{
        uri:
          "https://www.hdwallpapers.in/download/sunset_minimal_landscape_4k-HD.jpg"
      }}
      style={styles.background}
    >
      <View style={styles.overlay} />
      <ListItem style={styles.listitem}>
        <Card style={styles.transparent}>
          <CardItem style={styles.transparent}>
            <Thumbnail
              bordered
              source={{
                uri:
                  "https://www.hdwallpapers.in/download/coastal_sunrise_5k-HD.jpg"
              }}
              style={styles.thumbnail}
            />
            <Left>
              <Text style={styles.text}>username: Hussain AL-Haddad</Text>
              <Text note style={styles.text}>
                Bio: the power of React Native
              </Text>
            </Left>
          </CardItem>
        </Card>
      </ListItem>
    </ImageBackground>
  );
};

export default Profile;
