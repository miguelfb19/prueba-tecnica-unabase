<template>
  <button class="btn2" :type="typeProp" @click="onClick">{{ text }}</button>
</template>

<script setup>
defineProps({
  text: { type: String, default: "Guardar" },
  typeProp: { type: String, default: "submit" },
  onClick: { type: Function },
});
</script>
