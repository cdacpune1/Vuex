import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products:[
            {name:'gloreal',price:50},
            {name:'loreal',price:80},
            {name:'lakme' ,price:90},
            {name:'fasino',price:100},
            
          ]
    },
    getters:{
        saleproducts: state => {
            var saleproducts = state.products.map(product => {
                return {
                    name: '**' + product.name + '**',
                    price:product.price / 2
                }
            });
            return saleproducts;
        }
    },
    mutations:{
      reduceprice:state =>{
        state.products.forEach(product => {
      product.price -= 1;
     });
    }
},
actions:{
    reduceprice:xyz => {
        setTimeout(function(){
            xyz.commit('reduceprice')
        },2000)
    }
}
})