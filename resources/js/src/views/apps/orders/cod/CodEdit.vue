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
            <th scope="col">Cod Charge</th>
            <th scope="col">Discount</th>
            <th scope="col">Reduce Amount</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr >
            <th scope="row">{{cod.id}}</th>
            <td>{{cod.cod_charge}}</td>
            <td>{{cod.delivery_discount_threshold}}</td>
          <td>{{cod.reduce_cod_charge}}</td>
            <td>
            <b-button :to="{ name: 'orders-cod-edit', params: { id: cod.id } }" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"   > <feather-icon icon="EditIcon" /> </b-button>
            
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
export default {
  data() {
    return {
      cod: [],
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
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      this.$http.get("extra_charge").then(function(q){
        self.cod = q.data.data;
      });
    },
  },
};
</script>
