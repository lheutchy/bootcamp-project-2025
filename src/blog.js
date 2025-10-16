/**
 * Declares an array named `blogs`.
 */
var blogs = [
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
var blogContainer = document.getElementById("blog-container");
blogs.forEach(function (Blog) {
    var title = document.createElement("h2");
    title.textContent = Blog.title;
    var image = document.createElement("img");
    image.src = Blog.image;
    image.alt = Blog.imageAlt;
    image.style.width = "300px";
    image.style.height = "auto";
    var date = document.createElement("p");
    date.textContent = Blog.date;
    var description = document.createElement("p");
    description.textContent = Blog.description;
    var slug = document.createElement("a");
    slug.href = "blogs/".concat(Blog.slug, ".html");
    slug.textContent = "Read About It Here";
    var blogDiv = document.createElement("div");
    blogDiv.classList.add("blog-post");
    blogDiv.appendChild(title);
    blogDiv.appendChild(image);
    blogDiv.appendChild(date);
    blogDiv.appendChild(description);
    blogDiv.appendChild(slug);
    blogContainer === null || blogContainer === void 0 ? void 0 : blogContainer.appendChild(blogDiv);
});
