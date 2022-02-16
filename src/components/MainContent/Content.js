import React from "react";
import "./style.css";

function Content({
  items,
  name,
  status,
  open,
  setOpen,
  setSideName,
  setImg,
  setNumberOfList
}) {
  return (
    <button
      disabled={status}
      className="content"
      onClick={(e) => {
        setSideName(name);
        setImg(items);
        setNumberOfList(false);
      }}
      onDoubleClick={(e) => {
        if (open === false) {
          setOpen(true);
        }
      }}
    >
      <p>Status : {status ? "True" : "False"}</p>
      <p>{name}</p>
    </button>
  );
}

export default Content;
