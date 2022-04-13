import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Container } from "./styled/Container.styled";

const FinalPage = () => {
    const {nickName, score} = useContext(AppContext)
    return ( 
        <Container>
            <h1>Congratulation, {nickName}!</h1>
            <h3>Your score:</h3>
            <h3 style={{'color':'#6ba1d7'}}>{score} points</h3>
        </Container>
     );
}
 
export default FinalPage;