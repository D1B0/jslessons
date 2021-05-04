const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    carts:[],
      filtered : [],
    imgCatalog: 'https://via.placeholder.com/150',
      searchLine: "",
      isVisibleCart:false,
      cartPrice : 0,
    test:''
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
     let productItem = this.products.find(item => item.id_product === product.id_product)
      productItem["quantity"] = 1
      let cartItem = this.carts.find(item => item.id_product === product.id_product)
      if (cartItem === undefined){
this.carts.push(Object.assign({} , productItem))
      }else
        cartItem.quantity++
    },
      deleteItem(product){

          this.carts.splice(product,1)
      },

    filterGoods(value){

      const regexp = new RegExp(this.searchLine, 'i'); //
      this.filtered = this.products.filter(product => regexp.test(product.product_name));


    }


  },
    computed: {
      cartCost (){
          return this.carts.reduce((totalCost, cartItem) => totalCost + cartItem.price * cartItem.quantity, 0)
      }
    },

  beforeCreate() {},
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          this.products.push(el);
        }
        this.filtered = this.products.slice(0)

      });
  },
  beforeMount() {},
  mounted(){},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
});
