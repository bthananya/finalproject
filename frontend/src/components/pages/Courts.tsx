import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "../css/Sidebar";

const Courts = () => {

  return (
    <Sidebar>
      <div style={{margin: "20px"}}>
        <figure className="text-center">
          <blockquote className="blockquote text-">
            <h2 style={{color: "#ad1f4e"}}><strong>สนามแบดมินตัน</strong></h2>
          </blockquote>
          <figcaption className="blockquote-footer">
            ข้อมูลสนามแบดมินตัน
          </figcaption>
        </figure>
      </div>
      <div className="card" style={{ width: "18rem" , marginTop: "30px"}}>
        <img src="src/assets/logo/logo_black.png" className="card-img-top" alt="..." />
        <div className="card-body">
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </Sidebar>
  );
};

export default Courts;
