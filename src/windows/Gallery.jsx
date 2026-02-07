import React from "react";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";

const HIMANSHU_IMAGES = [
  { name: "Himanshu.webp", imageUrl: "/images/Himanshu.webp" },
  { name: "Himanshu2.webp", imageUrl: "/images/Himanshu2.webp" },
  { name: "Himanshu3.jpg", imageUrl: "/images/Himanshu3.jpg" },
  { name: "Himanshu4.jpg", imageUrl: "/images/Himanshu4.jpg" },
  { name: "Himanshu5.jpg", imageUrl: "/images/Himanshu5.jpg" },
  { name: "Himanshu6.jpg", imageUrl: "/images/Himanshu6.jpg" },
];

const Gallery = () => {
  const { openWindow } = useWindowStore();

  const openImage = (image) => {
    openWindow("imgfile", image);
  };

  return (
    <>
      <div id="window-header">
        <WindowControls target="photos" />
        <h2>Gallery</h2>
      </div>

      <div className="gallery-grid">
        {HIMANSHU_IMAGES.map((image) => (
          <button
            key={image.name}
            type="button"
            className="gallery-card"
            onClick={() => openImage(image)}
          >
            <img src={image.imageUrl} alt={image.name} />
          </button>
        ))}
      </div>
    </>
  );
};

const GalleryWindow = windowWrapper(Gallery, "photos");

export default GalleryWindow;
