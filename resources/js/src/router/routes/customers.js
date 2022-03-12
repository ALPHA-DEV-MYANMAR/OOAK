export default [
  {
    path: '/customers',
    name: 'customers',
    component: () => import('@/views/apps/customers/CustomerList.vue'),
  },  
  {
    path: '/customers/edit/:id',
    name: 'customers-edit',
    component: () => import('@/views/apps/customers/CustomerEdit.vue'),
  },  
  {
    path: '/states',
    name: 'states',
    component: () => import('@/views/apps/state/StateList.vue'),
  },  
  {
    path: '/states/edit/:id',
    name: 'states-edit',
    component: () => import('@/views/apps/state/StateEdit.vue'),
  },  
]
