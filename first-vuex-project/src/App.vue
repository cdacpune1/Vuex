<template>
  <div id="app">
<product-list-one></product-list-one>
<product-list-two></product-list-two>

  </div>
</template>

<script>
import productlistone from './component/productlistone.vue';
import productlisttwo from './component/productlisttwo.vue';
export default {
  components:{
'product-list-one':productlistone,
'product-list-two':productlisttwo
  },
  name: 'app',
  data () {
    return {
      

}
  }
}
</script>

<style>
body{
  font-family: Arial, Helvetica, sans-serif;
  color: #555;
}

</style>
