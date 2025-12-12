import React from 'react';
import Project from '@/database/projectSchema'
import style from './projectPreview.module.css';
import Image from "next/image";
import Link from "next/link";

export default function ProjectPreview(props: Project) {
  //Added to avoid error
  const src = props.image.startsWith("/") ? props.image : `/images/${props.image}`;
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
       <Image 
        src={src}
        alt="img"
        width={99999}
        height={99999}
        style={{ width: "100%", height: "auto", maxWidth: "500px" }}
      />
      <p>{props.description}</p>
      </div>
	  </div>
  );
}