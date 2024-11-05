import React from "react";

export const Splash = () => {
  return (
    <div className="h-[50vh] w-full flex items-center justify-center mt-[20%] relative">
      <svg
        className="w-24 h-24"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer Rotating Circles */}
        <circle
          cx="50"
          cy="20"
          r="6"
          fill="#ff005d"
          className="animate-spin-slow origin-center"
          style={{ transformOrigin: "50px 50px" }}
        />
        <circle
          cx="20"
          cy="50"
          r="6"
          fill="#35ff99"
          className="animate-spin-slow origin-center"
          style={{ transformOrigin: "50px 50px", animationDelay: "0.1s" }}
        />
        <circle
          cx="50"
          cy="80"
          r="6"
          fill="#008597"
          className="animate-spin-slow origin-center"
          style={{ transformOrigin: "50px 50px", animationDelay: "0.2s" }}
        />
        <circle
          cx="80"
          cy="50"
          r="6"
          fill="#ffcc00"
          className="animate-spin-slow origin-center"
          style={{ transformOrigin: "50px 50px", animationDelay: "0.3s" }}
        />

        {/* Central Circle */}
        <circle cx="50" cy="50" r="8" fill="#4d407c" />
      </svg>
    </div>
  );
};
