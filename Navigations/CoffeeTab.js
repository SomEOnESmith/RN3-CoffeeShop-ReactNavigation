import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "native-base";
import CoffeeList from "../Components/CoffeeList";
import CoffeeDetail from "../Components/CoffeeDetail";

const CoffeeTab = createStackNavigator(
  {
    CoffeeList: CoffeeList,
    CoffeeDetail: CoffeeDetail
  },
  {
    navigationOptions: {
      tabBarLabel: "CoffeeList",
      tabBarIcon: () => <Icon type="FontAwesome" name="coffee" />
    }
  }
);

export default CoffeeTab;
