import styled from "styled-components";


 export const Button=styled.button`
min-width: 220px;
color: white;
padding: 10px 18px;
background-color:black;
border-radius: 5px;
border: 1px solid transparent;
font-size: 16px;

&:hover{
    background-color:white;
    color: black;
    transition: 0.3s background ease-in;
    border: 1px solid black;
}
`;

export const OutlineButton=styled(Button)`
background-color: white;
border: 1px solid black;
color: black;

&:hover{
    background-color:black;
    color: white;
    border: 1px solid transparent;
}


`;