<template>
  <div class="form-group">
    <label for="label"
      >{{ capitalizeWord(label)
      }}<span v-if="requiredProp" style="color: red">*</span></label
    >
    <input
      :id="label"
      :type="typeProp"
      :placeholder="placeholderProp"
      :value="modelValue"
      :required="requiredProp"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true },
  placeholderProp: { type: String, default: "" },
  typeProp: { type: String, default: "text" },
  requiredProp: { type: Boolean, default: false },
  modelValue: { type: String, default: "" },
});
</script>
