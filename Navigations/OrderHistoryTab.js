import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { Icon } from "native-base";
import OrderHistory from "../Components/OrderHistory";
import CoffeeCart from "../Components/CoffeeCart";

const OrderHistoryTab = createStackNavigator(
  {
    Cart: CoffeeCart,
    OrderTab: OrderHistory
  },
  {
    navigationOptions: {
      tabBarLabel: "CoffeeCart",
      tabBarIcon: () => <Icon type="FontAwesome" name="shopping-cart" />
    }
  }
);

export default OrderHistoryTab;
