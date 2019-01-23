<template>
  <div class="home">
    <h1>Todos</h1>
    <div v-for="todo in todos">
      <li>
        <router-link :to="{name: 'todocomp', params: {id: todo.id}}">{{todo.name}}</router-link>
      </li>
    </div>
    <form>
      <input v-bind:value="newInput" type="text" placeholder="Add Task" v-on:keyup="inputTask">
      <button v-on:click="submitTask">Add New Todo</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: "home",
  computed: {
    todos() {
      return this.$store.state.tasks;
    },
    newInput() {
      return this.$store.state.newInput;
    }
  },
  methods: {
    inputTask: function(event) {
      this.$store.commit("inputTask", event.target.value);
    },
    submitTask: function(event) {
      this.$store.commit("submitTask", event);
    }
  }
};
</script>
