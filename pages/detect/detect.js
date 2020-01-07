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
    random: 1,
    showImg: '',
    levelPre: 1,
    counter: 2,
    showItem: true,
    rightNum: 0,
    wrongNum: 0,
    mockEyeData: [
      {
        id: 1,
        wufen: 4.0,
        xiaoshu: 0.1,
        level: 1,
        twodata: [{
          record: 1,
          src: '../../resource/4.png',
          answer: '右'
        }, {
          record: 2,
            src: '../../resource/find.png',
            answer: '眼睛'
        }]
      }, {
        id: 2,
        wufen: 4.1,
        xiaoshu: 0.12,
        level: 2,
        twodata: [{
          record: 1,
          src: '../../resource/411.png',
          answer: '左'
        }, {
          record: 2,
          src: '../../resource/412.png',
          answer: '上'
        }]
      }, {
        id: 3,
        wufen: 4.2,
        xiaoshu: 0.15,
        level: 3,
        twodata: [{
          record: 1,
          src: '../../resource/421.png',
          answer: '右'
        }, {
          record: 2,
          src: '../../resource/422.png',
          answer: '下'
        }]
      }]
  },
  //触摸操作
  handletouchtart: function (event) {
    // 赋值
    this.data.lastX = event.touches[0].pageX
    this.data.lastY = event.touches[0].pageY
  },
  handletouchmove: function (event) {
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    let tx = currentX - this.data.lastX
    let ty = currentY - this.data.lastY
    let text = ""
    if (Math.abs(tx) > Math.abs(ty)) {
      //左右方向滑动
      if (tx < 0) { text = "左" }
      else if (tx > 0) { text = "右" }
    }
    else {
      //上下方向滑动
      if (ty < 0) { text = "上" }
      else if (ty > 0) { text = "下" }
    }
    //将当前坐标进行保存以进行下一次计算
    this.data.lastX = currentX
    this.data.lastY = currentY
    this.setData({
      text: text,
    });
  },
  handletouchend: function(event) {
    //先设置等级，再对次数进行统计
    if (this.data.levelPre < 4) {
      if(this.data.counter == 2) {
        console.log(2)
        this.setData({
          levelPre: this.data.levelPre + 1,
          counter: this.data.counter - 1
        })
       
      }else if(this.data.counter == 1) {
        this.setData({
          counter: this.data.counter - 1,
          random: this.data.random + 1
        })
      }else {
        this.setData({
          counter: 2,
          random: 1
        })
      }
    }else {
      this.setData({
        levelPre: 1
      })
    }
  },
  //增大图片
  biggerImg: function() {
    if(this.data.levelPre < 4) {
      this.setData({
        levelPre: this.data.levelPre + 1
      })
    }
    this.setData({
      counter: 2
    })
  },
  //减小图片
  smallerImg: function() {
    if(this.data.levelPre >1) {
      this.setData({
        levelPre: this.data.levelPre - 1
      })
      this.setData({
        counter: 2
      })
    }
  },
  onReady() {

  }

})