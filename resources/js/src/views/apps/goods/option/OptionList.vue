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
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in options" :key="c.id">
            <th scope="row">{{c.id}}</th>
            <td>{{c.name}}</td>
            
            <td>
            <b-button :to="{ name: 'products-size-edit', params: { id: c.id } }" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"   > <feather-icon icon="EditIcon" /> </b-button>
            
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
import NewOption from "./NewOption.vue";
export default {
  data() {
    return {
      options: [],
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
    NewOption,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      this.$http.get("aval_options").then(function(q){
        self.options = q.data.data;
      });
    },
  },
};
</script>
