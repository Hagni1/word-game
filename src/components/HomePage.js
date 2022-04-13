import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "./styled/Button.styled";
import { Form } from "./styled/Form.styled";
import { Container } from "./styled/Container.styled";
import { Input } from "./styled/Input.styled";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const { nickName, setNickName } = useContext(AppContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nickName) {
      navigate('/game')      
    }
  };
  const handleInputChange = (e) => {
    setNickName(e.target.value);
    };
    
  return (
    <Container>
      <h1>Worldcloud game</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          value={nickName}
          type="text"
          onChange={handleInputChange}
          placeholder="Enter your nickname here..."
        />
        <Button>play</Button>
      </Form>
    </Container>
  );
};

export default HomePage;
