<script setup>
import { useProjectsStore } from "~/store/projects";

const formData = ref({
  name: "",
  executive: "",
  client: "",
  contact: "",
  bussinesType: "",
});

const isEditing = ref(false);
const editingProject = ref(null);

const availableExecutivesData = await getExecutives();
const availableExecutivesNames = availableExecutivesData.map(
  (executive) => executive.data.legalName
);

const store = useProjectsStore();

const onSubmit = async (e) => {
  e.preventDefault();

  if (isEditing.value && editingProject.value !== null) {
    // Editar el proyecto
    store.projects[editingProject.value] = formData.value;
    isEditing.value = false;
    editingIndex.value = null;
  } else {
    // Agregar nuevo proyecto
    store.addProject(formData.value);
  }

  resetForm();
};

const editProject = (project, index) => {
  formData.value = { ...project };
  isEditing.value = true;
  editingIndex.value = index;
};

const resetForm = () => {
  formData.value = {
    name: "",
    executive: "",
    client: "",
    contact: "",
    bussinesType: "",
  };
  isEditing.value = false;
  editingIndex.value = null;
};
</script>

<template>
  <div>
    <form id="form" class="form" @submit.prevent="onSubmit">
      <span class="form-note"
        >Los campos marcados con <strong>*</strong> son obligatorios</span
      >
      <FormInput
        label="nombre"
        placeholder-prop="Ingrese nombre del proyecto"
        v-model="formData.name"
        :required-prop="true"
      />
      <div class="form-group">
        <label for="executive">Ejecutivo<strong style="color: red">*</strong></label>
        <select name="executive" id="executive" v-model="formData.executive">
          <option value="" selected disabled>Seleccione un ejecutivo</option>
          <option
            v-for="executive in availableExecutivesNames"
            :key="executive"
            :value="executive"
          >
            {{ executive }}
          </option>
        </select>
      </div>
      <FormInput
        label="cliente"
        placeholder-prop="Buscar cliente"
        v-model="formData.client"
      />
      <FormInput
        label="contacto"
        placeholder-prop="Buscar contacto"
        v-model="formData.contact"
      />
      <div class="form-group">
        <label for="tipo">Tipo<strong style="color: red">*</strong></label>
        <select name="tipo" id="tipo" v-model="formData.bussinesType" required>
          <option value="" disabled selected>Selecciona una opción...</option>
          <option value="cotizacion">Cotización</option>
          <option value="negocio">Negocio</option>
        </select>
      </div>
      <div class="btns-form">
        <ButtonOutline :on-delete="resetForm" />
        <Button
          type-prop="submit"
          :text="isEditing ? 'Actualizar' : 'Guardar'"
        />
      </div>
    </form>
  </div>
</template>
