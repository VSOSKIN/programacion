"use client";
import { useState } from "react";

export default function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <button
      onClick={toggle}
      style={{
        padding: "10px 20px",
        background: isOn ? "green" : "gray",
        color: "white",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}
    >
      {isOn ? "Encendido" : "Apagado"}
    </button>
  );
}