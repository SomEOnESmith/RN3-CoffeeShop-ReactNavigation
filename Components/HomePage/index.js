import React from "react";
import { View } from "react-native";

// NativeBase Components
import { Container } from "native-base";

//Navigation
import AppContainer from "../../Navigations";
// Style
import styles from "./styles";

const HomePage = () => {
  return (
    <Container style={styles.transparent}>
      <View style={styles.overlay} />
      <AppContainer />
    </Container>
  );
};

export default HomePage;
