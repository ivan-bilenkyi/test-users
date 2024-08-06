import styled from 'styled-components';

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
`;

export const Content = styled.div`
    background: #fff;
    padding: 50px 30px 30px;
    border-radius: 15px;
    position: relative;
    max-width: 90vw;
    max-height: 90vh;
    height: auto;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 15px;
    right: 15px;
    background: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    border-radius: 50%;
    transition: background 0.3s, transform 0.3s;
    

    &:hover,
    &:focus {
        background: rgba(0, 0, 0, 0.05);
        transform: scale(1.1);
    }
`;

export const CloseButtonIcon = styled.span`
    display: block;
    width: 24px;
    height: 24px;
    position: relative;

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        width: 24px;
        height: 2px;
        border-radius: 2px;
        background: #000;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &::after {
        transform: translate(-50%, -50%) rotate(-45deg);
    }
    
    
`;
