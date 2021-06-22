import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payload) {
      // 判断是否已经在购物车中存在
      let exist = null;
      for(let item of state.cartList) {
        if(item.iid === payload.iid) {
          exist = item;
        }
      }
      if(exist){
        exist.count += 1;
        // console.log('exist')
      }else{
        payload.count = 1;
        state.cartList.push(payload);
        // console.log('new')
      }
      console.log(state.cartList);
    }
  }
})


export default store
