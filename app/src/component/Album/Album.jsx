import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const AlbumList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  }, [userId]);

  const handlePhotoClick = (albumId) => {
    // Обработчик клика на кнопку "Photos"
    // Вставьте вашу логику обработки клика здесь
    console.log(`Clicked on album with id: ${albumId}`);
  };

  return (
    <div>
      <h1>Album List</h1>
      <Link to="/users">Back to User List</Link>
      <ul>
        {albums.map(album => (
          <li key={album.id}>
            {album.title}
            <button onClick={() => handlePhotoClick(album.id)}>Photos</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlbumList;