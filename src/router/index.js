import { createRouter, createWebHistory } from 'vue-router'
import AllCoachesPage from '../views/coaches/AllCoachesPage.vue'
import AuthPage from '../views/AuthPage.vue'
import RequestsPage from '../views/requests/RequestsPage.vue'
import NotFoundPage from '../views/NotFoundPage.vue'
import CoachDetail from '../views/coaches/CoachDetail.vue'
import CoachContact from '../views/coaches/CoachContact.vue'
import CoachAddForm from '../views/coaches/CoachAddForm.vue'

const routes = [
  {
    path: '/', redirect: '/coaches'
  },
  {
    path: '/coaches',
    name: 'Coaches',
    component: AllCoachesPage,
    children: [
      {
        path: 'addnewcoach',
        name: 'AddCoachForm',
        component: CoachAddForm
      }
    ]
  },
  {
    path: '/coaches/:coachId',
    name: 'Coach',
    props: true,
    component: CoachDetail,
    children: [
      {
        path: 'contact',
        name: 'Coach',
        component: CoachContact
      }
    ]
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthPage
  },
  {
    path: '/requests',
    name: 'Requests',
    component: RequestsPage
  },
  {
    path: '/:notFound(.*)',
    component: NotFoundPage
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
