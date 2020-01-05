// pages/detail/detail.js
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    showModal: true,
    show: false,
    left_Degrees: 0,
    right_Degrees: 0,
    left_astigmatism: 0,
    right_astigmatism: 0,
    select_dis: 0,
    navbarData: {
      showCapsule: 1,
      title: '详情',
    },
    height: app.globalData.height * 2 + 20,
    value: 0,
    showGlasses: false,
    show_distance: false,
  },
  selectDistance (e) {
    console.log(e)
    this.setData({
      select_dis: e.currentTarget.dataset.index
      }
    )
  },
   //获取滑块的值
   getValue (e) {
    this.setData({
      value: e.detail.value
    })
  },
  showDistance() {
    this.setData({
      show_distance:  true
    })
    this.setData({
      showGlasses: false
    })
  },
  hideDistance () {
    this.setData({
      show_distance: false
    })
  },
  getLeftDegrees(e) {
    this.setData({
      left_Degrees: e.detail.value
    })
  },
  getRightDegrees(e) {
    this.setData({
      right_Degrees: e.detail.value
    })
  },
  getLeftAstigmatism(e) {
    this.setData({
      left_astigmatism: e.detail.value
    })
  },
  getRightAstigmatism(e) {
    this.setData({
      right_astigmatism: e.detail.value
    })
  },
  //眼镜设置隐藏消失
  glassesSetting: function() {
    this.setData({
      showGlasses: (!this.data.showGlasses)
    })
  },
  hideGlasses() {
    this.setData({
      showGlasses: false
    })
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
   methods: {
     //获取滑块的值
     
   }
 
})