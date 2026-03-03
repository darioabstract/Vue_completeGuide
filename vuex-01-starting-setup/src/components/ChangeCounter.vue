<template>
  <button @click="addOne">Add 2</button>
</template>

<script>
export default {
  data() {},
  methods: {
    addOne() {
      this.$store.commit('increment');
    },
  },
};
</script>
