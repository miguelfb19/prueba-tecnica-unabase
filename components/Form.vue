<script setup>
import { useProjectsStore } from "~/store/projects";

const formData = ref({
  name: "",
  executive: "",
  client: "",
  contact: "",
  bussinesType: "",
});

// const executives = await getExecutives();
// console.log(executives);
const store = useProjectsStore();

const onSubmit = async (e) => {
  e.preventDefault();

  store.addProject(formData.value);

  resetForm();
};

const resetForm = () => {
  formData.value = {
    name: "",
    executive: "",
    client: "",
    contact: "",
    bussinesType: "",
  };
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
      <FormInput
        label="ejecutivo"
        placeholder-prop="Buscar ejecutivo"
        :required-prop="true"
        v-model="formData.executive"
      />
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
        <Button type-prop="submit" />
      </div>
    </form>
  </div>
</template>
