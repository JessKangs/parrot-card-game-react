import styled from 'styled-components';
import ListCards from './ListCards';

function App() {
  return (
    <Content>
      <h1>PARROT CARD GAME</h1>
      <ListCards />
    </Content>
  );
}

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    color: #75B79E;
    font-size: 45px;
  }
`;

export default App;
