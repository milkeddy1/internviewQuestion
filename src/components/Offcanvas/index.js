import React from "react";
import "./style.css";

function Offcanvas({ open, data, sideName, img, numberOfList }) {
  let picture;
  if (img === undefined) {
    picture = "";
  } else {
    picture = img.map((item) => <img src={item} alt={sideName} />);
  }

  let offCancasInfo;

  if (open) {
    offCancasInfo = (
      <div>
        <p>{sideName}</p>
        {picture}
        <p>{numberOfList ? data.length : ""}</p>
      </div>
    );
  } else {
    offCancasInfo = "";
  }

  return (
    <div className={open ? "offcanvas-active" : "offcanvas"}>
      {offCancasInfo}
    </div>
  );
}

export default Offcanvas;
