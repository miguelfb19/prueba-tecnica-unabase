<template>
  <button type="button" @click="viewStore" class="btn1 view-store">Ver Store</button>
</template>

<script setup>
import { useProjectsStore } from "@/store/projects";

const viewStore = () => {
    const store = useProjectsStore()
  alert(JSON.stringify(store.projects, null, 2));
};
</script>
