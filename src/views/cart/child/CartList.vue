<template>
  <scroll class="cart-list">
    <div class="cart-list-content">
      <cart-list-item v-for="item in cartList" :key="item.iid" :item-info="item"/>
    </div>
  </scroll>
</template>

<script>
import Scroll from "@/components/common/scroll/Scroll";
import CartListItem from "@/views/cart/child/CartListItem";

export default {
  name: "CartList",
  components: {
    Scroll,
    CartListItem
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped>
  .cart-list {
    height: calc(100% - 44px - 49px - 40px);
  }

  .cart-list-content {
    height: 100%;
    overflow: hidden;
  }
</style>
