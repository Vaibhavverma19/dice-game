import { useState } from "react";
import styled from "styled-components";

function NumberSelector({error,seterror,selectednumber,setselectednumber}) {
  const arrnumber = [1, 2, 3, 4, 5, 6];
  
  function selectthisnumber(value) {
    setselectednumber(value);
    seterror("");
  }
  return (
    <>
      <Container>
        <div className="numbers">
          {arrnumber.map((value, i) => (
            <Box 
            isselected={value===selectednumber}
            key={i} 
            onClick={() => selectthisnumber(value)}>
              {value}
            </Box>
          ))}
        </div>
        <p>Select Number</p>
        <p className="error">{error}</p>
      </Container>
    </>
  );
}

export default NumberSelector;
const Container = styled.div`
   display: flex;
   flex-direction: column;
   align-items: end;
   gap:10px;
  .numbers {
    display: flex;
    gap: 24px;
  }
  p{
    font-weight: bolder;
  }
  .error{
    color: red;
  }
`;
const Box = styled.div`
  display: grid;
  place-items: center;
  height: 72px;
  width: 72px;
  cursor: pointer;
  background-color:${(props)=>(props.isselected?"black":"white")};
  border: 1px solid black;
  font-size: 24px;
  font-weight: bold;
  color:${(props)=>(!props.isselected?"black":"white")};;
`;
