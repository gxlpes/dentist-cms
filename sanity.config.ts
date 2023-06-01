import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "8oylheho",
  dataset: "dataset",
  title: "My Personal Website",
  apiVersion: "2023-05-04",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
