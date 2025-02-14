import { defineStore } from "pinia";
import Swal from "sweetalert2";
import { type Project } from "@/interfaces/project";

export const useProjectsStore = defineStore("projects", {
  state: () => ({
    projects: [] as Project[],
  }),

  actions: {
    addProject(project: Project) {
      const existProject = this.projects.find(
        (p) => project.name.toLocaleLowerCase() === p.name.toLocaleLowerCase()
      );

      if (existProject) {
        Swal.fire({
          title: "Error",
          text: "El proyecto ya existe",
          icon: "error",
          confirmButtonColor: "#0077ff",
          confirmButtonText: "Aceptar",
        });
        return;
      }

      this.projects.push({
        id: `${Math.random().toString().split(".")[1]}`,
        name: project.name,
        executive: project.executive,
        client: project.client,
        contact: project.contact,
        bussinesType: project.bussinesType,
      });
    },

    removeProject(name: string) {
      this.projects = this.projects.filter((p) => p.name !== name);
    },

    editProject(project: Project) {
      const index = this.projects.findIndex((p) => p.id === project.id);

      console.log(project);
      console.log(index);

      if (index !== -1) {
        this.projects[index].name = project.name;
        this.projects[index].executive = project.executive;
        this.projects[index].client = project.client;
        this.projects[index].contact = project.contact;
        this.projects[index].bussinesType = project.bussinesType;
      } else {
        Swal.fire({
          title: "Error",
          text: "El proyecto no existe",
          icon: "error",
          confirmButtonColor: "#0077ff",
          confirmButtonText: "Aceptar",
        });
      }
    },
  },
});
