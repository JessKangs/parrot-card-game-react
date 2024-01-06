import styled from "styled-components"
import parrot from "./img/front.png"

export default function ListCards (){
    return (
        <Deck>
            <Card>
                <img src={parrot} alt="parrot card"/>
            </Card>
        </Deck>
    )
}

const Deck = styled.div`
    display: flex;
    
`;

const Card = styled.div`
    height: 146px;
    width: 117px;
    background-color: #99CEA8;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 100px;
    }
`;