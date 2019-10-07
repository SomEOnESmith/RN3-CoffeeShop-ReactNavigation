import React from "react";
import { Container, Body, List, ListItem, Text } from "native-base";

const OrderHistory = () => {
  return (
    <Container>
      <Body>
        <List>
          <ListItem>
            <Text>burrito x3 : price 4.000KD</Text>
          </ListItem>
          <ListItem>
            <Text>Banana x2 : price 0.200KD</Text>
          </ListItem>
        </List>
      </Body>
    </Container>
  );
};

export default OrderHistory;
