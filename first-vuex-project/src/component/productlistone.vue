<template>
  <div id="product-list-one">
<h1> Product List One</h1>
<ul>
<li v-for="(product,i) in saleproducts" :key="i">
<span class="name">{{product.name}}</span>
<span class="price">:{{product.price}}/-</span>
</li>
</ul>
<button @click="reduceprice">ReducePrice</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
import {mapGetters} from 'vuex';


export default {
   computed:{
       products(){
           return this.$store.state.products; 
       },
       ...mapGetters([
           'saleproducts'
           //'urnext',

       ])
//    saleproducts(){
//  return this.$store.getters.saleproducts;
   
//    }
   
   },
  methods:{
//   reduceprice:function(){
    // this.$store.state.products.forEach(product => {
    //     product.price -= 1;
    // });
    // this.$store.commit('reduceprice');
//   this.$store.dispatch('reduceprice');
//mapping getter and actions
...mapActions([
    'reduceprice'
])

}
   }
  
  
  

</script>

<style>

#product-list-one{
    background:lightskyblue;
    box-shadow: 1px 2px 3px rgba(0,0,0,0,2);
    margin-bottom: 30px;
    padding: 10px 20px;
}
#product-list-one ul{
    padding: 0;
}
#product-list-one li{
    display: inline-block;
    margin-right: 10px;
    margin-top: 10px;
    padding: 20px;
    background:rgba(255,255,255,0.7);
}
.price{
    font-weight: bold;
    color:red;
}
  
</style>
