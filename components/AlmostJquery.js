import React, { useState } from "react";
import tw from "twin.macro";

const AlmostJquery = () => {
  const [bgColor, setBgColor] = useState("rgb(255,255,255)");

  const handleClick = e => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    setBgColor(`rgb(${r}, ${g}, ${b})`)
  }

  return <Button css={{ backgroundColor: bgColor }} onClick={handleClick}>Click to Change Me</Button>;
};

const Button = tw.button`block shadow-lg my-12 px-8 py-4`

export default AlmostJquery;
