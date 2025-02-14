import type { Project } from "~/interfaces/project";

export const useFormStore = defineStore("formInputs", {
  state: () => ({
    formInputs: {
      id: "",
      name: "",
      executive: "",
      client: "",
      contact: "",
      bussinesType: "",
    } as Project,
  }),

  actions: {
    setValue(project: Project) {
      this.formInputs.id = project.id;
      this.formInputs.name = project.name;
      this.formInputs.executive = project.executive;
      this.formInputs.client = project.client;
      this.formInputs.contact = project.contact;
      this.formInputs.bussinesType = project.bussinesType;
    },
    reset() {
      this.formInputs.id = "";
      this.formInputs.name = "";
      this.formInputs.executive = "";
      this.formInputs.client = "";
      this.formInputs.contact = "";
      this.formInputs.bussinesType = "";
    },
  },
});
