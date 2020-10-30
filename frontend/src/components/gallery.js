import React, { useState } from "react";

const getYoutubeId = url => {
  // A more comprehensive regex, but that doesn't seem to work quite right.
  // Hope to revisit in future.
  // const regex = /\b(?:https?:\/\/)?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)\/(?:(?:\??v=?i?=?\/?)|watch\?vi?=|watch\?.*?&v=|embed\/|)([A-Z0-9_-]{11})/gim;

  const regex = /(?<=\?v=)([a-zA-Z0-9_-]){11}/gim;
  const matches = url.match(regex);
  if (matches) return matches[0];
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
            src={`https://www.youtube-nocookie.com/embed/${getYoutubeId(
              url
            )}?showinfo=0&rel=1&color=white&autoplay=1&modestbranding=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={description}
          ></iframe>
        )}
      </div>
      <div className="image-description">{description}</div>
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
