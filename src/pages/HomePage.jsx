import { useEffect, useState } from 'react';
import axios from 'axios';
import { UserList } from '../components/UserList/UserList.jsx';
import { UserFavorites } from '../components/Favorites/UserFavorites.jsx';
import { SearchInput } from '../components/SearchBar/SearchBar.jsx';
import toast from 'react-hot-toast';
import { Section } from './HomePage.styled.js';
import { Container } from '../components/AppLayout.styled.js';

const HomePage = () => {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [userFavorites, setUserFavorites] = useState(() => JSON.parse(localStorage.getItem('favoriteUsers')) || []);

    // const BASE_URL = import.meta.env.VITE_BASE_URL;
    const BASE_URL = "https://jsonplaceholder.typicode.com/users";

    useEffect(() => {
        const getAllUsers = async () => {
            try {
                const { data } = await axios(BASE_URL);
                setUsers(data);
                setFilteredUsers(data);
            } catch (e) {
                console.error(e);
            }
        };
        getAllUsers();
    }, [BASE_URL]);

    useEffect(() => {
        localStorage.setItem('favoriteUsers', JSON.stringify(userFavorites));
    }, [userFavorites]);

    const handleToggleFavorite = (event, user) => {
        event.stopPropagation();

        const isFavorite = userFavorites.some(favUser => favUser.id === user.id);

        let updatedFavorites;

        if (isFavorite) {
            updatedFavorites = userFavorites.filter(favUser => favUser.id !== user.id);
            toast.success(`${user.name} has been removed from favorites`);
        } else {
            updatedFavorites = [...userFavorites, user];
            toast.success(`${user.name} has been added to favorites`);
        }

        setUserFavorites(updatedFavorites);
    };

    const handleSearch = (query) => {
        if (query) {
            const lowercasedQuery = query.toLowerCase();
            const filtered = users.filter(user =>
              user.name.toLowerCase().includes(lowercasedQuery)
            );

            setFilteredUsers(filtered);

            if (filtered.length === 0) {
                setFilteredUsers([]);
            }
        } else {
            setFilteredUsers(users);
        }
    };

    return (
        <Section>
            <Container>
                <h1>All Users</h1>
                <SearchInput onSearch={handleSearch} />
                {filteredUsers.length > 0 ? (
                  <UserList users={filteredUsers} toggleFavorite={handleToggleFavorite} favoriteUsers={userFavorites} />
                ) : (
                  <p>No users found</p>
                )}
                <UserFavorites users={userFavorites} />
            </Container>
        </Section>
    );
};

export default HomePage;
