import { createAppContainer } from "react-navigation";
import StackNav from "./StackNav";

import BottomTab from "./BottomNav";

const AppContainer = createAppContainer(BottomTab);

export default AppContainer;
