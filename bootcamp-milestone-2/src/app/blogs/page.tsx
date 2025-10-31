import React from "react";
import style from "/page.module.css";
import BlogPreview from '@/components/blogPreview';
import type { Blog } from "@/app/blogData"

const blogs: Blog[] = [
  {
    title: "Taking A Peek",
    date: "09/22/2011",
    description: "I had to get a closer look",
    image: "takingAPeek.jpg",
    imageAlt: "venturing deeply",
    slug: "taking-a-peek"
  },
  {
    title: "At The Game",
    date: "07/30/2012",
    description: "Enjoying some baseball during a fine evening",
    image: "atTheGame.jpg",
    imageAlt: "posing for the camera",
    slug: "at-the-game"
  }
];

export default function Blogs(){
    return(
        <main>
            {blogs.map((blog) => (
            <BlogPreview
                // Prevents Error
                key={blog.slug}
                // These are the props we are passing in
                title={blog.title}
                date={blog.date}
                description={blog.description}
                image={blog.image}
                imageAlt = {blog.imageAlt}
                slug={blog.slug}
            /> // This is how we call the component
	        ))}
            <footer className = {"footer"}>© 2025 Lorinc's Website | All Rights Reserved</footer>
        </main>
    );
}