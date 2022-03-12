<template>
  <div>
    <b-card no-body class="mb-0">
      <div class="m-2">
        <!-- Table Top -->
        <b-row>
          <!-- Search -->
          <b-col cols="12" md="12">
            <div class="d-flex align-items-center justify-content-end">
              <b-button variant="primary" @click="isAddNewUserSidebarActive = true">
                <span class="text-nowrap">Add Category</span>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th>Stock</th>
            <th scope="col">ViewCount</th>
            <th>Prices</th>
            <th>Weight</th>
            <th>Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>

          <tr v-for="c in goods" :key="c.id">
            <td>{{c.name}}</td>
            <td>{{c.category.name}}/{{c.category.parent_category.name}}</td>
            <td>{{c.total_stock}}</td>
            <td>{{c.view_count}}</td>
            <td><span v-for="price in c.prices" :key="price.id+'price'">
             
              <span v-if="price.expired != null" class="badge bg-info" >{{price.expired.ori_price}}</span> 
              <span v-else class="badge bg-info">Null</span>~ {{price.price}} <hr>

            </span></td>
            <td>   <span v-for="price in c.prices" :key="price.id+'weight'">
            <span  class="badge bg-info" >{{price.goods_weight}}</span> </span></td>
            <td>{{c.recommended_flag}} {{c.onshop_flag}}</td>
            
            <td>
            <b-button :to="{ name: 'products-brand-edit', params: { id: c.id } }" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"   > <feather-icon icon="EditIcon" /> </b-button>
            
            </td>
          </tr>
        </tbody>
      </table>
    </b-card>
  </div>
</template>

<script>
import store from "@/store";
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
} from "bootstrap-vue";
import NewProduct from "./NewProduct.vue";
export default {
  data() {
    return {
      goods: [],
    };
  },
  components: {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    NewProduct,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      this.$http.get("goods").then(function(q){
        self.goods = q.data.data.data;
        console.log(q.data);
      });
    },
  },
};
</script>
