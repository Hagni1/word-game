import { Route, Routes } from "react-router-dom";
import FinalPage from "./FinalPage";
import Game from "./Game";
import HomePage from "./HomePage";

const Routing = () => {
    return (
      <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/game" element={<Game />} />
            <Route path="/final" element={<FinalPage />} />
      </Routes>
    );
  };
 
export default Routing;