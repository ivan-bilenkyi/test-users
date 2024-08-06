import { List, UserItem } from './UserList.styled.js';
import { Modal } from '../Modal/Modal.jsx';
import { UserDetails } from '../UserDetails/UserDetails.jsx';
import { ToggleFavoriteButton } from '../ToggleFavoriteButton/ToggleFavoriteButton.jsx';
import { useModal } from '../../hooks/useModal';

export const UserList = ({ users, toggleFavorite, favoriteUsers }) => {
  const { selectedUser, isModalOpen, openModal, closeModal } = useModal();

  const isFavorite = (user) => {
    return favoriteUsers.some(favUser => favUser.id === user.id);
  };

  return (
    <>
      <List>
        {users?.map((user) => (
          <UserItem key={user.id} onClick={() => openModal(user)}>
            <p>{user.name} <br/> <span>{user.email}</span></p>
            <ToggleFavoriteButton onClick={toggleFavorite} isFavorite={isFavorite} user={user} />
          </UserItem>
        ))}
      </List>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedUser && <UserDetails user={selectedUser} />}
      </Modal>
    </>
  );
};
