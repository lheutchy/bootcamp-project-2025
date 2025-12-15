import React from 'react';
import Project from '@/database/projectSchema'
import style from './projectPreview.module.css';
import Image from "next/image";

export default function ProjectPreview(props: Project) {
  //Added to avoid error
  const src = props.image.startsWith("/") ? props.image : `/images/${props.image}`;

  return (
    <div className={style.card}>
      <h3 className={style.title}>{props.title}</h3>

      <div className={style.imageWrapper}>
        <Image 
          src={src}
          alt="props.title"
          width={1200}
          height={800}
          sizes="100vw"
          className={style.image}
        />
	    </div>

      <p className={style.description}>{props.description}</p>
    </div>
  );
}