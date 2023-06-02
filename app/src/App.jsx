import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserList from './component/Album/Album';
import AlbumList from './component/Photo/Photo';
import PhotoList from './component/UsersList/UsersList';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>} />
        <Route path="/users/:userId/albums" element={<AlbumList/>} />
        <Route path="/albums/:albumId/photos" element={<PhotoList/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
