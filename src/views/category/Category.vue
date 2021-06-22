<template>
  <div id="category">
    <nav-bar class="nav-bar"><div slot="center">商品分类</div></nav-bar>
    <div class="content">
      <tab-menu :categories="categories" @selectItem="selectItem"></tab-menu>
      <scroll id="tab-content" :data="[categoryData]">
        <div>
          <tab-content-category :subcategories="showSubcategory"></tab-content-category>
          <tab-control :title="['综合','新品','销量']" @itemClick="tabClick"></tab-control>
          <tab-content-detail :category-detail="showCategoryDetail"></tab-content-detail>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

import TabMenu from './childComps/TabMenu'
import TabControl from '@/components/content/TabControl'
import Scroll from '@/components/common/scroll/Scroll'
import TabContentCategory from './childComps/TabContentCategory'
import TabContentDetail from './childComps/TabContentDetail'

import {getCategory,getSubcategory,getCateGoryDetail} from "@/network/category"
import {POP,SELL,NEW} from "@/common/const"
import {tabControlMixin} from "@/common/mixin"

export default {
  name: "Category",
  components: {
    NavBar,
    TabMenu,
    TabControl,
    Scroll,
    TabContentCategory,
    TabContentDetail
  },
  mixins: [tabControlMixin],
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1
    }
  },
  created() {
    this._getCategory()
  },
  computed: {
    showSubcategory() {
      if (this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if (this.currentIndex === -1) return[]
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    _getCategory() {
      getCategory().then(res => {
        this.categories = res.data.category.list
        for (let i =0;i< this.categories.length;i++){
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              'pop': [],
              'new': [],
              'sell': []
            }
          }
        }
        this._getSubcategories(0)
      })
    },
    _getSubcategories(index) {
      this.currentIndex = index;
      const maitKey = this.categories[index].maitKey;
      getSubcategory(maitKey).then(res => {
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this._getCateGoryDetail(POP)
        this._getCateGoryDetail(SELL)
        this._getCateGoryDetail(NEW)
      })
    },
    _getCateGoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey;
      getCateGoryDetail(miniWallkey,type).then(res => {
        this.categoryDetail[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    selectItem(index) {
      this._getSubcategories(index)
    }
  }
}
</script>

<style scoped>
  #category {
    height: 100vh;
  }

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;

    display: flex;
  }

  #tab-content {
    height: 100%;
    flex: 1;
  }
</style>