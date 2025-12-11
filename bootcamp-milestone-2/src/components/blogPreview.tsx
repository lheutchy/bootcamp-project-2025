import React from 'react';
import Blog from '@/database/blogSchema'
import style from './blogPreview.module.css';
import Image from "next/image";
import Link from "next/link";

export default function BlogPreview(props: Blog) {
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
				<p>{props.date.toDateString()}</p>
        <Link href={`/blogs/${props.slug}`}>
          Learn More
        </Link>
      </div>
	  </div>
  );
}