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
            <li>
              <Link to={`home`}>Home</Link>
            </li>
            <li class="current">
              <Link to={`about`}>About</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
    <main>
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

      <section id="main">
        <div class="container">
          <article id="main-col">
            <h1 class="page-title">About Us</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
              Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus eget
              porta in, lacinia et magna. Nam eget eros non orci consectetur
              congue at ac augue. Proin eget arcu in enim feugiat ultricies.
              Curabitur maximus metus nec metus pretium viverra at et orci.
              Integer hendrerit ante ut placerat cursus.
            </p>
            <p class="dark">
              Aliquam eget pharetra diam. Nulla placerat lorem at turpis tempor,
              vel ultrices dui tincidunt. Proin quis egestas lorem. Mauris
              vehicula lectus odio, sit amet dictum justo feugiat a. Praesent id
              dictum lacus. Sed ullamcorper id erat ut dictum. Fusce porttitor
              lorem sapien, in aliquet sapien convallis et. Donec nec mauris
              nulla. Curabitur cursus semper odio, et hendrerit ante. Nunc at
              cursus ante. Maecenas gravida ligula ut efficitur suscipit. Nulla
              id turpis varius, pretium nunc sed, fermentum sem. Sed lacinia
              nunc non interdum pellentesque.
            </p>
          </article>

          <aside id="sidebar">
            <div class="dark">
              <h3>What We Do</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                varius auctor lacus nec feugiat. Phasellus sit amet ex ipsum.
                Praesent pharetra tincidunt tempor. Etiam velit eros, dapibus
                eget porta in, lacinia et magna
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
    <footer>web design copyright</footer>
  </div>
);
