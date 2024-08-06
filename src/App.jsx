import { Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import FirstPage from 'pages/FirstPage/FirstPage';
import { AppWrapper } from './App.styled';

const test = import.meta.env.VITE_API_TEST;

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/first" element={<FirstPage />} />
        </Route>
      </Routes>
    </AppWrapper>
  );
}
export default App;
