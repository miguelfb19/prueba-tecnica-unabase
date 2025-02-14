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
  },
});
