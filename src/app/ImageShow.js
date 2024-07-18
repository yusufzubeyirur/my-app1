"use client";
import { useState } from "react";

const generateUUID = () => {
  return crypto.randomUUID();
};

const ImageShow = () => {
  const [images, setImages] = useState([]);
  const [iconSizes, setIconSizes] = useState({});

  const fetchImage = () => {
    fetch("https://picsum.photos/200/300")
      .then((response) => {
        setImages((preImages) => [
          ...preImages,
          {
            url: response.url,
            id: generateUUID(),
          },
        ]);
      })
      .catch((err) => console.log("hata", err));
  };
  const selectImage = (imageId) => {
    setIconSizes((preSizes) => ({
      ...preSizes,
      [imageId]: (preSizes[imageId] || 24) * 1.2,
    }));
  };
  return (
    <>
      <button onClick={fetchImage}>
        ResimEkle<span>👍</span>
      </button>
      {images.map((image) => (
        <div
          key={image.id}
          style={{
            position: "relative",
            margin: "10px",
            display: "inline-block",
          }}
        >
          <img
            key={image.id}
            src={image.url}
            alt={`Random ${image.id}`}
            style={{
              width: "200px",
              height: "300px",
              display: "block",
            }}
            onClick={() => selectImage(image.id)}
          />
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontSize: `${iconSizes[image.id] || 24}px`,
              transition: "font-size 0.3s ease",
            }}
          >
            👍
          </span>
        </div>
      ))}
    </>
  );
};
export default ImageShow;
