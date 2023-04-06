<template>
  <label :for="label">{{label}}</label>
  <input :id="label" v-model="content" :type="type"/>
</template>

<script>
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
</script>

<style scoped>
  input {
    padding: 5px;
    border: 1px solid gray;
    border-radius: 15px;
  }

  input:hover{
    border: 1px solid var(--light-blue);
  }

  label{
    transform: translateY(15%);
    text-align: right;
    margin-right: 10px;
    font-weight: 500;
  }

  label:hover{
    cursor: pointer;
  }
</style>