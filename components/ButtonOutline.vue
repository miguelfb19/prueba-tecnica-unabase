<template>
  <button class="btn1" :type="typeProp" @click="onDelete">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: { type: String, default: "Cancelar" },
  typeProp: { type: String, default: "reset" },
  onDelete: { type: Function },
});
</script>
