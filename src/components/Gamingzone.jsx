import { useState } from "react";
import styled from "styled-components"
import TotalScore from "./TotalScore";
import NumberSelector from "./NumberSelector";
import Diceroll from "./diceroll";
import Button from "./Buttons";
import Rule from "./Rule";
function Gamingzone(){
  const [score,setScore]=useState(0);
  const [currDice,setcurrDice]=useState(1);
  const [selectednumber, setselectednumber] = useState();
  const [error,seterror]=useState("");
  const [rules,setrules]=useState(false);
  const generaterandom=(min,max)=>{
    return Math.floor(Math.random() * (max - min) + min);
}
function rollDice()
{   if(!selectednumber)
    { seterror("number is not selected")
      return;
    }
    const number=generaterandom(1,7);
    //setting currdice value
    setcurrDice(number);
    //checking whether the dice number and selected number are same or not.
    if(number===selectednumber)
    {
      setScore((prev)=>prev+number);
    }else{
      setScore((prev)=>prev-2);
    }
    //freeing the selected number.
    setselectednumber(undefined);

}

const resetscore=()=>{
setScore(0);

}

const showrule=()=>{
setrules((prev)=>!prev);
}

return (
    <>
      <MainContainer>
       <div className="topSection">
        <TotalScore score={score}></TotalScore>
        <NumberSelector error={error} seterror={seterror} selectednumber={selectednumber}  setselectednumber={setselectednumber}></NumberSelector>
       </div>
       <div className="diceimg">
       <Diceroll currDice={currDice} rollDice={rollDice} ></Diceroll>

       </div>
       <div className="btn">
         <Button color="white" value="Reset Score" byClick={resetscore}></Button>
         <Button color="black" value={rules?"hide rules":"show rules"} byClick={showrule}></Button>
         {rules && <Rule/>}
       </div>
      </MainContainer>
    </>
)
}

export default Gamingzone;

const MainContainer=styled.main`
 padding:70px;
 .btn{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 25px;
  gap:24px;
 }
 .topSection{
  display:flex;
  justify-content: space-between;
 }
 
  
`