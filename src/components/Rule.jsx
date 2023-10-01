import styled from "styled-components"

function Rule()
{
    return(
        <Container>
            <h2>How to Play Dice Game?</h2>
            <div className="rules">
            <p>Select any number</p>
            <p>Click on dice image</p>
            <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
            <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </Container>
    )
}
export default Rule;

const Container=styled.div`
    max-width: 794px;
    max-height:208px ;
    background-color: #FBF1F1;
    padding: 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
