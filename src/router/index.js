import { createWebHistory, createRouter } from 'vue-router'

import Form from '../components/Form.vue'
import Dataset from '../components/Dataset.vue'

const routes = [
    { path: '/', name: 'Home', component: Form },
    { path: '/form', name: 'Form', component: Form },
    { path: '/dataset', name: 'Dataset', component: Dataset }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router