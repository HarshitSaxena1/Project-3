import { styled } from "styled-components";
import NumberSelector from "./NumberSelector";
import TotalScore from "./TotalScore";
import RoledDice from "./RoledDice";
import { useState } from "react"; 
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
const [showRules,setShowRules]=useState(false);
const [score,setScore]=useState(0);
const generateRandomNumber=(min,max)=> {
  return Math.floor (Math.random()* (max-min)+ min);
}
const resetScore=()=>{
  setScore(0);
}

const roleDice=()=>{
  const randomNumber=generateRandomNumber(1,7);
  setCurrentDice((prev=>randomNumber));

    if(!selectedNumber) {
setError("You have not Selected Number");
      return;
    }
    setError("");

if(selectedNumber==randomNumber){
  setScore(prev=>prev+randomNumber);
}else{
  setScore(prev=>prev-2);
}


}


  const [selectedNumber,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");



  return (
    <MainContainer>
    <div className="top_section"> <TotalScore score={score} />
    <NumberSelector 

    error={error}
    selectedNumber={selectedNumber}
    setSelectedNumber={setSelectedNumber}
    />
    </div>
<RoledDice
currentDice={currentDice}
roleDice={roleDice} 
/>
<div className="btns">
<OutlineButton
onClick={resetScore}>Reset</OutlineButton>
<Button 
onClick={()=> setShowRules(prev=>!prev)}>{showRules ? "Hide": "Show"} Rules</Button>
</div>

{showRules && <Rules />}
    </MainContainer>
   
  )
}

export default GamePlay;


const MainContainer=styled.div`

padding-top:72px;

.top_section{
  display: flex;
  justify-content: space-around;
  align-items: end;
}

.btns{
margin-top: 40px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
}

`;