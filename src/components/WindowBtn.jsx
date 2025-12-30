import React from "react";

export const WindowBtn = ({ onClick, windowBtnMsg, disabled }) => {
  const base =
    "w-full mt-3 px-4 py-2 rounded-md border text-sm font-semibold shadow-sm transition select-none";

  const enabled =
    "bg-blue-600 text-white border-blue-700 hover:brightness-105 active:scale-[0.99] cursor-pointer";

  const locked =
    "bg-gray-200 text-gray-500 border-gray-300 cursor-not-allowed opacity-80";

  return (
    <button
      type="button"
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${base} ${disabled ? locked : enabled}`}
    >
      {windowBtnMsg}
    </button>
  );
};
