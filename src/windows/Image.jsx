import React from "react";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";

const Image = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-6">
        <img
          src={data.imageUrl}
          alt={data.name}
          className="w-full max-w-2xl rounded-lg"
        />
      </div>
    </>
  );
};

const ImageWindow = windowWrapper(Image, "imgfile");

export default ImageWindow;
