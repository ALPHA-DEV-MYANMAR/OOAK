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
                <span class="text-nowrap">Add Order</span>
              </b-button>
            </div>
          </b-col>
        </b-row>
      </div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in order_status" :key="c.id">
            <th scope="row">{{c.id}}</th>
            <td>{{c.name}}</td>
          
            <td>
            <b-button :to="{ name: 'orders-status-edit', params: { id: c.id } }" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"   > <feather-icon icon="EditIcon" /> </b-button>
            
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
import NewDeliAgent from "./NewDeliAgent.vue";
export default {
  data() {
    return {
      order_status: [],
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
    NewDeliAgent,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      this.$http.get("order_status").then(function(q){
        self.order_status = q.data.data;
        console.log(q.data.data);
      });
    },
  },
};
</script>
