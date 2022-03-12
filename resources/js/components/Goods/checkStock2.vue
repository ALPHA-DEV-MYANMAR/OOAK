<template>
  <div class="container-fluid">
    <nav-bar></nav-bar>
    <div class="app-content content">
      <h3 class="text-center">InStock check 2</h3>

      <div class="mb-2" style="float: right">
        <!-- <a :href="$router.resolve({name: 'goods/add'}).href"><button class="btn btn-primary"> <i data-feather="plus-circle"></i> Add   </button></a> -->
        <!-- <router-link to="/admin/goods/create"
          ><button class="btn btn-primary">
            <v-icon name="plus-circle" /> Add
          </button></router-link
        > -->
      </div>
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>Goods </th>
            <th>stock</th>
            <th>Order</th>
            <th>Pending</th>
            <th>Pending</th>
           
          </tr>
        </thead>
        <tbody>
          <tr v-for="g in goods" :key="g.id">
              <!-- {{good}} -->
            <td>{{ g.id }}</td>
            <td>{{ g.name }}</td>
            <td>{{g.total_stock}}</td>
            <td>
              <ul v-for="p in g.prices" :key="p.id">
                <li><span>PriceId : {{p.id}}</span> - 
                <span>Qty : {{p.quantity}}</span> 
                  <ul >
                    <li v-for="o in p.order_items" :key="o.id" >
                    <span v-if="o.order != null">
                    <span>Order Id : {{o.order_id}} - orderStatus : {{o.order.order_status_id}} - Qty : {{o.quantity }} </span> 
                    </span>
                
                    </li>
                  </ul>
                </li>
              </ul>
            </td>


            <td>
            <ul v-for="p in g.prices" :key="p.id">
              <li>
                <ul>
                  <li v-for="pe in p.pendings" :key="pe.id">
                    <span> OrderId : {{pe.order_id}} - PriceId : {{pe.price_id}} - Qty: {{pe.qty}}  </span>
                  </li>
                </ul>
              </li>
            </ul>
            
            </td>
            <td></td>
             

            <!-- <td>
              <div class="col-12">
                <router-link
                  :to="{ name: 'goods/edit', params: { id: good.good.id } }"
                  class="btn btn-primary btn-sm"
                >
                  <v-icon name="edit" />
                </router-link>
                <button class="btn btn-danger btn-sm" @click="deleteGood(good.good)">
                  <v-icon name="trash" />
                </button>
              </div>
            </td> -->
          </tr>
        </tbody>
      </table>
      <!-- Separated Pagination starts -->
      <!-- {{links}} -->
      <!-- <nav aria-label="Page navigation">
        <ul class="pagination mt-2">
          
          <li class="page-item" v-for="index in last_page" :key="index">
            <a class="page-link" @click="onChangePage(index)"> {{ index }}</a>
          </li>
          
      </nav> -->

      <pagination
        :data="goods"
        @pagination-change-page="getResults"
      ></pagination>
    </div>
     <div v-if="editModal">
      <div class="modal-wrapper">
        <div class="modal">
          <div class="modal-dialog modal-dialog-scrollable" role="document">
            <div
              class="modal-content"
              style="background-color: rgb(40, 48, 70)"
            >
              <div class="modal-header">
                <h5 class="modal-title">Edit Stock</h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  @click="editModal = false"
                >
                  <v-icon name="times" />
                </button>
              </div>
              <div class="modal-body">
                <div class="card-body invoice-padding pt-0">
                  <div class="row row-bill-to invoice-spacing">
                    <div class="row">
                      <div class="col-xl-6 mb-lg-1 col-bill-to ps-0">
                        <h6 class="invoice-to-title">Original Price</h6>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter the promo codes"
                          v-model="editGoods.ori_price"
                        />
                        <!-- <v-multiselect
                        v-model="order.promo_code"
                        tag-placeholder="Add this as new tag"
                        placeholder="Search or add a tag"
                        label="name"
                        track-by="id"
                        :options="order_status"
                       
                      ></v-multiselect> -->
                      </div>
                      <div class="col-xl-6 mb-lg-1 col-bill-to ps-0">
                        <h6 class="invoice-to-title">Expire Date</h6>
                        <div class="invoice-customer">
                          <input
                            type="date"
                            class="form-control"
                            v-model="editGoods.expired_date"
                            placeholder="Enter the delivery accept date"
                          />
                          
                        </div>
                      </div>
                      <div class="col-xl-6 mb-lg-1 col-bill-to ps-0">
                        <h6 class="invoice-to-title">Original Quantity</h6>
                        <div class="invoice-customer">
                          <input
                            type="integer"
                            class="form-control"
                            v-model="editGoods.ori"
                            placeholder="Enter the original quantity"
                          />
                          
                        </div>
                      </div>
                      <div class="col-xl-6 mb-lg-1 col-bill-to ps-0">
                        <h6 class="invoice-to-title">Instock Quantity</h6>
                        <div class="invoice-customer">
                          <input
                            type="integer"
                            class="form-control"
                            v-model="editGoods.qty"
                            placeholder="Enter the instock quantity"
                          />
                          
                        </div>
                      </div>
                       <div class="col-xl-6 mb-lg-1 col-bill-to ps-0">
                        <h6 class="invoice-to-title">Recycle</h6>
                        <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          v-model="editGoods.trash"
                          id="inlineRadio3"
                          value="yes"
                        />
                        <label class="form-check-label" for="inlineRadio1"
                          >Yes</label
                        >
                      </div>
                      <div class="form-check form-check-inline">
                        <input
                          class="form-check-input"
                          type="radio"
                          v-model="editGoods.trash"
                          id="inlineRadio4"
                          value="no"
                        />
                        <label class="form-check-label" for="inlineRadio2"
                          >No</label
                        >
                      </div>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <!-- <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button> -->
                <div class="col-12">
                  <form action="" @submit.prevent="updateInstock(editGoods)">
                    <button
                      type="submit"
                      class="btn btn-primary"
                      style="float: right"
                    >
                      Update
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "goods",
  data() {
    return {
      editModal: false,
      goods: {},
      categories: [
        {
          name: "",
          parent: "",
          sub_categories: [],
        },
      ],
      editGoods: {},
      first_page_url: "",
      from: "",
      last_page: "",
      last_page_url: "",
      links: [
        {
          url: "",
          label: "",
          active: "",
        },
      ],
      next_page_url: "",
      path: "",
      per_page: "",
      prev_page_url: "",
      to: "",
      total: "",
      pageNumber: "",
      per_page: "",
      price_id : "",
      start_date : "",
      end_date: "",
      trash : "",
      stock : "",

    };
  },
  created() {

    
  },
  mounted() {
    this.getResults(),
    this.$store.dispatch("fetchCategories"),
      this.$store.dispatch("fetchSubCategories");
      // Fetch initial results
      
    // this.assignPerPage();
  },
  methods: {
    // assignPerPage(per_page)
    // {
    //   this.per_page = per_page
    //   this.getResults(page = 1,per_page = this.per_page,category_id = this.category_id)
    // },
    getResults(
      page = 1,
      per_page = this.per_page,
      price_id = this.price_id,
      start_date = this.start_date,
      end_date = this.end_date,
       stock= this.stock,
      trash = this.trash,
     
      
    ) {
      // alert(per_page);
     
        axios
        .get(
          "/api/admin/v1/checkStock2?page=" +
            page + "&per_page=" + per_page +
           "&price_id=" +
            price_id +
            "&start_date=" +
            start_date +
            "&end_date=" +
            end_date + "&stock=" + stock +
            "&trash=" +
            trash 
            
         ).then((response) => {
          this.goods = response.data.data;
          console.log( response.data.data)
        });
    },
    deleteGood(good) {
      // alert(good.id);
      this.axios.delete(`/api/admin/v1/expired/${good.id}`).then((res) => {
        if (res.data.status === true) {
          let i = this.goods.findIndex((item) => item.id === good.id); // find index of your object
          this.goods.splice(i, 1);
          Toast.fire({
            icon: "success",
            title:
              '<p style="margin-top:10px;color:black; font-size:14px;">You have  successfully deleted.<p>',
          });
        }
      });
    },
    showEditModal(instock_good)
    {
     
       this.axios.get(`/api/admin/v1/expired/${instock_good.id}`).then((res) => {
        console.log(res.data.data);
        this.editGoods = res.data.data;
       })
      this.editModal = true;
    },
      myFunction(event) {
     

    },
    updateInstock(instock_good)
    {
      this.axios
        .put(`/api/admin/v1/expired/${instock_good.id}`, instock_good)
        .then((res) => {
          if (res.data.status === true) {
            this.editModal = false;
            Toast.fire({
              icon: "success",
              title:
                '<p style="margin-top:10px;color:black; font-size:14px;">You have  successfully updated.<p>',
            }).then((reload = location.reload()));
          }
        });
    }    
  },
  computed: {
    //...mapGetters(["categories", "sub_categories"]),
  },
};
</script>