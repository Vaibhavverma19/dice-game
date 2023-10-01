import styled from "styled-components";
export const Button = styled.button`
width:220px;
background-color:black;
padding: 10px 18px;
color: white;
font-size: 16px;
border: 2px solid transparent;
cursor: pointer;
transition: 4s  ease-out;
&:hover{
    background-color: white;
    color: black;
    border: 2px solid black;
    font-weight: bolder;
    transition: 3s  ease-out;
}
`