import React from "react";
import styles from "./Home.module.scss";
import Input from "../components/Input";

function Home() {
  return (
    <div className={styles.Home}>
      <header>
        <h1>Inputs</h1>
      </header>
      <section className={styles.contents}>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input /&gt;</p>
            <Input placeholder="Placeholder" label="Label" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input error /&gt;</p>
            <Input error placeholder="Placeholder" label="Label" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input disabled /&gt;</p>
            <Input disabled placeholder="Placeholder" label="Label" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input helperText="Some interesting text" /&gt;</p>
            <Input
              helperText="Some interesting text"
              placeholder="Placeholder"
              label="Label"
            />
          </div>
          <div className={styles.item}>
            <p>&lt;Input helperText="Some interesting text" error /&gt;</p>
            <Input
              helperText="Some interesting text"
              error
              placeholder="Placeholder"
              label="Label"
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input startIcon /&gt;</p>
            <Input startIcon="call" placeholder="Placeholder" label="Label" />
          </div>
          <div className={styles.item}>
            <p>&lt;Input endIcon /&gt;</p>
            <Input endIcon="lock" placeholder="Placeholder" label="Label" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input value="text" /&gt;</p>
            <Input value="text" placeholder="Placeholder" label="Label" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input size="sm" /&gt;</p>
            <Input size="sm" placeholder="Placeholder" label="Label" />
          </div>
          <div className={styles.item}>
            <p>&lt;Input size="md" /&gt;</p>
            <Input size="md" placeholder="Placeholder" label="Label" />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input fullWidth /&gt;</p>
            <Input
              fullWidth
              value="text"
              placeholder="Placeholder"
              label="Label"
            />
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <p>&lt;Input multiline row="4" /&gt;</p>
            <Input row="4" placeholder="Placeholder" label="Label" />
          </div>
        </div>
      </section>
      <footer>
        <div className={styles.attribution}>
          <a href="https://github.com/yisu-kim/dev-challenges/tree/master/input-component">
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
