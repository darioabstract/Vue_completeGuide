<template>
  <active-user :username="user.name" :userage="user.age"></active-user>
  <user-data @set-data="setUserData"></user-data>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: "Dario Milani",
        age: 41,
      },
    };
  },
  methods: {
    setUserData(name, age) {
      this.user = {
        name: name,
        age: age,
      };
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}
section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
