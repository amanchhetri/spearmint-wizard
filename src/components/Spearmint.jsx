import React, { useState } from "react";
import dog from "../dog.gif";

function Spearmint() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
    angle: 0,
    flip: false,
  });

  const handleClick = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    // const angle = Math.atan2(y - position.y, x - position.x) * (180 / Math.PI);
    // const angle = (x > position.x) ? 0 : 180;
    const flip = x > position.x;
    setPosition({ x, y, flip });
  };

  return (
    <div className="container" onClick={handleClick}>
      <div className="text">Click on screen to move the wizard</div>
      <img
        src={dog}
        alt="Dog"
        className="dog"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scaleX(${
            position.flip ? -1 : 1
          })`,
        }}
      />
    </div>
  );
}

export default Spearmint;
