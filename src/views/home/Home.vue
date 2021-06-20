<template>
  <div id="home">
    <nav-bar class="home-nev"><div slot="center">购物</div></nav-bar>

    <scroll class="content" ref="scroll">
      <div>
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <tab-control @tabClick="tabClick" :titles="['流行', '新款', '精选']"></tab-control>
        <goods-list :goodsList="goods[currentType].list"></goods-list></div>
    </scroll>

    <back-top @backTop="backTop"/>
  </div>
</template>

<script>
import HomeSwiper from "./child/HomeSwiper";
import RecommendView from "@/views/home/child/RecommendView";

import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/content/TabControl";
import GoodsList from "@/components/content/GoodsList";
import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/content/BackTop";

import {getHomeMultidata, getHomeData} from "@/network/home";

export default {
  name: "Home",
  components: {
    HomeSwiper,
    RecommendView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  data(){
    return {
      banners: [],
      recommends: [],
      goods: {
        'pop': {page: 1, list: []},
        'new': {page: 1, list: []},
        'sell': {page: 1, list: []}
      },
      currentType: 'pop'
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
    tabClick(index){
      switch (index) {
        case 0: this.currentType = 'pop'
          break;
        case 1: this.currentType = 'new'
          break;
        case 2: this.currentType = 'sell'
          break;
      }
    },
    getHomeGoods(type) {
      getHomeData(type, this.goods[type].page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      })
    },
    backTop() {
      // console.log('backTop')
      this.$refs.scroll.scroll.scrollTo(0, 0, 200)
    }
  }
}
</script>

<style scoped>
#home {
  /*padding-top: 44px;*/
  height: 100vh;
}

.home-nev {
  background-color: #6699ff;
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0px;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
}

</style>
