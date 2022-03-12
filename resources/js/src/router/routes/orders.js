export default [
  {
    path: '/orders',
    name: 'order-lists',
    component: () => import('@/views/apps/orders/order-lists/OrderList.vue'),
  },  
  {
    path: '/orders/edit/:id',
    name: 'orders-edit',
    component: () => import('@/views/apps/orders/order-lists/OrderEdit.vue'),
  },  
  {
    path: '/orders',
    name: 'order-lists',
    component: () => import('@/views/apps/orders/order-lists/OrderList.vue'),
  },  
  {
    path: '/orders/edit/:id',
    name: 'orders-edit',
    component: () => import('@/views/apps/orders/order-lists/OrderEdit.vue'),
  },  
  {
    path: '/orders/status',
    name: 'order-status-lists',
    component: () => import('@/views/apps/orders/order-status/OrderStatusList.vue'),
  },  
  {
    path: '/orders/status/edit/:id',
    name: 'orders-status-edit',
    component: () => import('@/views/apps/orders/order-status/OrderStatusEdit.vue'),
  },  
  {
    path: '/orders/agents',
    name: 'order-agents-lists',
    component: () => import('@/views/apps/orders/delivery_agent/DeliagentList.vue'),
  },  
  {
    path: '/orders/agents/edit/:id',
    name: 'orders-agents-edit',
    component: () => import('@/views/apps/orders/delivery_agent/DeliAgentEdit.vue'),
  }, 
  {
    path: '/orders/accept-time',
    name: 'order-accept-time-lists',
    component: () => import('@/views/apps/orders/accept-time/AcceptTimeList.vue'),
  },  
  {
    path: '/orders/accept-time/edit/:id',
    name: 'orders-accept-time-edit',
    component: () => import('@/views/apps/orders/accept-time/AcceptTimeEdit.vue'),
  }, 
  {
    path: '/orders/payment-method',
    name: 'order-payment-method-lists',
    component: () => import('@/views/apps/orders/payment-method/PaymentMethodList.vue'),
  },  
  {
    path: '/orders/payment-method/edit/:id',
    name: 'orders-payment-method-edit',
    component: () => import('@/views/apps/orders/payment-method/PaymentMethodEdit.vue'),
  }, 
  {
    path: '/orders/cod',
    name: 'order-cod-lists',
    component: () => import('@/views/apps/orders/cod/CodList.vue'),
  },  
  {
    path: '/orders/cod/edit',
    name: 'orders-cod-edit',
    component: () => import('@/views/apps/orders/cod/CodEdit.vue'),
  }, 
]
