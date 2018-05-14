import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default () => (
  <div>
    <header>
      <div class="container">
        <div id="branding">
          <h1>
            <span class="hightlight">Simple</span> branding logo
          </h1>
        </div>
        <nav>
          <ul>
            <li class="current">
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to={`about`}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
      <section id="showcase">
        <div class="container">
          <h1>showcase title name</h1>
          <p>
            sowcase description sowcase description sowcase description sowcase
            description{" "}
          </p>
        </div>
      </section>
      <section id="newsletter">
        <div class="container">
          <h1> subscribe to our news leter </h1>
          <form>
            <input type="email" placeholder="enter email" />
            <button type="submit" class="button_1">
              Subscribe
            </button>
          </form>
        </div>
      </section>
      <section id="boxes">
        <div class="container">
          <figure class="box">
            <img src="./img/logo_html.png" />
            <h3>Html 5 markup </h3>
            <p> paragraph tagherere somet ext</p>
          </figure>
          <figure class="box">
            <img src="./img/logo_html.png" />
            <h3>ANGULAR 5 code</h3>
            <p> paragraph tagherere somet ext</p>
          </figure>
          <figure class="box">
            <img src="./img/logo_css.png" />
            <h3>CSS markup </h3>
            <p> paragraph tagherere somet ext</p>
          </figure>
        </div>
      </section>
    </main>
    <footer>web design copyright</footer>
  </div>
);
