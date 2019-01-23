import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Todo from "./views/Todo.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/todo/:id",
      name: "todocomp",
      component: Todo
    }
  ]
});
