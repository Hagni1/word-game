import { useState } from "react";
import '../styles/Game.scss'
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { Button } from "./styled/Button.styled";
import { useNavigate } from "react-router-dom";
const Game = () => {
  const navigate = useNavigate();
  const { gameData, setScore, score } = useContext(AppContext)
  const [goodAnswers,setGoodAnswers]=useState([...gameData.good_words])
  const [showAnswer,setShowAnswer]=useState(false)
  const [objGameData, setObjGameData] = useState(gameData.all_words.map(item => JSON.parse(`{ "text": "${item}","selected":"false", "good":${gameData.good_words.indexOf(item) !== -1? "true": "false"}}`)))
  
  const handleSelect = (item) => {
    const newGameData = [...objGameData]
    const selectedItemId = newGameData.indexOf(item.item)
    newGameData[selectedItemId].selected = true
    setObjGameData(newGameData)
        if (item.item.good) {
          setScore(score + 2)
          setGoodAnswers(goodAnswers.filter(el=> el!==item.item.text))
    } else { setScore(score - 1) }
  }

  const handleMoveToFinal = () => {
    console.log('here')
    setScore(score-goodAnswers.length)
    navigate('/final')  
  }

  
  return (
    <>
      <h1>{gameData.question}</h1>
      <div className='gameContainer'  >
        {objGameData.map((item) => (
          <div className={`gameItem ${item.selected===true? (showAnswer && item.good? 'active good':(showAnswer? "active bad": "active")):''}`} key={item.text} onClick={()=>{!showAnswer&&item.selected==="false" && handleSelect({item})}}>{item.text}</div>
        ))}
      </div>
      <Button onClick={()=> showAnswer? handleMoveToFinal() :setShowAnswer(true)}> {showAnswer? "finish game ":"check answers"} </Button>
    </>
  );
};

export default Game;
