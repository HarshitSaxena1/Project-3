import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
    <h2>How wannay play Games</h2>
    <div className="text"><p>Select any Number</p>
    <p>Click on Dice image</p>
    <p>If dice selected number is equal to dice number that u choose is shown on dice</p>

    <p>If u get a wrng guess than 2 points will be deducted</p>
    </div>
    </RulesContainer>
  )
}

export default Rules;
const RulesContainer=styled.div`

max-width: 800px;
margin: 0 auto;
margin-top: 40px;
border-radius: 10px;
background-color: #fbf1f1;
padding: 20px;
h2{
    font-size: 24px;
    font-weight: bold;

}
.text{
    margin-top: 24px;
}


`;