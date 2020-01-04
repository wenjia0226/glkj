// pages/detail/detail.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showModal: true,
    show: false,
    navbarData: {
      showCapsule: 1,
      title: '详情',
    },
    height: app.globalData.height * 2 + 20,
    value: 0
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {
      this.setData({
        showModal: false
      })
  },
  cancenlClick:function() {
      this.setData({
        showModal:false
      })
  },
  confirmClick:function() {
        this.setData({
          showModal: !this.data.showModal
        })
  },
  hideMode: function() {
    this.setData({
      showModal: false
    })
  },
  go: function () {
    this.setData({
      showModal: false
    })
  },
  handleProgress: function() {
    this.setData({
      show: !this.data.show
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     const  ctx1 = wx.createCanvasContext("runCanvas");
     const  ctx2 = wx.createCanvasContext("runCanvas2");
     this.drawCirlce(ctx1)
     this.drawCirlce(ctx2)
  },
  drawCirlce(ctx) {
       var start = -Math.PI /2,
            end = -Math.PI /2;
        setInterval(function() {
          ctx.clearRect(0,0, 20,200);
          ctx.arc(80,80,50, start, end);
          ctx.lineWidth = 10;
          ctx.strokeStyle = "orange";
          //ctx.font = "28rpx";
          // ctx.textAlign = "center";
          // ctx.textBaseline = 'middle';
          // ctx.fillText('左眼视力',80,80)
          ctx.stroke();
          ctx.draw();
          end += Math.PI /6;
        }, 100)
   },
   //获取滑块的值
   getValue (e) {
    this.setData({
      value: e.detail.value
    })
  },
   methods: {
    
   },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})