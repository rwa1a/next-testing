import React, { useState } from "react";
import tw from "twin.macro";

const AlmostJquery = () => {
  const [bgColor, setBgColor] = useState("rgb(255,255,255)");

  const handleClick = async (e) => {
    const res = await fetch(`/api/getRandomColor`);
    const json = await res.json();
    setBgColor(json.color);
  };

  return (
    <Button css={{ backgroundColor: bgColor }} onClick={handleClick}>
      Click to Change Me
    </Button>
  );
};

const Button = tw.button`block shadow-lg my-12 px-8 py-4`;

export default AlmostJquery;
