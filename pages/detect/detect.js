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

  },
  handletouchmove: function (event) {
    console.log(event)
    let currentX = event.touches[0].pageX
    let currentY = event.touches[0].pageY
    let tx = currentX - this.data.lastX
    let ty = currentY - this.data.lastY
    let text = ""
 
    if (Math.abs(tx) > Math.abs(ty)) {
      //左右方向滑动
      if (tx < 0)
        text = "向左滑动"
      else if (tx > 0)
        text = "向右滑动"
    }
    else {
      //上下方向滑动
      if (ty < 0)
        text = "向上滑动"
      else if (ty > 0)
        text = "向下滑动"
    }
      //将当前坐标进行保存以进行下一次计算
      this.data.lastX = currentX
      this.data.lastY = currentY
      this.setData({
        text: text,
      });
   
    },
    handletouchtart: function (event) {
      // console.log(event)
      // 赋值
      this.data.lastX = event.touches[0].pageX
      this.data.lastY = event.touches[0].pageY
    }
})