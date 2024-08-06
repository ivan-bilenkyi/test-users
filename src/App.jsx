import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import {AppLayout} from "./components/AppLayout.jsx";

const HomePage = lazy(() => import('./pages/HomePage.jsx'));

function App() {

  return (
    <Routes>
      <Route path="/" element={<AppLayout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
export default App;
