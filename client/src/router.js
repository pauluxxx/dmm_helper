import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home.vue";
import MethodCreation from "./components/MethodCreation.vue";
import Result from "./views/Result.vue";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: "/",
            component: Home,
            children: [
                {
                    path: "/data",
                    component: MethodCreation,
                },

            ]

        },
        {
            path: "/results",
            component: Result,
        },
        {
            path: "/about",
            name: "about",
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
                import(/* webpackChunkName: "about" */ "./views/About.vue")
        }
    ]
});
