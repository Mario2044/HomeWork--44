import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

const AlbumList = () => {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?userId=${userId}`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.log(error));
  }, [userId]);

  const handlePhotoClick = (albumId) => {
    console.log(`Clicked on album with id: ${albumId}`);
    navigate(`/albums/${albumId}/photos`);
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