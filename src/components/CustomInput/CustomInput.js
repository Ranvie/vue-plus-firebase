export default {
  props: {
    label: String,
    modelValue: String,
    type: String,
    placeholder: String
  },
  computed: {
    content: {
      get()
      {
        return this.modelValue
      },
      set(content)
      {
        this.$emit('update:modelValue', content);
      }
    }
  }
}