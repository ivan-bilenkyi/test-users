import { Button } from './ToggleFavoriteButton.styled.js';

export const ToggleFavoriteButton = ({ onClick, isFavorite, user }) => {
  return (
    <Button onClick={(event) => onClick(event, user)}>
      {isFavorite(user) ? 'Remove from Favorite' : 'Add to Favorite'}
    </Button>
  );
};