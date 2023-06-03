import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import UserList from './component/UsersList/UsersList';
import PhotoList from './component/Photo/Photo';
import AlbumList from './component/Album/Album';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users/123/albums">User Albums</Link>
          </li>
          <li>
            <Link to="/albums/456/photos">Album Photos</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/users/:userId/albums" element={<AlbumList/>} />
        <Route path="/albums/:albumId/photos" element={<PhotoList/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
