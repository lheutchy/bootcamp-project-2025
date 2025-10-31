import React from "react";
import style from "./page.module.css";

export default function Home() {
  return (
    <>
      <main>
        <section className={style.about}>
          <h1 className={style.aboutTitle}>Hello World! This is my personal website.</h1>
          <div className={style.aboutimg}>
            <img
              src="/images/photoOfSelf3.jpg"
              alt="Photo of myself"
            />
          </div>
          <div className={style.aboutText}>
            <p>
              Hi, my name is Lorinc Heutchy and I am from Redmond, Washington.
              I am a first year computer science major. Outside of coding I like to
              watch and play sports, ski, and hike. A fun fact about me is I have
              been to 10 MLB stadiums.
            </p>
          </div>
        </section>
      </main>
      <footer className = {"footer"}>© 2025 Lorinc's Website | All Rights Reserved</footer>
    </>
  );
}
