<template>
  <section>
    <form @submit.prevent="submitData">
      <input type="text" placeholder="your name" v-model="enteredName" />
      <input type="text" placeholder="your age" v-model="enteredAge" />
      <button @click="submitData">Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ["set-data"],
  data() {
    return {
      enteredName: "",
      enteredAge: "",
    };
  },
  methods: {
    submitData() {
      this.$emit("set-data", this.enteredName, this.enteredAge);
    },
  },
};
</script>
