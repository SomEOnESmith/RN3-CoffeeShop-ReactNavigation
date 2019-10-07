import React from "react";
import { observer } from "mobx-react";

// NativeBase Components
import { Text, List, Button } from "native-base";

// Component
import CartItem from "./CartItem";

//Data
import items from "../../data/items";

const CoffeeCart = props => {
  let cartItems;
  if (items) {
    cartItems = items.map(item => <CartItem item={item} key={item.id} />);
  }

  return (
    <List>
      {cartItems}
      <Button full danger onPress={() => props.navigation.navigate("OrderTab")}>
        <Text>Checkout</Text>
      </Button>
    </List>
  );
};

export default observer(CoffeeCart);
