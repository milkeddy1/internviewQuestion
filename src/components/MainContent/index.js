import React from "react";
import "./style.css";
import Content from "./Content";
import { v4 } from "uuid";

function MainContent({
  setOpen,
  open,
  data,
  setSideName,
  setImg,
  setNumberOfList
}) {
  return (
    <div className="main_content">
      <div className="contents">
        {data.map((item, index) => {
          return (
            <Content
              key={v4()}
              setNumberOfList={setNumberOfList}
              setSideName={setSideName}
              setImg={setImg}
              setOpen={setOpen}
              open={open}
              {...item}
            />
          );
        })}
      </div>
      <button
        className="open"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? "close" : "open"}
      </button>
    </div>
  );
}

export default MainContent;
