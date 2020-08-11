import React from "react";
import Button from "../components/Button";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <header>
        <h1>Buttons</h1>
      </header>
      <section className="contents">
        <div className="container">
          <div className="item">
            <p> &lt;Button /&gt;</p>
            <Button />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <p> &lt;Button variant="outline" /&gt;</p>
            <Button variant="outline" color="primary" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <p> &lt;Button variant="text" /&gt;</p>
            <Button variant="text" color="primary" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <p> &lt;Button disableShadow /&gt;</p>
            <Button disableShadow color="primary" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <p> &lt;Button disabled /&gt;</p>
            <Button disabled innerText="Disabled" />
          </div>
          <div className="item">
            <p> &lt;Button variant="text" disabled /&gt;</p>
            <Button variant="text" disabled innerText="Disabled" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <p> &lt;Button startIcon="local_grocery_store" /&gt;</p>
            <Button startIcon="local_grocery_store" color="primary" />
          </div>
          <div className="item">
            <p> &lt;Button endIcon="local_grocery_store" /&gt;</p>
            <Button endIcon="local_grocery_store" color="primary" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <p> &lt;Button size="sm" /&gt;</p>
            <Button size="sm" color="primary" />
          </div>
          <div className="item">
            <p> &lt;Button size="md" /&gt;</p>
            <Button size="md" color="primary" />
          </div>
          <div className="item">
            <p> &lt;Button size="lg" /&gt;</p>
            <Button size="lg" color="primary" />
          </div>
        </div>
        <div className="container">
          <div className="item">
            <p> &lt;Button color="default" /&gt;</p>
            <Button color="default" />
          </div>
          <div className="item">
            <p> &lt;Button color="primary" /&gt;</p>
            <Button color="primary" />
          </div>
          <div className="item">
            <p> &lt;Button color="secondary" /&gt;</p>
            <Button color="secondary" />
          </div>
          <div className="item">
            <p> &lt;Button color="danger" /&gt;</p>
            <Button color="danger" />
          </div>
        </div>
      </section>
      <footer>
        <div class="attribution">
          <a href="https://github.com/yisu-kim/dev-challenges/tree/master/button-component">
            yisu-kim
          </a>
          <span> @ </span>
          <a href="https://devchallenges.io/">DevChallenges.io</a>
        </div>
      </footer>
    </div>
  );
}

export default Home;
