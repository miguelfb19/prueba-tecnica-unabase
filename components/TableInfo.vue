<template>
  <table class="table">
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Ejecutivo</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="project in projectStore.projects" :key="project.name">
        <td>{{ project.name }}</td>
        <td>
          <i class="pi pi-user icon" />
          {{ project.executive }}
        </td>
        <td class="btns-table">
          <ButtonOutline
            text="Borrar"
            type-prop="button"
            :on-delete="() => deleteProject(project.name)"
          />
          <Button
            text="Editar"
            type-prop="button"
            :on-click="() => editProject(project)"
          />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import Swal from "sweetalert2";
import { useFormStore } from "@/store/form-inputs";
import { useEditingStore } from "@/store/is-editing-store";
import { useProjectsStore } from "@/store/projects";

const projectStore = useProjectsStore();
const editingStore = useEditingStore();
const formStore = useFormStore();

const deleteProject = (projectName) => {
  Swal.fire({
    title: "¿Estás seguro que quieres borrar los datos?",
    showDenyButton: true,
    confirmButtonText: "Confirmar",
    confirmButtonColor: "#0077ff",
    denyButtonText: `Cancelar`,
    denyButtonColor: "red",
  }).then((result) => {
    if (result.isConfirmed) {
      projectStore.removeProject(projectName);
      Swal.fire({
        title: "Eliminado",
        confirmButtonText: "ok",
        confirmButtonColor: "#0077ff",
        icon: "success",
      });
    } else if (result.isDenied) {
      return;
    }
  });
};

const editProject = (project) => {
  console.log(project)
  editingStore.setTrue();
  formStore.setValue(project);
};
</script>
