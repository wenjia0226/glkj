const app =  getApp();
 Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '2016-09-01',
    nicheng: '',
    sex: '男',
    school: '',
    grade: '',
    loading: '',
    items: [
      { name: 'USA', value: '女' },
      { name: 'CHN', value: '男', checked: 'true' },
    ],
    tempFilePaths: '../image/logo.png',
    show: true,
    currentIndex: 0,
    navbarData: {
      showCapsule: 1,
      title: '编辑',
    },
    height: app.globalData.height * 2 + 20

    
  },
  addBlueActive (e) {
    this.setData({
      currentIndex: e.target.dataset.index
    })

  },
  //调出相机
  chooseImage() {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album','camera'],
      success: res => {
       that.setData({
        tempFilePaths: res.tempFilePaths
       })
      }
    })
  },
  //日期改变
  bindDataChange:function(e) {
    this.setData({
      data: e.detail.value
    })
  },
  //表单提交e
  formSubmit: function(e) {
      console.log('form发生了submit事件，携带数据为',e.detail)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
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