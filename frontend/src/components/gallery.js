import React, { useState } from "react";

const getYoutubeId = url => {
  const regex =
    "(?im)\b(?:https?://)?(?:w{3}.)?youtu(?:be)?.(?:com|be)/(?:(?:??v=?i?=?/?)|watch?vi?=|watch?.*?&v=|embed/|)([A-Z0-9_-]{11})S*(?=s|$)";
  const matches = url.match(regex);
  if (matches) return matches[1];
};

const Gallery = ({ gallery }) => {
  const [currentItem, setCurrentItem] = useState(gallery[0]);

  const setItem = url => {
    return () => setCurrentItem(gallery.find(item => item.url === url));
  };

  const { type, url, description } = currentItem;
  return (
    <div className="gallery">
      <div className="current-item">
        {type === "image" ? (
          <img src={url} alt={description} />
        ) : (
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${getYoutubeId(url)}`}
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            title={description}
          ></iframe>
        )}
      </div>
      <ul>
        {gallery.map(item => (
          <li key={item.url} onClick={setItem(item.url)}>
            <img
              src={
                item.type === "image"
                  ? item.url
                  : `https://img.youtube.com/vi/${getYoutubeId(item.url)}/0.jpg`
              }
              alt={item.description}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
