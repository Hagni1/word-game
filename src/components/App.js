import AppProvider from "../context/AppContext";
import Routing from "./Routing";
import { AppContainer } from "./styled/AppContainer.styled";
import { BrowserRouter as Router } from "react-router-dom";
const App = () => {
  return (
    <AppProvider>
      {/* <Router> */}
        <AppContainer>
          <Routing />
        </AppContainer>
      {/* </Router> */}
    </AppProvider>
  );
};

export default App;
