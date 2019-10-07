import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import Profile from "../Components/Profile";
import { Icon } from "native-base";
import Login from "../Components/Login";

const ProfileTap = createStackNavigator(
  {
    Login: Login,
    Profile: Profile
  },
  {
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: () => <Icon type="Octicons" name="person" />
    }
  }
);

export default ProfileTap;
