/**
 * Defines a new type named `Blog` with six properties.
 *
 * @property {string} title - The blog's title.
 * @property {string} date - The blog's date.
 * @property {string} description - The blog's description.
 * @property {string} image - The vlog's image in a string format ex. "/.images/me.png"
 * @property {string} imageAlt - The vlog's imageAlt (description of the image)
 * @property {string} slug - The vlog's slug (URL name used to redirect to a specific page)
 */
type Blog = {
  title: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  slug: string;
};

/**
 * Declares an array named `blogs`.
 */
const blogs: Blog[] = [
  {
    title: "Taking A Peek",
    date: "??/??/20??",
    description: "I had to get a closer look",
    image: "takingAPeek.jpg",
    imageAlt: "venturing deeply",
    slug: "https://www.fortnite.com/?lang=en-US",
  },
  {
    title: "At The Game",
    date: "??/??/20??",
    description: "Enjoying some baseball during a fine evening",
    image: "atTheGame.jpg",
    imageAlt: "posing for the camera",
    slug: "https://www.slocounty.ca.gov/departments/human-resources/services/applicants/applying-for-county-employment",
  }
];

/**
 * Dynamically appends blogs to the webpage using DOM Manipulation.
 */
const blogContainer = document.getElementById("blog-container");
blogs.forEach((blog) =>{
    const title = document.createElement("h1");
    title.textContent = blog.title

    const image = document.createElement("img");
    image.src = blog.image;
    image.alt = blog.imageAlt;

    const date = document.createElement("p");
    date.textContent = blog.date;

    const description = document.createElement("p");
    description.textContent = blog.description;

    const slug = document.createElement("a");
    slug.href = blog.slug;
    slug.textContent = "Read About It Here"

    const blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");

    blogDiv.appendChild(title);
    blogDiv.appendChild(image);
    blogDiv.appendChild(date);
    blogDiv.appendChild(description);
    blogDiv.appendChild(slug);

    blogContainer?.appendChild(blogDiv);
});