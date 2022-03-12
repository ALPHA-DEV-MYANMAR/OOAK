import Register from './components/Signup/Register.vue';
import Login from './components/Signup/Login.vue';

import Dashboard from './components/Dashboard/Dashboard.vue';
import CVS from './components/Dashboard/CVS.vue';
import TodayOrder from './components/Dashboard/TodayOrder.vue';
import YesterdayOrder from './components/Dashboard/YesterdayOrder.vue';
import ThisMonthOrder from './components/Dashboard/ThisMonthOrder.vue';
import LastMonthOrder from './components/Dashboard/LastMonthOrder.vue';
import ThisYearOrder from './components/Dashboard/ThisYearOrder.vue';
import LastYearOrder from './components/Dashboard/LastYearOrder.vue';

import AllCategory from './components/Category/Index.vue';
import AddCategory from './components/Category/Create.vue';

import EditCategory from './components/Category/CatEdit.vue';
import EditSubCategory from './components/Category/SubCatEdit.vue';

//unit
import AllUnit from './components/Unit/Index.vue';
import AddUnit from './components/Unit/Create.vue';
import EditUnit from './components/Unit/Edit.vue';
//sub_category
import AllSubCategory from './components/SubCategory/Index.vue';
import AddSubCategory from './components/SubCategory/Create.vue';
// import EditSubCategory from './components/SubCategory/Edit.vue';

//brand
import AllBrand from './components/Brand/Index.vue';
import AddBrand from './components/Brand/Create.vue';
import EditBrand from './components/Brand/Edit.vue';
//aval_size
import AllAvalSize from './components/Aval_Size/Index.vue';
import AddAvalSize from './components/Aval_Size/Create.vue';
import EditAvalSize from './components/Aval_Size/Edit.vue';
//aval_color
import AllAvalColor from './components/Aval_Color/Index.vue';
import AddAvalColor from './components/Aval_Color/Create.vue';
import EditAvalColor from './components/Aval_Color/Edit.vue';
//aval_weight
import AllAvalWeight from './components/Aval_Weight/Index.vue';
import AddAvalWeight from './components/Aval_Weight/Create.vue';
import EditAvalWeight from './components/Aval_Weight/Edit.vue';
//aval_option
import AllAvalOption from './components/Aval_Option/Index.vue';
import AddAvalOption from './components/Aval_Option/Create.vue';
import EditAvalOption from './components/Aval_Option/Edit.vue';
//state
import AllState from './components/State/Index.vue';
import AddState from './components/State/Create.vue';
import EditState from './components/State/Edit.vue';
//customer
import AllCustomer from './components/Customer/Index.vue';
import AddCustomer from './components/Customer/Create.vue';
import EditCustomer from './components/Customer/Edit.vue';
import DetailsCustomer from './components/Customer/Detail.vue';
//goods
import AllGoods from './components/Goods/Index.vue';
import AddGoods from './components/Goods/Create.vue';
import EditGoods from './components/Goods/Edit.vue';
import DetailsGoods from './components/Goods/Details.vue';
import ExpireGoods from './components/Goods/ExpireGoods.vue';
import TrashGoods from './components/Goods/TrashGoods.vue';
import StockGoods from './components/Goods/StockGoods.vue';
import checkStock from './components/Goods/checkStock.vue';
import checkStock2 from './components/Goods/checkStock2.vue';

//prices
import AllPrice from './components/Price/Index.vue';
import AddPrice from './components/Price/Create.vue';
import EditPrice from './components/Price/Edit.vue';
//orders
import Order from './components/Order_Item/Index.vue';
import OrderCreate from './components/Order_Item/Create.vue';
import OrderInvoice from './components/Order_Item/Invoice.vue';
import OrderEdit from './components/Order_Item/Edit.vue';
// import OrderDetails from './components/Order_Item/Details.vue';
//order_status
import AllOrderStatus from './components/Order_Status/Index.vue';
import AddOrderStatus from './components/Order_Status/Create.vue';
import EditOrderStatus from './components/Order_Status/Edit.vue';

import Home from './components/Home.vue';
// import Loading from './components/Loading.vue';
//promotion
import AllPromotion from './components/Promotion/Index.vue';
import AddPromotion from './components/Promotion/Create.vue';
import EditPromotion from './components/Promotion/Edit.vue';

//promo_code
import AllPromoCode from './components/Promo_Code/Index.vue';
import AddPromoCode from './components/Promo_Code/Create.vue';
import EditPromoCode from './components/Promo_Code/Edit.vue';
//deliver_agent
import AllDeliveryAgent from './components/Delivery_Agent/Index.vue';
import AddDeliveryAgent from './components/Delivery_Agent/Create.vue';
import EditDeliveryAgent from './components/Delivery_Agent/Edit.vue';
//delivery_time
import AllDeliveryTime from './components/Delivery_Time/Index.vue';
import AddDeliveryTime from './components/Delivery_Time/Create.vue';
import EditDeliveryTime from './components/Delivery_Time/Edit.vue';
//payment_method
import AllPaymentMethod from './components/Payment_Method/Index.vue';
import AddPaymentMethod from './components/Payment_Method/Create.vue';
import EditPaymentMethod from './components/Payment_Method/Edit.vue';

