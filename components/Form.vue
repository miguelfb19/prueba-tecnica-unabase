<script setup>
import { useFormStore } from "~/store/form-inputs";
import { useEditingStore } from "~/store/is-editing-store";
import { useProjectsStore } from "~/store/projects";

const formStore = useFormStore();
const editingStore = useEditingStore();

const availableExecutivesData = await getExecutives();
const availableExecutivesNames = availableExecutivesData.map(
  (executive) => executive.data.legalName
);

const projectStore = useProjectsStore();

const onSubmit = async (e) => {
  e.preventDefault();

  if (editingStore.isEditing && formStore.formInputs.name !== "") {
    // Editar el proyecto
    projectStore.editProject(formStore.formInputs);
    editingStore.setFalse()
    resetForm();
  } else {
    // Agregar nuevo proyecto
    projectStore.addProject(formStore.formInputs);
    resetForm();
  }
};

const resetForm = () => {
  formStore.reset()
  editingStore.setFalse()
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
        v-model="formStore.formInputs.name"
        :required-prop="true"
      />
      <div class="form-group">
        <label for="executive"
          >Ejecutivo<strong style="color: red">*</strong></label
        >
        <select name="executive" id="executive" v-model="formStore.formInputs.executive">
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
        v-model="formStore.formInputs.client"
      />
      <FormInput
        label="contacto"
        placeholder-prop="Buscar contacto"
        v-model="formStore.formInputs.contact"
      />
      <div class="form-group">
        <label for="tipo">Tipo<strong style="color: red">*</strong></label>
        <select name="tipo" id="tipo" v-model="formStore.formInputs.bussinesType" required>
          <option value="" disabled selected>Selecciona una opción...</option>
          <option value="cotizacion">Cotización</option>
          <option value="negocio">Negocio</option>
        </select>
      </div>
      <div class="btns-form">
        <ButtonOutline :on-delete="resetForm" />
        <Button
          type-prop="submit"
          :text="editingStore.isEditing ? 'Actualizar' : 'Guardar'"
        />
      </div>
    </form>
  </div>
</template>
