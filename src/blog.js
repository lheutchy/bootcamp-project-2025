"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Declares an array named `blogs`.
 */
const blogs = [
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
/**
 * Dynamically appends blogs to the webpage using DOM Manipulation.
 */
const blogContainer = document.getElementById("blog-container");
blogs.forEach((Blog) => {
    const title = document.createElement("h2");
    title.textContent = Blog.title;
    const image = document.createElement("img");
    image.src = Blog.image;
    image.alt = Blog.imageAlt;
    image.style.width = "300px";
    image.style.height = "auto";
    const date = document.createElement("p");
    date.textContent = Blog.date;
    const description = document.createElement("p");
    description.textContent = Blog.description;
    const slug = document.createElement("a");
    slug.href = `blogs/${Blog.slug}.html`;
    slug.textContent = "Read About It Here";
    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    blogDiv.appendChild(title);
    blogDiv.appendChild(image);
    blogDiv.appendChild(date);
    blogDiv.appendChild(description);
    blogDiv.appendChild(slug);
    blogContainer?.appendChild(blogDiv);
});
//# sourceMappingURL=blog.js.map