<template>
  <div>
    <h1>{{task.name}}</h1>
    <li>{{task.description}}</li>
    <li>completed: {{task.completed}}</li>
    <router-link to="/">Go Back</router-link>
  </div>
</template>

<script>
export default {
  name: "todocomp",
  created: function() {
    this.task = this.$store.state.tasks[this.$route.params.id - 1];
  }
};
</script>

<style>
</style>
