import React, { useState } from "react";

import { Modal } from "../Modal/Modal";

export const Thumbnail = () => {
  const [open, setOpen] = useState(false);

  return (
    <article>
      <h1>Thumbnail</h1>
      <button
        onClick={() => {
          setOpen(true);
        }}
      >
        Open Modal
      </button>
      {open ? (
        <Modal setOpen={setOpen}>
          <p>More about me</p>
        </Modal>
      ) : null}
    </article>
  );
};
