import React from "react";
import style from "./page.module.css";
import Link from "next/link";

export default function Portfolio() {
  return (
    <main>
      <h1>Portfolio</h1>
      <div className ="portfolio">
        <div className ="projects">
          <div className ="project-details">
            <h3 className ="project-name">
              Personal Website
            </h3>
            <p className="project-description">
              Created a personal wesbite using git and html displaying my resume and a way to contact me
            </p>
            <Link href="/">Learn More</Link>
          </div>
        </div>
      </div>
    </main>
  );
}