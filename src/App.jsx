import { useState } from "react";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import AddProjectForm from "./components/AddProjectForm";
import SearchBar from "./components/SearchBar";

function App() {
  // 🟢 PROJECT STATE
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website", description: "React project" },
    { id: 2, title: "E-commerce App", description: "Online store" },
    { id: 3, title: "Blog Platform", description: "Content system" },
  ]);

  // 🔍 SEARCH STATE
  const [search, setSearch] = useState("");

  // ➕ ADD PROJECT FUNCTION
  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now() }]);
  };

  // 🔍 FILTER PROJECTS
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <Header />

      <SearchBar search={search} setSearch={setSearch} />

      <AddProjectForm addProject={addProject} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;