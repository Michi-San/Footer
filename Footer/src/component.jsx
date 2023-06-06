
import React, { useState, useEffect } from "react";

export default function Content() {
  const [offset, setOffset] = useState(0);

  function updateOffset() {
    const bottomOffset = Math.max(0, document.documentElement.scrollHeight - window.innerHeight - window.scrollY);
    setOffset(bottomOffset);
  }

  useEffect(() => {
    window.addEventListener("scroll", updateOffset);
    return () => {
      window.removeEventListener("scroll", updateOffset);
    };
  });

  window.onscroll = function () {
    if (offset < 20) {
      document.getElementById("text").style.color = "black";
    } else {
      document.getElementById("text").style.color = "transparent";
    }
  };

  return (
    <div style={{ marginTop: "50px" }}>
      <h1>{Array(200).fill("Lorem ipsum dolor sit amet, ").join("")}</h1>
      <p>Bottom Offset: {offset}</p>
      <div className="footer">
      <p style={{textAlign: "center"}} id="text">Impressum</p>
      </div>
    </div>
  );
  
}