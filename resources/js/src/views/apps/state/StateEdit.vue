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
                <span class="text-nowrap">Add State</span>
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
            <th scope="col">Min Price</th>
            <th scope="col">Delivery Charge</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in states" :key="c.id">
            <th scope="row">{{c.id}}</th>
            <td>{{c.name}}</td>
            <td>{{c.minimum}}</td>
            <td>{{c.cod_charge}}</td>
            
            <td>
            <b-button :to="{ name: 'states-edit', params: { id: c.id } }" v-ripple.400="'rgba(113, 102, 240, 0.15)'" variant="outline-primary"   > <feather-icon icon="EditIcon" /> </b-button>
            
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
import NewState from "./NewState.vue";
export default {
  data() {
    return {
      states: [],
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
    NewState,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      this.$http.get("states").then(function(q){
        self.states = q.data.data;
      });
    },
  },
};
</script>
