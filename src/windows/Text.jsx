import React from "react";
import windowWrapper from "#hoc/windowWrapper";
import useWindowStore from "#store/window";
import { WindowControls } from "#components";

const Text = () => {
  const { windows } = useWindowStore();
  const data = windows.txtfile?.data;

  if (!data) return null;

  const imageSrc = data.imageUrl || data.image;

  return (
    <>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{data.name}</h2>
      </div>

      <div className="p-6 space-y-4">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={data.name}
            className="w-full max-w-md rounded-lg"
          />
        )}

        {data.subtitle && (
          <h3 className="text-lg font-semibold">{data.subtitle}</h3>
        )}

        {Array.isArray(data.description) &&
          data.description.map((paragraph, index) => (
            <p key={index} className="text-sm text-gray-700 leading-relaxed">
              {paragraph}
            </p>
          ))}
      </div>
    </>
  );
};

const TextWindow = windowWrapper(Text, "txtfile");

export default TextWindow;
