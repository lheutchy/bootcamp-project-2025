import style from "/page.module.css";
import ProjectPreview from "@/components/projectPreview";
import connectDB from "@/database/db";
import Project from "@/database/projectSchema";

export default async function Projects() {
  const projects = await getProjects();
  return (
    <main>
      {projects &&
        projects.map((project) => (
          <ProjectPreview
            // Prevents Error
            key={project.title}
            // These are the props we are passing in
            title={project.title}
            description={project.description}
            image={project.image}
            image_alt={project.imageAlt}
            slug={project.slug}
          /> // This is how we call the component
        ))}
    </main>
  );
}

async function getProjects() {
  await connectDB(); // function from db.ts before

  try {
    // query for all blogs and sort by date
    const projects = await Project.find().sort({ title: -1 });
    // send a response as the blogs as the message
    return projects;
  } catch (err) {
    return null;
  }
}