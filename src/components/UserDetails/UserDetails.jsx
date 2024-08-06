import { DetailsItem, DetailsList, Title, Wrapper } from './UserDetails.styled.js';

export const UserDetails = ({ user }) => {
  return (
    <Wrapper>
      <Title>{user.name}</Title>
      <DetailsList>
        <DetailsItem>
          <span>Username:</span> {user.username}
        </DetailsItem>
        <DetailsItem>
          <span>Email:</span>
          <a href={`mailto:${user.email}`}>
            {user.email}
          </a>
        </DetailsItem>
        <DetailsItem>
          <span>Phone:</span>
          <a href={`tel:${user.phone}`}>
            {user.phone}
          </a>
        </DetailsItem>
        <DetailsItem>
          <span>Website:</span>
          <a href={`http://${user.website}`} target="_blank" rel="noopener noreferrer">
            {user.website}
          </a>
        </DetailsItem>
      </DetailsList>
    </Wrapper>
  );
};
