<template>
  <div class="selector" :class="{'selector-active': isChecked}">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: "CheckButton",
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped>
  .selector {
    border-radius: 50%;
    border: 2px solid #ccc;
  }

  .selector-active {
    background-color: #6699ff;
    border-color: #6699ff;
  }
</style>
