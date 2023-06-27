Vue.component('FormComponent', {
    template: `
      <form class="row g-3">
        <div class="col-md-2">
          <p style="font-size: 17px; font-weight: 600;">Billing Address</p>
          <div class="card" style="border: 1px solid #757575">
            <div class="card-body" style="text-align: left; margin-left: 0px;">
              <p class="card-text">Test QB 1</p>
              <p class="card-text">QB 1 Company</p>
            </div>
          </div>
        </div>
        <div class="col-md-1">
          <label for="terms" class="form-label">
            Terms
            <i class="bi bi-question-circle" style="margin-right: 70px;"></i>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
            </svg>
          </label>
          <select class="form-select" id="Net quantity" style="border: 1px solid black;">
            <option selected>Net 30</option>
            <option>Net 40</option>
            <option>Net 50</option>
            <option>Net 60</option>
          </select>
        </div>
        <div class="col-md-1">
          <label for="invoice date" class="form-label">Invoice date</label>
          <span class="form-control" id="invoice date">06/06/23</span>
          <span class="text-primary" style="color: blue; font-size: 11px;">Create recurring invoice</span>
        </div>
        <div class="col-md-1">
          <label for="due date" class="form-label">Due date</label>
          <span class="form-control" id="due date">07/06/23</span>
        </div>
        <div class="col-md-1 offset-md-6">
          <label for="invoice no." class="form-label">Invoice no.</label>
          <span class="form-control" id="invoice no.">1001</span>
        </div>
        <div class="col-md-2">
          <p style="font-size: 17px;">Shipping address</p>
          <div class="card" style="border: 1px solid #757575">
            <div class="card-body" style="text-align: left; margin-left: 0px;">
              <p class="card-text">Test QB 1</p>
              <p class="card-text">QB 1 Company</p>
            </div>
          </div>
        </div>
        <div class="col-md-1">
          <label for="ship via" class="form-label">Ship via</label>
        </div>
        <div class="col-md-1">
          <label for="tracking date" class="form-label">Tracking date</label>
          <input type="text" class="form-control" id="tracking date">
        </div>
        <div class="col-md-1">
          <label for="tracking no." class="form-label">Tracking no.</label>
          <input type="text" class="form-control" id="tracking no">
        </div>
        <div class="col-md-1 offset-md-6">
          <label for="shipping from" class="form-label">Shipping from</label>
          <input type="text" class="form-control" id="shipping from">
        </div>
        <div class="col-md-5">
          <label for="tags" class="form-label">Tags</label>
          <i class="bi bi-question-circle"></i>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-question-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
          </svg>
          <input type="text" class="form-control" id="tags">
        </div>
        <div class="col-md-1">
          <label for="packing slip" class="form-label">Packing slip</label>
          <input type="text" class="form-control" id="packing slip">
        </div>
        <div class="col-md-1">
          <label for="status" class="form-label">Status</label>
          <input type="text" class="form-control" id="status">
        </div>
      </form>
    `
  });
  
  Vue.component('table-component', {
    data() {
      return {
        items: [],
        name: "amrutha"
      };
    },

    mounted() {
      this.fetchData();
    },

    methods: {
      fetchData() {
        var self = this;
        this.items = [];
        VCAP.userapi.records.get({ module: "Products", extrafields: ["description"] }, function (e, products) {
          if (e) {
            alert(e.message);
          } else {
            products.forEach((eachProduct, index) => {
              Vue.set(self.items, index, { ...eachProduct, changed: false }); 
            });
          }
        });
      },
      addItem() {
        const newItem = {
          number: '',
          product: '',
          description: '',
          quantity: '',
          rate: '',
          amount: '',
          tax: '',
          changed: true
        };
        this.items.push(newItem);
      },
    saveData(item) {
       console.log('in save');
       console.log(item);
       const payload = {
            module: "Products",
             data: {
                qtyinstock: item.qtyinstock,
                unit_price: item.unit_price,
                productname: item.productname
                   }
          }
      VCAP.userapi.records.post(payload, function(e, products) {
       if (e) {
          alert(e.message);
      } else {
          console.log(products);
        }
     });

         },

        computeAmount(item) {
            const quantity = parseFloat(item.qtyinstock);
            const rate = parseFloat(item.unit_price);
            if (isNaN(quantity) || isNaN(rate)) {
                return '';
            } else {
                const amount = quantity * rate;
                return amount.toFixed(2);
            }
        },
        deleteItem(index) {
            if (confirm("Are you sure you want to delete?")) {
                this.items.splice(index, 1);
                //this.saveData();
            }
        }
    }, 
    template: `
          <div>
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">PRODUCT/SERVICE</th>
                  <th scope="col">DESCRIPTION</th>
                  <th scope="col">QTY</th>
                  <th scope="col">RATE</th>
                  <th scope="col">AMOUNT</th>
                  <th scope="col">TAX</th>
                  <th scope="col"></th>
                </tr>
              </thead>
           <tbody>
          <tr v-for="(item, index) in items" :key="index">
          <td>{{index}}</td>
          <td>
             <input v-model="item.productname" type="text" class="invisible-input">
          </td>
          <td>
             <input v-model="item.description" type="text" class="invisible-input">
          </td>
          <td>
             <input v-model="item.qtyinstock" type="number" class="invisible-input">
          </td>
          <td>
             <input v-model="item.unit_price" type="number" class="invisible-input">
          </td>
          <td>{{computeAmount(item) }}</td>
          <td>
             <input v-model="item.tax" type="number" class="invisible-input">
          </td>
    <td>
              <span @click" v-if="item.changed">✔</span>
            </td>
          <td>
   <button @click="deleteItem(index)"><i class="bi bi-trash"></i><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"><path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
              </svg></button>   
            </td>
          </tr>
              </tbody>
            </table>
            <button @click="addItem">Add Item</button>
          </div>
        `
        
      });
      new Vue({
        el: '#app',
		  data: {
			  isSaving: false,
			  item: {
				  qtyinstock:0,
				  unit_rpice: 0,
				  productname: ''
			  }
		  },
      });   
  
 // var self = this;
              //VCAP.userapi.records.get( { module: "Products" }, function (e, products) {
          //        if (e) alert(e.message);
              //    else self.products=products;
              //});