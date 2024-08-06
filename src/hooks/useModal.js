import { useState } from 'react';

export const useModal = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const openModal = (user) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  return {
    selectedUser,
    isModalOpen: !!selectedUser,
    openModal,
    closeModal,
  };
};
