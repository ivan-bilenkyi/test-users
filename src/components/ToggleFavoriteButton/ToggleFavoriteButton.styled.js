import styled from 'styled-components';

export const Button = styled.button`
    height: 30px;
    border-radius: 8px;
    border: 1px solid #333;
    background: transparent;
    transition: box-shadow 0.3s ease;

    &:hover,
    &:focus {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
`;