//extra_charge
import AllExtraCharge from './components/Cod/Index.vue';
import EditExtraCharge from './components/Cod/Edit.vue';

export const routes = [
    {
        name: 'Home',
        path: '/',
        component: Dashboard
    },
    {
        name: 'CVS',
        path: '/admin/cvs',
        component: CVS
    },
    //register 
    {
        name: 'Register',
        path: '/admin/register',
        component: Register
    },
    //login 
    {
        name: 'Login',
        path: '/admin/login',
        component: Login
    },
    //category
    {
        name: 'category/index',
        path: '/admin/category',
        component: AllCategory
    },
    {
        name: 'category/add',
        path: '/admin/category/create',
        component: AddCategory
    },
    {
        name: 'category/edit',
        path: '/admin/category/edit/:id',
        component: EditCategory
    },
    {
        name: 'sub_category/edit',
        path: '/admin/sub_category/edit/:id',
        component: EditSubCategory
    },
     //sub_category
     {
        name: 'sub_category/index',
        path: '/admin/sub_category',
        component: AllSubCategory
    },
    {
        name: 'sub_category/add',
        path: '/admin/sub_category/create',
        component: AddSubCategory
    },
    // {
    //     name: 'sub_category/edit',
    //     path: '/admin/sub_category/edit/:id',
    //     component: EditSubCategory
    // },
    //unit
    {
        name: 'unit/index',
        path: '/admin/unit',
        component: AllUnit
    },
    {
        name: 'unit/add',
        path: '/admin/unit/create',
        component: AddUnit
    },
    {
        name: 'unit/edit',
        path: '/admin/unit/edit/:id',
        component: EditUnit
    },
    //sub-category
    {
        name: 'sub-category-home',
        path: '/admin/sub-category',
        component: AllSubCategory
    },
    {
        name: 'sub-category-add',
        path: '/admin/sub-category/create',
        component: AddSubCategory
    },
    //brand
    {
        name: 'brand/index',
        path: '/admin/brand',
        component: AllBrand
    },
    {
        name: 'brand/add',
        path: '/admin/brand/create',
        component: AddBrand
    },
    {
        name: 'brand/edit',
        path: '/admin/brand/edit/:id',
        component: EditBrand
    },
    //aval_sizes
    {
        name: 'aval_size/index',
        path: '/admin/aval_size',
        component: AllAvalSize
    },
    {
        name: 'aval_size/add',
        path: '/admin/aval_size/create',
        component: AddAvalSize
    },
    {
        name: 'aval_size/edit',
        path: '/admin/aval_size/edit/:id',
        component: EditAvalSize
    },
    //aval_colors
    {
        name: 'aval_color/index',
        path: '/admin/aval_color',
        component: AllAvalColor
    },
    {
        name: 'aval_color/add',
        path: '/admin/aval_color/create',
        component: AddAvalColor
    },
    {
        name: 'aval_color/edit',
        path: '/admin/aval_color/edit/:id',
        component: EditAvalColor
    },
    //aval_weights
    {
        name: 'aval_weight/index',
        path: '/admin/aval_weight',
        component: AllAvalWeight
    },
    {
        name: 'aval_weight/add',
        path: '/admin/aval_weight/create',
        component: AddAvalWeight
    },
    {
        name: 'aval_weight/edit',
        path: '/admin/aval_weight/edit/:id',
        component: EditAvalWeight
    },

    //aval_options
    {
        name: 'aval_option/index',
        path: '/admin/aval_option',
        component: AllAvalOption
    },
    {
        name: 'aval_option/add',
        path: '/admin/aval_option/create',
        component: AddAvalOption
    },
    {
        name: 'aval_option/edit',
        path: '/admin/aval_option/edit/:id',
        component: EditAvalOption
    },
    //state
    {
        name: 'state/index',
        path: '/admin/state',
        component: AllState
    },
    {
        name: 'state/add',
        path: '/admin/state/create',
        component: AddState
    },
    {
        name: 'state/edit',
        path: '/admin/state/edit/:id',
        component: EditState
    },
     //customer
     {
        name: 'customer/index',
        path: '/admin/customer',
        component: AllCustomer
    },
    {
        name: 'customer/add',
        path: '/admin/customer/create',
        component: AddCustomer
    },
    {
        name: 'customer/edit',
        path: '/admin/customer/edit/:id',
        component: EditCustomer
    },
    {
        name: 'customer/details',
        path: '/admin/customer/details/:id',
        component: DetailsCustomer
    },
    //good
    {
        name: 'goods/index',
        path: '/admin/goods',
        component: AllGoods
    },
    {
        name: 'goods/add',
        path: '/admin/goods/create',
        component: AddGoods
    },
    {
        name: 'goods/edit',
        path: '/admin/goods/edit/:id',
        component: EditGoods
    },
    {
        name: 'goods/details',
        path: '/admin/goods/details/:id',
        component: DetailsGoods
    },
    {
        name: 'goods/expire',
        path: '/admin/expire_goods',
        component: ExpireGoods
    },
    {
        name: 'goods/trash',
        path: '/admin/trash_goods',
        component: TrashGoods
    },
    {
        name: 'goods/stock',
        path: '/admin/stock_goods',
        component: StockGoods
    },
    {
        name: 'goods/checkStock',
        path: '/admin/checkStock',
        component: checkStock
    },
    {
        name: 'goods/checkStock2',
        path: '/admin/checkStock2',
        component: checkStock2
    },  
    
    //price
    {
        name: 'price/index',
        path: '/admin/price',
        component: AllPrice
    },
    {
        name: 'price/add',
        path: '/admin/price/create',
        component: AddPrice
    },
    {
        name: 'price/edit',
        path: '/admin/price/edit/:id',
        component: EditPrice
    },
    //orders
    {
        name: 'order/index',
        path: '/admin/order',
        component: Order
    },
    {
        name: 'order/create',
        path: '/admin/order/create',
        component: OrderCreate
    },
    {
        name: 'order/edit',
        path: '/admin/order/edit/:id',
        component: OrderEdit
    },
    // {
    //     name: 'order/details',
    //     path: '/admin/order/details/:id',
    //     component: OrderDetails
    // },
    {
        name:'order/add/item',
        path: '/admin/order/add/item/:id',
        component: OrderCreate
    },
    {
        name:'order/invoice',
        path: '/admin/order/invoice/:id',
        component: OrderInvoice
    },
    
    //order_status
    {
        name: 'order_status/index',
        path: '/admin/order_status',
        component: AllOrderStatus
    },
    {
        name: 'order_status/add',
        path: '/admin/order_status/create',
        component: AddOrderStatus
    },
    {
        name: 'order_status/edit',
        path: '/admin/order_status/edit/:id',
        component: EditOrderStatus
    },
    //promotion
    {
        name: 'promotion/index',
        path: '/admin/promotion',
        component: AllPromotion
    },
    {
        name: 'promotion/add',
        path: '/admin/promotion/create',
        component: AddPromotion
    },
    {
        name: 'promotion/edit',
        path: '/admin/promotion/edit/:id',
        component: EditPromotion
    },
    //promo_code
    {
        name: 'promo_code/index',
        path: '/admin/promo_code',
        component: AllPromoCode
    },
    {
        name: 'promo_code/add',
        path: '/admin/promo_code/create',
        component: AddPromoCode
    },
    {
        name: 'promo_code/edit',
        path: '/admin/promo_code/edit/:id',
        component: EditPromoCode
    },
    //delivery_agent
    {
        name: 'delivery_agent/index',
        path: '/admin/delivery_agent',
        component: AllDeliveryAgent
    },
    {
        name: 'delivery_agent/add',
        path: '/admin/delivery_agent/create',
        component: AddDeliveryAgent
    },
    {
        name: 'delivery_agent/edit',
        path: '/admin/delivery_agent/edit/:id',
        component: EditDeliveryAgent
    },
     //delivery_time
     {
        name: 'deliver_accept_times/index',
        path: '/admin/deliver_accept_times',
        component: AllDeliveryTime
    },
    {
        name: 'deliver_accept_times/add',
        path: '/admin/deliver_accept_times/create',
        component: AddDeliveryTime
    },
    {
        name: 'deliver_accept_times/edit',
        path: '/admin/deliver_accept_times/edit/:id',
        component: EditDeliveryTime
    },
    //payment_method
    {
        name: 'payment_method/index',
        path: '/admin/payment_method',
        component: AllPaymentMethod
    },
    {
        name: 'payment_method/add',
        path: '/admin/payment_method/create',
        component: AddPaymentMethod
    },
    {
        name: 'payment_method/edit',
        path: '/admin/payment_method/edit/:id',
        component: EditPaymentMethod
    },
    //today order
    {
        name: 'dashboard',
        path: '/admin/dashboard',
        component: Dashboard
        
    },
    {
        name: 'dashboard/today_order',
        path: '/admin/today_order',
        component: TodayOrder
        
    },
    {
        name: 'dashboard/yesterday_order',
        path: '/admin/yesterday_order',
        component: YesterdayOrder
        
    },
    {
        name: 'dashboard/this_month_order',
        path: '/admin/this_month_order',
        component: ThisMonthOrder
        
    },
    {
        name: 'dashboard/last_month_order',
        path: '/admin/last_month_order',
        component: LastMonthOrder
        
    },
    {
        name: 'dashboard/this_year_order',
        path: '/admin/this_year_order',
        component: ThisYearOrder
        
    },
    {
        name: 'dashboard/last_year_order',
        path: '/admin/last_year_order',
        component: LastYearOrder
        
    },
    //extra_charge
    {
        name: 'extra_charge/index',
        path: '/admin/extra_charge',
        component: AllExtraCharge
    },
    {
        name: 'extra_charge/edit',
        path: '/admin/extra_charge/edit/:id',
        component: EditExtraCharge
    },
    
   


];