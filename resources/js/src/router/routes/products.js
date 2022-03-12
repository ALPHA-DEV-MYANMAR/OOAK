export default [
  {
    path: '/products',
    name: 'products',
    component: () => import('@/views/apps/goods/products/ProductsList.vue'),
  },
  {
    path: '/products/edit/:id',
    name: 'products-edit',
    component: () => import('@/views/apps/goods/products/ProductsEdit.vue'),
  },
  {
    path: '/products/category',
    name: 'products-category',
    component: () => import('@/views/apps/goods/category/CategoryList.vue'),
  },
  {
    path: '/products/category/edit/:id',
    name: 'category-edit',
    component: () => import('@/views/apps/goods/category/CategoryEdit.vue'),
  },
  {
    path: '/products/brand',
    name: 'products-brand',
    component: () => import('@/views/apps/goods/brand/BrandList.vue'),
  },
  {
    path: '/products/brand/edit/:id',
    name: 'products-brand-edit',
    component: () => import('@/views/apps/goods/brand/BrandEdit.vue'),
  },
  {
    path: '/products/unit',
    name: 'products-unit',
    component: () => import('@/views/apps/goods/unit/UnitList.vue'),
  },
  {
    path: '/products/unit/edit/:id',
    name: 'products-unit-edit',
    component: () => import('@/views/apps/goods/unit/UnitEdit.vue'),
  },
  {
    path: '/products/size',
    name: 'products-size',
    component: () => import('@/views/apps/goods/size/SizeList.vue'),
  },
  {
    path: '/products/size/edit/:id',
    name: 'products-size-edit',
    component: () => import('@/views/apps/goods/size/EditSize.vue'),
  },
  {
    path: '/products/color',
    name: 'products-color',
    component: () => import('@/views/apps/goods/color/ColorList.vue'),
  },
  {
    path: '/products/color/edit/:id',
    name: 'products-color-edit',
    component: () => import('@/views/apps/goods/color/EditColor.vue'),
  },
  {
    path: '/products/weight',
    name: 'products-weight',
    component: () => import('@/views/apps/goods/weight/WekghtList.vue'),
  },
  {
    path: '/products/weight/edit/:id',
    name: 'products-weight-edit',
    component: () => import('@/views/apps/goods/weight/EditWeight.vue'),
  },
  {
    path: '/products/option',
    name: 'products-option',
    component: () => import('@/views/apps/goods/option/OptionList.vue'),
  },
  {
    path: '/products/option/edit/:id',
    name: 'products-option-edit',
    component: () => import('@/views/apps/goods/option/EditOption.vue'),
  },


  

]
