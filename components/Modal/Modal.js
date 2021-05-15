import React, { useState } from "react";

export const Modal = ({ children, setOpen }) => {
  return (
    <div>
      {children}
      <button
        onClick={() => {
          setOpen(false);
        }}
      >
        Close
      </button>
    </div>
  );
};
