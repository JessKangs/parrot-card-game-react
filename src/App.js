import styled from 'styled-components';
import SingleCard from './SingleCard';
import cardsImages from './cards';
import { useEffect, useState } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardsImages, ...cardsImages]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
    
  }

  useEffect(() => {

    if(choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if(card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })

        resetTurns()

      } else {
        setTimeout(resetTurns, 1500)
      }  
  }
  }, [choiceOne, choiceTwo])


  const resetTurns = () => {

    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <Content>
      <h1>PARROT CARD GAME</h1>
      <button onClick={shuffleCards}>New Game</button>
      <Deck>
        {  cards.map((card, i) => 
          (<SingleCard 
            handleChoice={handleChoice}
            card={card} 
            key={card.id}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            />))} 
      </Deck>
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 20px;

  h1 {
    color: #75B79E;
    font-size: 45px;
  }
`;

const Deck = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr ;
    grid-gap: 20px;
    margin-top: 20px;
`;

export default App;
