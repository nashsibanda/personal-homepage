import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const getYoutubeId = url => {
  // A more comprehensive regex, but that doesn't seem to work quite right.
  // Hope to revisit in future.
  // const regex = /\b(?:https?:\/\/)?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)\/(?:(?:\??v=?i?=?\/?)|watch\?vi?=|watch\?.*?&v=|embed\/|)([A-Z0-9_-]{11})/gim;

  const regex = /(?!\?v=)(?=\b)([a-zA-Z0-9_-]){11}(?=[\W\D])/gim;
  const matches = `${url} `.match(regex);
  if (matches) return matches[0];
};

const Gallery = ({ gallery }) => {
  const [currentItem, setCurrentItem] = useState(gallery[0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = gallery.length > 5;

  const setItem = url => {
    return () => {
      setCurrentItem(gallery.find(item => item.url === url));
      setCurrentIndex(gallery.findIndex(item => item.url === url));
    };
  };

  const galleryCarouselItems = () => {
    const lowerIndex =
      currentIndex - 2 > 0
        ? currentIndex - 2
        : (gallery.length + (currentIndex - 2)) % gallery.length;
    const upperIndex = (currentIndex + 2) % gallery.length;
    const outputItems = carousel
      ? [
          gallery[lowerIndex],
          gallery[(lowerIndex + 1) % gallery.length],
          gallery[currentIndex],
          gallery[
            (upperIndex - 1 >= 0
              ? upperIndex - 1
              : gallery.length + (upperIndex - 1)) % gallery.length
          ],
          gallery[upperIndex],
        ]
      : gallery;

    return outputItems;
  };

  const { type, url, description } = currentItem;
  return (
    <div className="gallery">
      <div className="current-item">
        <div
          className="carousel-arrow left on-image"
          onClick={setItem(galleryCarouselItems()[1].url)}
        >
          <div></div>
        </div>
        <TransitionGroup className="image-container">
          <CSSTransition key={url} classNames="slide" timeout={1000}>
            {type === "image" ? (
              <img src={url} alt={description} />
            ) : (
              <iframe
                width="1280"
                height="720"
                src={`https://www.youtube-nocookie.com/embed/${getYoutubeId(
                  url
                )}?showinfo=0&rel=1&color=white&autoplay=1&modestbranding=1`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={description}
              ></iframe>
            )}
          </CSSTransition>
        </TransitionGroup>
        <div
          className="carousel-arrow right on-image"
          onClick={setItem(
            galleryCarouselItems()[galleryCarouselItems().length - 2].url
          )}
        >
          <div></div>
        </div>
      </div>
      <div className="image-description">{description}</div>
      <ul>
        {carousel && (
          <div
            className="carousel-arrow left"
            onClick={setItem(galleryCarouselItems()[1].url)}
          >
            <div></div>
          </div>
        )}
        {galleryCarouselItems().map((item, index) => (
          <li
            key={item.url}
            onClick={setItem(item.url)}
            className={
              index === 0
                ? "first"
                : index === galleryCarouselItems().length - 1
                ? "last"
                : ""
            }
          >
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
        {carousel && (
          <div
            className="carousel-arrow right"
            onClick={setItem(
              galleryCarouselItems()[galleryCarouselItems().length - 2].url
            )}
          >
            <div></div>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Gallery;
