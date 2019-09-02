import React from "react";
import { Router, Scene } from "react-native-router-flux";
import Login from "../../screens/login";
import Main from "../../screens/main";
import NewUser from "../../screens/newUser";
import Questao01 from "../../screens/teste/questao01";
import Questao02 from "../../screens/teste/questao02";
import Questao03 from "../../screens/teste/questao03";
import Questao04 from "../../screens/teste/questao04";
import Resultado from "../../screens/resultados/resultadoTeste";

const Routes = () => (
  <Router
    tintColor="white"
    titleStyle={{ color: "white" }}
    navigationBarStyle={{ backgroundColor: "#5cddfe" }}
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
      <Scene key="questao01" component={Questao01} title="Questão 1" />
      <Scene key="questao02" component={Questao02} title="Questão 2" />
      <Scene key="questao03" component={Questao03} title="Questão 3" />
      <Scene key="questao04" component={Questao04} title="Questão 4" />
      <Scene key="resultado" navTransparent component={Resultado} />
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
