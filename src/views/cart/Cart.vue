<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartCount}})</div>
    </nav-bar>
    <cart-list class="cart-list" :cart-list="cartList"/>
    <cart-bottom-bar/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import CartList from "@/views/cart/child/CartList";
import CartBottomBar from "@/views/cart/child/CartBottomBar";

export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottomBar
  },
  computed: {
    cartList() {
      return this.$store.getters.cartList
    },
    cartCount() {
      return this.$store.getters.cartCount
    }
  }
}
</script>

<style scoped>
  #cart {
    /*position: relative;*/
    height: 100vh;
  }

  .nav-bar {
    background-color: #6699ff;
    font-weight: 700;
    color: #fff;
  }
</style>
