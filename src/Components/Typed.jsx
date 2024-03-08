import React from "react";
import Typewriter from "typewriter-effect";

const Typed = () => {
  return (
    <div className="TypeEffect">
      <Typewriter
        options={{
          strings: ["Front-end Developer!", "MERN Stack Developer!"],
          autoStart: true,
          loop: true,
          delay: 60,
          deleteSpeed: 20,
        }}
      />
    </div>
  );
};

export default Typed;
