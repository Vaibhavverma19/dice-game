import { useState } from "react";
import styled from "styled-components"
function Diceroll({currDice,rollDice})
{ 
   
    return(
        <>
        <Dice>
            <div className="image" onClick={()=>rollDice()}>
            <img src={`./images/dice_${currDice}.png`}></img>
            </div>
            <p>Click on Dice to roll</p>
        </Dice>
        </>
    )
}
export default Diceroll;
const Dice=styled.div`
   display: flex;
   margin-top: 48px;
   flex-direction: column;
    align-items: center;
    cursor: pointer;
`