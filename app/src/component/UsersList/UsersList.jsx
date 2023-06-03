import React, { useEffect, useState } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  const handleAlbumClick = (id) => {
    setIsLoading(true);
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleAlbumClick(user.id)}>Album</button>
          </li>
        ))}
      </ul>

      {isLoading ? (
        <p>Loading albums...</p>
      ) : (
        <ul>
          {albums.map(album => (
            <li key={album.id}>{album.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
