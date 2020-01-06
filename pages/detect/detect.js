// pages/detect/detect.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbarData: {
      showCapsule: 1,
      title: '视力检测',
    },
    height: app.globalData.height * 2 + 20,
    lastX: 0,
    lastY: 0,
    text: "没有滑动",
    random: 11,
    show: true,
    showImg: '',
    mockEyeData: [
      {
        id: 1,
        wufen: 4.0,
        xiaoshu: 0.1,
        leval: 1,
        twodata: [{
          id: 1,
          src: '../../resource/4.png',
          answer: '右'
        }]
      }, {
        id: 2,
        wufen: 4.1,
        xiaoshu: 0.12,
        leval: 2,
        twodata: [{
          id: 1,
          src: '../../resource/411.png',
          answer: '左'
        }, {
          id: 2,
          src: '../../resource/412.png',
          answer: '上'
        }]
      }, {
        id: 3,
        wufen: 4.2,
        xiaoshu: 0.15,
        leval: 3,
        twodata: [{
          id: 1,
          src: '../../resource/421.png',
          answer: '右'
        }, {
          id: 2,
          src: '../../resource/422.png',
          answer: '下'
        }]
      }]
  },
  getRandom: function() {
    console.log(Math.random() * 10 )
    return Math.floor(Math.random() * 10 + 1)
  },
  handletouchmove: function (event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    let tx = currentX - this.data.lastX
    let ty = currentY - this.data.lastY
    let text = ""

    if (Math.abs(tx) > Math.abs(ty)) {
      //左右方向滑动
      if (tx < 0)
       { text = "左"}
      else if (tx > 0)
       { text = "右"}
    }
    else {
      //上下方向滑动
      if (ty < 0)
        {text = "上"}
      else if (ty > 0)
        {text = "下"}
        var rand = Math.floor(Math.random() * 10 + 10)
        this.setData({
          random: rand
        })
        //  this.setData({
        //    random:  rand
        //  })
       let imgCon = this.data.mockEyeData.map(function(item, index, arr) { 
          return item.twodata
        })
        console.log(imgCon[2])
        this.setData({
         showImg: imgCon
        })
      
       
    }
    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
    this.setData({
      text: text,
    });

  },
  handletouchtart: function (event) {
    // 赋值
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  },
  
  onReady() {

  }

})