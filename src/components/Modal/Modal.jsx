import { useRef, useEffect } from 'react';
import { Backdrop, CloseButton, CloseButtonIcon, Content } from './Modal.styled.js';

export const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <Backdrop>
      <Content ref={modalRef}>
        <CloseButton onClick={onClose}>
          <CloseButtonIcon/>
        </CloseButton>
        {children}
      </Content>
    </Backdrop>
  );
};
