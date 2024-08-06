import styled from 'styled-components';


export const List = styled.ul`
  display: flex;
    flex-direction: column;
    gap: 12px;
    
`;

export const UserItem = styled.li`
    width: fit-content;
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    span {
        color: #999;
    }
`