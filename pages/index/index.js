//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    currentIndex: 0,
    navList: [
      {
        "id": 1,
      "username": '小明'
      },
      {
        "id": 2,
        "username": '小帆帆'
      },
      {
        "id": 3,
        "username": 'xiaohu'
      },
      {
        "id": 4,
        "username": '大麦'
      }
    ],
    navbarData: {
      showCapsule: 1,
      title: '我的页面',
      height: app.globalData.height * 2 + 20
    }
  },
  activeNav: function(e) {
    this.setData({
      currentIndex: e.detail.current
    })
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
    var ctx = wx.createCanvasContext('anvertor');
    this.draw(ctx, 50,"../image/logo.png")
    const ctx1 = wx.createCanvasContext('start')
    this.drawCirlce(ctx1);
  },
  drawCirlce: function(ctx) {
    ctx.arc(100,100,60,0, Math.PI *2, false);
    ctx.fillStyle = 'red';
    ctx.lineWidth = 10;
    ctx.strokeStyle= "blue";
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = '#fff';
    ctx.lineWidth = 10;
    ctx.strokeStyle= "blue";
    ctx.font = "18rpx bold 黑体";
    ctx.textAlign = "center";
    ctx.textBaseline = 'middle';
    ctx.fillText('开始测试', 100,100)
  
    ctx.draw();
  },
    draw(ctx,radius,url) {
      ctx.rect(0, 0, 300, 200);
      ctx.save();
      ctx.beginPath() //开始创建一个路径
      ctx.arc(150, 55, radius, 0, 2 * Math.PI, false) //画一个圆形裁剪区域
      ctx.lineWidth = 4;
      ctx.strokeStyle="#40e0d0";
      ctx.stroke(); //描边
      ctx.clip() //裁剪
      ctx.drawImage(url, 100, 0, 100, 100) //绘制图片
      ctx.restore() //恢复之前保存的绘图上下文
      ctx.draw();
    },
   
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  drawCircular(ctx,width, height, x, y) {
   var avatarurl_width = width;
   var avatarurl_heigth = height;
   var avatarurl_x = x;
   var avatarurl_y = y;
   ctx.save();
   ctx.beginPath();
   ctx.arc(avatarurl_width / 2 + avatarurl_x, avatarurl_heigth / 2 + avatarurl_y, avatarurl_width / 2, 0, Math.PI * 2, false);
   ctx.clip();
   //ctx.drawImage(url, avatarurl_x, avatarurl_y, avatarurl_width, avatarurl_heigth);
   ctx.restore();
 },
 
})
