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
                <span class="text-nowrap">Add Customer</span>
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
            <th scope="col">Points</th>
            <th scope="col">Email</th>
            <th scope="col">Gender</th>
            <th scope="col">Postal Code</th>
            <th scope="col">State</th>
            <th scope="col">Address</th>
            <th scope="col">Phone number</th>
            <th scope="col">Verify</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="c in customers" :key="c.id">
            <th scope="row">{{c.id}}</th>
            <td>{{c.name}}</td>
            <td><span v-if="c.point != null">{{c.point.point}}</span> <span v-else>0</span></td>
            <td>{{c.email}}</td>
            <td> <span v-if="c.profile.gender !=null">{{c.profile.gender.name}}</span></td>
            <td> <span v-if="c.address !=null">{{c.address.postal_code}}</span></td>
            <td><span v-if="c.address.state !=null">{{c.address.state.name}}</span></td>
            <td><span v-if="c.address !=null">{{c.address.address}}</span></td>
            <td>{{c.phone_no}}</td>
            <td>{{c.active}}</td>
            <td>
                   
          <b-dropdown
            variant="link"
            no-caret
            :right="$store.state.appConfig.isRTL"
          >

            <template #button-content>
              <feather-icon
                icon="MoreVerticalIcon"
                size="16"
                class="align-middle text-body"
              />
            </template>
            <b-dropdown-item :to="{ name: 'customers-edit', params: { id: c.id } }" >
              <feather-icon icon="FileTextIcon" />
              <span class="align-middle ml-50">Details</span>
            </b-dropdown-item>

            <b-dropdown-item :to="{ name: 'customers-edit', params: { id: c.id } }" >
              <feather-icon icon="EditIcon" />
              <span class="align-middle ml-50">Edit</span>
            </b-dropdown-item>

            <b-dropdown-item>
              <feather-icon icon="TrashIcon" />
              <span class="align-middle ml-50">Delete</span>
            </b-dropdown-item>
          </b-dropdown>
      

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
import NewCustomer from "./NewCustomer.vue";
export default {
  data() {
    return {
      customers: [],
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
    NewCustomer,
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      var self = this;
      this.$http.get("customers").then(function(q){
         self.customers = q.data.data.data;
      });
    },
  },
};
</script>
