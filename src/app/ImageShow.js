"use client"
import { useState } from "react";

const ImageShow = () => {
  const [image, setImage] = useState("");
  const [isModalOpen,setIsModalOpen]=useState(false)

  const fetchImage = () => {
    fetch('https://picsum.photos/200/300')
      .then((response) => {
        setImage(response.url);
      })
      .catch((err) => console.error("hata", err));
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <button onClick={fetchImage}>Resim Ekle <span>👍</span></button>
      {image && <img src={image} alt="Random" />}
    </>
  );
}
export default ImageShow