<template>
  <div class="cart-bottom-bar">
    <check-button @click.native="selectAll" :is-checked="isSelectAll" class="cart-select-all"/>
    <span>全选</span>
    <span class="total-price">合计：￥{{totalPrice}}</span>
    <span class="buy">去付款({{checkLength}})</span>
  </div>
</template>

<script>
import CheckButton from "@/views/cart/child/CheckButton";

export default {
  name: "CartBottomBar",
  components: {
    CheckButton
  },
  computed: {
    totalPrice() {
      const cartList = this.$store.getters.cartList;
      return cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.count * item.Price
      }, 0).toFixed(2)
    },
    checkLength() {
      return this.$store.state.cartList.filter(item => item.checked).length
    },
    isSelectAll() {
      if(this.$store.state.cartList.length === 0) return false
      return  !(this.$store.state.cartList.filter(item => !item.checked).length)
    }
  },
  methods: {
    selectAll() {
      // console.log('selectAll')
      if(this.isSelectAll){
        this.$store.state.cartList.forEach(item => item.checked = false)
      } else {
        this.$store.state.cartList.forEach(item => item.checked = true)
      }
    }
  }
}
</script>

<style scoped>
  .cart-bottom-bar {
    position: fixed;

    width: 100%;
    height: 44px;
    bottom: 50px;

    display: flex;

    background-color: #eee;
    box-shadow: 0 -2px 3px rgba(0, 0, 0, .2);
    font-size: 14px;
    color: #888;
    padding-left: 35px;
    line-height: 44px;
  }

  .cart-select-all {
    position: absolute;
    margin-right: 15px;
    left: 10px;
    top: 10px;
    line-height: 0;
  }

  .total-price {
    margin-left: 15px;
    font-size: 16px;
    color: #666;
  }

  .buy {
    position: fixed;
    right: 0px;

    background-color: orangered;
    color: #fff;
    width: 100px;
    text-align: center;
    line-height: 44px;
  }
</style>
