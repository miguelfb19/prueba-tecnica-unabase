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
      <tr v-for="project in store.projects" :key="project.name">
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
          <Button text="Editar" type-prop="button" :on-click="() => editProject(project, index)"  />
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import Swal from "sweetalert2";
import { useProjectsStore } from "~/store/projects";

const store = useProjectsStore();

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
      store.removeProject(projectName);
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

// const editProject = () => {
//   alert("edit project");
// };
</script>
