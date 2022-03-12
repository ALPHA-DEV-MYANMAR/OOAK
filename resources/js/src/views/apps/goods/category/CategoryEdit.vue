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
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">SubCategories</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in categories" :key="c.id">
            <th scope="row">{{c.id}}</th>
            <td>{{c.name}}</td>
            <td>
            <b-badge variant="light-warning" v-for="s in c.sub_categories" :key="s.id">{{s.name}}</b-badge>
            </td>
            
            <td>
            <a href="category/edit"><b-button v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"   > <feather-icon icon="EditIcon" /> </b-button></a>
            
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
import CategoryAddNew from "./NewCategory.vue";
export default {
  data() {
    return {
      categories: [],
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
    CategoryAddNew,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      this.$http.get("categories?sub_categories=yes").then(function(q){
        self.categories = q.data.data;
        console.log(q.data);
      });
    },
  },
};
</script>
