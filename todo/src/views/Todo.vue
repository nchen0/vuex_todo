<template>
  <li>{{task.name}}</li>
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
