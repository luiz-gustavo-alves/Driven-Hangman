import styled from "styled-components";

export const InputContainer = styled.div`

    padding-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    h2 {
        font-size: 20px;
    }

    form {
        display: flex;
        gap: 15px;
    }

    @media (max-width: 800px) {

        flex-direction: column;

        form {
            flex-direction: column;
            align-items: center;
        }
    }
`;

export const InputContent = styled.input`

    padding: 8px;
    width: 350px;
    height: 40px;
    font-size: 18px;
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: all 0.25s;

    border: 1px solid ${props => props.disabled ? "#4F779E" : "#D3D3D3"};
    background: ${props => props.disabled ? "#ACB1B6" : "#FFFFFF"};
    cursor: ${props => props.disabled ? "not-allowed" : "auto"};

    &:hover {
        background: ${props => props.disabled ? "#99A3AD" : "#FFFFFF"};
    }

    @media (max-width: 800px) {
        width: 280px;
    }
`;

export const SubmitContent = styled.button`

    width: 90px;
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