import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

export const UserItem = styled.li`
    max-width: 550px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border-radius: 15px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;

    &:hover,
    &:focus {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    span {
        display: none;
    }

    @media (min-width: 425px) {
        span {
            display: inline;
            color: #999;
        }
    }
`;