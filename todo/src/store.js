import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    tasks: [
      {
        name: "Walk dog",
        description: "Have to walk the dog today",
        completed: false,
        id: 1
      },
      {
        name: "Do Homework",
        description: "There is spanish homework today",
        completed: false,
        id: 2
      },
      {
        name: "Wash Dishes",
        description: "There are dishes you still have to wash, they've been sitting there for days",
        completed: false,
        id: 3
      }
    ],
    newInput: ""
  },
  mutations: {
    inputTask() {
      this.state.newInput = event.target.value;
    },
    submitTask() {
      event.preventDefault();
      this.state.tasks.push({
        name: this.state.newInput,
        description: "hello",
        completed: false,
        id: this.state.tasks.length + 1
      });
      this.state.newInput = "";
    }
  }
});
