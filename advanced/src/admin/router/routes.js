// import Vue from 'vue'
// import VueRouter from 'vue-router';
//
// Vue.use(VueRouter);
//
// import About from "../components/About";
// import Work from "../components/Work";
// import Reviews from "../components/Reviews";
// import Login from "../components/reg"

export default [
    {
        path: '/',
        component: () => import("../components/About"),
        meta: {
            title: 'Блок "Обо мне"'
        }
    },
    {
        path: '/work',
        component: () => import("../components/Work"),
        meta: {
            title: 'Блок "Работы"'
        }
    },
    {
        path: '/reviews',
        component: () => import("../components/Reviews"),
        meta: {
            title: 'Блок "Отзывы"'
        }
    },
    {
        path: '/login',
        component: () => import("../components/reg"),
        meta: {
            public: true
        }
    },
];

// export default new VueRouter({routes});