import React from "react";

const FloatingButton = () => {
  const phoneNumber = import.meta.env.VITE_PHONE;
  return (
    <a
      href={`https://zalo.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-20 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-colors hover:bg-blue-700"
    >
      <span className="text-3xl">Zalo</span>
    </a>
  );
};

export default FloatingButton;
