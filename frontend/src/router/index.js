import Vue from 'vue';
import VueRouter from 'vue-router';
import NProgress from 'nprogress';

Vue.use(VueRouter);

const routes = [
  {
    path: '',
    name: 'home',
    component: () => import('../components/pages/HomeOficial/HomeComponent'),
  },
  {
    path: '/createPacient',
    name: 'create',
    component: () => import('../components/pages/Patient/create-patient/CreatePatientComponent'),
  },
  {
    path: '/list-patients',
    name: 'list',
    component: () => import('../components/pages/Patient/list-patient/ListPatientComponent'),
  },
  {
    path: '/edit-patient/:id',
    name: 'update',
    component: () => import('../components/pages/Patient/edit-patient/EditPatientComponent'),
  },
  {
    path: '/create-clients',
    name: 'createC',
    component: () => import('../components/pages/Client/create-client/CreateClientComponent'),
  },
  {
    path: '/list-clients',
    name: 'listC',
    component: () => import('../components/pages/Client/list-clients/ListClientComponent'),
  },
  {
    path: '/edit-client/:id',
    name: 'updateC',
    component: () => import('../components/pages/Client/edit-client/EditClientComponent'),
  },
  {
    path: '/sobre',
    name: 'sobre',
    component: () => import('../components/pages/Sobre/HomeComponentTeste'),
  },
  {
    path: '/atendimento',
    name: 'atende',
    component: () => import('../components/pages/Atendimento/AtendimentoComponent'),
  },
  {
    path: '/cadastroT',
    name: 'cadastro',
    component: () => import('../components/pages/TelaCadastro/CadastroComponent'),
  },
  
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    // Quando houver carregamento de uma página inicial, então usar o NProgress:
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  // Completando a animação da rota do NProgress
  NProgress.done();
});

export default router;
