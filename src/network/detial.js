import axios from './axios'

export function getDetail(iid) {
  return axios({
    url: '/detail',
    params: {
      iid
    }
  })
}


export class Goods {
  constructor(itemInfo, columns) {
    this.title = itemInfo.title;
    this.desc = itemInfo.desc;
    this.newPrice = itemInfo.price;
    this.oldPrice = itemInfo.highPrice;
    this.discount = itemInfo.discountDesc;
    this.columns = columns;

    this.realPrice = itemInfo.lowNowPrice
  }
}

export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods
  }
}

