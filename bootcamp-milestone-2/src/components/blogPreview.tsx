import React from 'react';
import { Blog } from "@/app/blogData";
import style from './blogPreview.module.css';
import Image from "next/image";

export default function BlogPreview(props: Blog) {
  //Added to avoid error
  const src = props.image.startsWith("/") ? props.image : `/images/${props.image}`;
  return (
    <div>
      <h3>{props.title}</h3>
      <div>
        <Image src={src} alt="img" width={500} height={500} />
        <p>{props.description}</p>
				<p>{props.date}</p>
      </div>
	  </div>
  );
}