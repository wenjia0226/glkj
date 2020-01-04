//logs.js
const app = getApp()
Page({
  data: {
    src: '../image/logo.png',
    swiperImgUrls: [
      {
        name: '小米',
        bornData: '2019-11-04'
      },
      {
        name: '小青',
        bornData: '2019-11-04'
      }
   ],
    swiperIndex: 0,
    navbarData: {
      showCapsule: 1,
      title: '视力',
    },
    height: app.globalData.height * 2 + 20
  },
  onLoad: function () {
    
  },
  swiperChange(e) {
    const that = this;
    that.setData({
      swiperIndex: e.detail.current,
    })
  }
})
