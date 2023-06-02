import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PhotoList = () => {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.log(error));
  }, [albumId]);

  return (
    <div>
      <h1>Photo List</h1>
      <Link to={`/albums/${albumId}`}>Back to Album</Link>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <img src={photo.thumbnailUrl} alt={photo.title} />
            <p>{photo.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;