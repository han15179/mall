<template>
  <div id="detail">
    <detail-nav-bar class="detail-nav-bar" @titleClick="titleClick" :current-index="currentIndex"/>
    <scroll class="detail-scroll" ref="detailScroll" :probe-type="3" @scroll="detailScroll">
      <div>
        <detail-swiper ref="detailSwiper" :top-images="topImages"/>
        <detail-base-info ref="detailBaseInfo" :goods="goods"/>
        <detail-shop-info ref="detailShopInfo" :shop="shops"/>
        <detail-goods-info ref="detailGoodsInfo" :detail-info="detailInfo" @detailImageLoad="detailImageLoad"/>
      </div>
    </scroll>
    <detail-bottom-bar @addToCart="addToCart"/>

    <back-top @backTop="backTop" v-show="isShowBackTop"/>
  </div>
</template>

<script>
  import DetailNavBar from './child/DetailNavBar'
  import DetailSwiper from "@/views/detail/child/DetailSwiper";
  import DetailBaseInfo from "@/views/detail/child/DetailBaseInfo";
  import DetailShopInfo from "@/views/detail/child/DetailShopInfo";
  import DetailGoodsInfo from "@/views/detail/child/DetailGoodsInfo";
  import DetailBottomBar from "@/views/detail/child/DetailBottomBar";

  import Scroll from "@/components/common/scroll/Scroll";
  import BackTop from "@/components/content/BackTop";

  import {getDetail, Goods, Shop} from "@/network/detial";

  export default {
    name: "Detail",
    components: {
      DetailNavBar,
      DetailSwiper,
      DetailBaseInfo,
      DetailShopInfo,
      DetailGoodsInfo,
      DetailBottomBar,
      Scroll,
      BackTop
    },
    data() {
      return {
        iid: null,
        topImages: [],
        goods: {},
        shops: {},
        detailInfo: {},
        topYs: [],
        currentIndex: 0,
        isShowBackTop: false
      }
    },
    created() {
      this.iid = this.$route.params.iid

      // 请求数据
      getDetail(this.iid).then(res => {
        this.topImages = res.result.itemInfo.topImages;
        this.goods = new Goods(res.result.itemInfo, res.result.columns);
        this.shops = new Shop(res.result.shopInfo);
        this.detailInfo = res.result.detailInfo
      })
    },
    updated() {
      this.topYs = []
      this.topYs.push(0)
      this.topYs.push(this.$refs.detailGoodsInfo.$el.offsetTop)
    },
    methods: {
      detailImageLoad() {
        // console.log('detailImageLoad')
        this.$refs.detailScroll.refresh()
      },
      titleClick(index) {
        // console.log(index)
        this.$refs.detailScroll.scroll.scrollTo(0, -this.topYs[index], 100)
      },
      detailScroll(position) {
        let length = this.topYs.length
        for(let i = 0; i<length; i++){
          if((i < (length-1) && -position.y >= this.topYs[i] && -position.y < this.topYs[i+1]) ||
            (i===(length-1) && -position.y >= this.topYs[i])) {
            if(this.currentIndex !== i) {
              this.currentIndex = i;
              // console.log(this.currentIndex)
            }
            break;
          }
        }
        this.isShowBackTop = (-position.y) > 1000
      },
      backTop() {
        // console.log('backTop')
        this.$refs.detailScroll.scroll.scrollTo(0, 0, 200)
      },
      addToCart() {
        // console.log('addToCart')
        const addition = {}
        addition.iid = this.iid;
        addition.image = this.topImages[0];
        addition.title = this.goods.title;
        addition.desc = this.goods.desc;
        addition.Price = this.goods.realPrice

        this.$store.commit('addCart', addition)
      }
    }
  }
</script>

<style scoped>
  #detail {
    height: 100vh;
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .detail-nav-bar {
    position: relative;
    z-index: 9;
    background-color: white;
  }

  .detail-scroll {
    height: calc(100% - 44px - 49px);
  }
</style>
