import styled from "styled-components"
import parrot from "./img/front.png"

export default function SingleCard ({ card, handleChoice }){
    
    const handleClick = () => {
        handleChoice(card)
        
    }

    return (
     
        <Card >
            <img 
                className="back" 
                onClick={handleClick} 
                src={parrot} 
                alt="parrot card"
                />
         
            {/* <img 
                className="front" 
                src={card.src} 
                alt="parrot card"
                /> */}
        </Card>
      
    )
}

const Card = styled.div`
    height: 146px;
    width: 117px;
    background-color: #99CEA8;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
   

    img {
        height: 100px;
        position: absolute;
    }
`;