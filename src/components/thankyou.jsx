import React from "react";
export default function Thankyou() {
  return (
    <div class="tq">
      <h1>thank you</h1>
      <button
        onClick={() => (window.location.href = window.location.origin)}
        className="play-again-btn bb bebas-neue-regular"
      >
        Play Again
      </button>
    </div>
  );
}
