import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default () => {
  return (
    <div className="container">
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <div>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to versions of Lorem Ipsum.
      </div>
      <div>Lorem Ipsum is simply</div>
      <div>Lorem Ipsum is simply</div>
      <div class="nested">
        <div>div1</div>
        <div>div2</div>
        <div>div3</div>
        <div>div4</div>
        <div>div5</div>
      </div>
    </div>
  );
};
