import styled from "styled-components";

export const Keyboard = styled.ul`

    padding: 40px 0;
    width: 650px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin: 0 auto;

    @media (max-width: 800px) {
        width: 80%;
    }
`;

export const Key = styled.button`

    width: 40px;
    height: 40px;
    font-weight: 700;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.25s;

    background: ${props => props.disabled ? "#A9AEB2" : "#E1ECF4"};
    border: 1px solid ${props => props.disabled ? "#4F779E" : "#7AA7C7"};
    color: ${props => props.disabled ? "#4F779E" : "#7AA7C7"};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};

    &:hover {
        background: ${props => props.disabled ? "#99A3AD" : "#E6EBEF"};
    }
`;