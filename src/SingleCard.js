import styled, { keyframes } from "styled-components"
import parrot from "./img/front.png"

export default function SingleCard ({ card, handleChoice, flipped }){
    
    const handleClick = () => {
        handleChoice(card)
     
    }

    return (
     
        <Card flipped={flipped}>
                <img 
                        className="back" 
                        onClick={handleClick} 
                        src={parrot} 
                        alt="parrot card"
                        />
                
                    <img 
                        className="front"
                        onClick={handleClick}  
                        src={card.src} 
                        alt="parrot card"
                        />   
        </Card>
      
    )
}

const flipFront = keyframes`
    from {
        transform: rotateY(90deg);
    }

    to {
        transform: rotateY(0deg);
    }
`;


const Card = styled.div`
    height: 146px;
    width: 117px;
    background-color: #99CEA8;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    position: relative;
    animation: ${(props) => props.flipped ? flipFront : ''} 1s ease-in;

    img {
        height: 100px;
        position: absolute;
    }

    .front {
      animation: ${(props) => props.flipped ? flipFront : ''} 1s ease-in;
      transform: ${(props) => props.flipped ? '' : 'rotateY(90deg)'};
    
    }

    .back {
 
      transform: ${(props) => props.flipped ? 'rotateY(90deg)' : ''};
    
    }

    
`;
