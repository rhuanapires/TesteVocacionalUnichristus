import React from "react";
import { Router, Scene, ActionConst } from "react-native-router-flux";
import Login from "../../screens/login";
import Main from "../../screens/main";
import NewUser from "../../screens/newUser";

const Routes = () => (
  <Router
    tintColor="white"
    titleStyle={{ color: "white" }}
    navigationBarStyle={{ backgroundColor: "#19BEF2" }}
  >
    <Scene
      sceneStyle={{ flex: 1 }}
      key="app"
      backTitle="Voltar"
      backButtonTextStyle={{ color: "white" }}
    >
      <Scene hideNavBar key="login" component={Login} title="Login" initial />
      <Scene hideNavBar key="main" component={Main} title="Main" />
      <Scene hideNavBar key="newUser" component={NewUser} title="newUser" />
      {/* <Scene
        key="cadastro"
        component={Cadastro}
        title="Cadastro"
      />
      <Scene
        key="conselheiro"
        component={Conselheiro}
        title="Principal"
      /> */}
    </Scene>
  </Router>
);

export default Routes;
