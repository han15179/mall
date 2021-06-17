<template>
  <div id="home">
    <nav-bar class="home-nev"><div slot="center">购物</div></nav-bar>
    <home-swiper :banners="banners"/>
    <recommend-view :recommends="recommends"/>
    <tab-control :titles="['流行', '新款', '精选']"></tab-control>
  </div>
</template>

<script>
import HomeSwiper from "./child/HomeSwiper";
import RecommendView from "@/views/home/child/RecommendView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/TabControl";

import {getHomeMultidata, getHomeData} from "@/network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    NavBar,
    TabControl
  },
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      }
    }
  },
  created() {
  //  创建时请求数据
    getHomeMultidata().then(res => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    })

    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeGoods(type) {
      getHomeData(type, this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    }
  }
}
</script>

<style scoped>
.home-nev {
  background-color: #6699ff;
  color: white;
}

</style>
