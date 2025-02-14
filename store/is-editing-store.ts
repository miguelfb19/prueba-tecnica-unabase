export const useEditingStore = defineStore("isEditing", {
  state: () => ({
    isEditing: false,
  }),
  actions: {
    setFalse() {
      this.isEditing = false;
    },
    setTrue() {
      this.isEditing = true;
    },
  },
});
