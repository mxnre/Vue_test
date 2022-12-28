import { createRouter, createWebHistory } from "vue-router";
import AddFields from "../components/AddField/AddFields.vue";
import RenderFields from "../components/Render/RenderFields.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: {
        name: "edit",
      },
    },
    {
      path: "/edit",
      name: "edit",
      component: AddFields,
    },
    {
      path: "/render",
      name: "render",
      component: RenderFields,
    },
  ],
});

export default router;
