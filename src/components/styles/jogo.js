import styled from "styled-components";

export const HangmanContent = styled.div`

    margin: 0 auto;
    padding: 80px;
    display: flex;
    justify-content: space-between;
    position: relative;

    img {
        width: 400px;
        height: 400px;
    }

    button {
        width: 225px;
        height: 60px;
        background: #27AE60;
        border: none;
        border-radius: 8px;
        color: #FFFFFF;
        font-weight: 700;
        font-size: 20px;
        position: absolute;
        right: 5%;
        cursor: pointer;
    }

    @media (max-width: 800px) {

        padding-bottom: 160px;
        justify-content: center;

        img {
            width: 300px;
            height: 300px;
        }

        button {
            bottom: 60px;
            left: auto;
            right: auto;
        }
    }
`;

export const GuessWord = styled.h1`

    font-size: 50px;
    font-weight: 700;
    letter-spacing: 10px;
    position: absolute;
    bottom: 10%;
    right: 5%;

    color: ${props => props.guessWordColor};

    @media (max-width: 800px) {

        font-size: 36px;
        bottom: 0;
        left: auto;
        right: auto;
    }
`;