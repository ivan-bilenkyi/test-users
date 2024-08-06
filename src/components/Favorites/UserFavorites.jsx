import { Modal } from '../Modal/Modal.jsx';
import { UserDetails } from '../UserDetails/UserDetails.jsx';
import { List, UserItem } from './UserFavorites.styled.js';
import { useModal } from '../../hooks/useModal.js';

export const UserFavorites = ({ users }) => {
  const { selectedUser, isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <h2>User Favorites</h2>
      <List>
        {users?.map((user) => (
          <UserItem key={user.id} onClick={() => openModal(user)}>
            <p>{user.name} <span>{user.email}</span></p>
          </UserItem>
        ))}
      </List>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {selectedUser && <UserDetails user={selectedUser} />}
      </Modal>
    </>
  );
};
