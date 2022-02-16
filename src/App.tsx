import React, { useState } from "react";
import "./styles.css";

import mockData from "./mock"; // 請使用此資料
import Aside from "./components/Aside/index";
import Header from "./components/Header/index";
import MainContent from "./components/MainContent/index";
import Offcanvas from "./components/Offcanvas/index";

function App() {
  const [open, setOpen] = useState(false);
  const [sideName, setSideName] = useState("");
  const [numberOfList, setNumberOfList] = useState(true);
  const [img, setImg] = useState();
  mockData.length = 10;
  return (
    <div className="container">
      <Aside />
      <div className="right_container">
        <Header />
        <div className="main_container">
          <MainContent
            setSideName={setSideName}
            setNumberOfList={setNumberOfList}
            setImg={setImg}
            setOpen={setOpen}
            open={open}
            data={mockData}
          />
          <Offcanvas
            numberOfList={numberOfList}
            open={open}
            data={mockData}
            img={img}
            sideName={sideName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
