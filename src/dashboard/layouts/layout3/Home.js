import React, { Component } from "react";
import "./styles.css";

export default () => {
  //pexels.com
  return (
    <div id="container">
      <header id="showcase" className="grid">
        <div className="splash-logo" />
        <h1>Welcome to our travel site</h1>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe sint
          eligendi possimus? Unde officiis magnam laborum ipsa distinctio odio,
          vero dolores
        </div>
        <a href="javascript:void(0)" className="btn link">
          Read More
        </a>
      </header>
      <main id="main">
        <section id="section-a" className="grid">
          <div className="cards">
            <div className="card">
              <img
                src="https://images.pexels.com/photos/135157/pexels-photo-135157.jpeg"
                className="card-image"
              />
              <div className="card-title">card title</div>
              <div className="card-description">card description</div>
            </div>
            <div className="card">
              <img
                src="https://images.pexels.com/photos/40023/aurora-northern-lights-aurora-borealis-borealis-40023.jpeg"
                className="card-image"
              />
              <div className="card-title">card title</div>
              <div className="card-description">card description</div>
            </div>
            <div className="card">
              <img
                src="https://images.pexels.com/photos/38444/sculpture-naked-bosom-breasts-38444.jpeg"
                className="card-image"
              />
              <div className="card-title">card title</div>
              <div className="card-description">card description</div>
            </div>
          </div>
        </section>
        <section id="section-b" className="grid">
          <h1> Util links</h1>
          <div className="util">
            <div className="column">
              column1column1column1co as asda lumn1column1column1column1
            </div>
            <div className="column">
              sdada ad ads sad ada d ad a sdad as da d asdas da
            </div>
          </div>
        </section>
        <footer>
          <p>footer content</p>
        </footer>
      </main>
    </div>
  );
};
