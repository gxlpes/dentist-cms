import { createClient, groq } from "next-sanity";

export async function getProjects() {
  const client = createClient({
    projectId: "8oylheho",
    dataset: "dataset",
    apiVersion: "2023-05-04",
  });

  client.fetch(
    groq`*[_type="project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset -> url
    }`
  );
}
