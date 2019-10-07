import React from "react";
import { createBottomTabNavigator } from "react-navigation-tabs";
import ProfileTap from "./ProfileTap";
import OrderHistoryTab from "./OrderHistoryTab";
import CoffeeTab from "./CoffeeTab";

const BottomNav = createBottomTabNavigator(
  {
    CoffeeTab: CoffeeTab,
    OrderHistoryTab: OrderHistoryTab,
    ProfileTab: ProfileTap
  },
  {
    tabBarOptions: {
      inactiveBackgroundColor: "white",
      activeBackgroundColor: "#b8cdd0",
      activeTintColor: "red"
    }
  }
);

export default BottomNav;
