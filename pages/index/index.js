//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
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
    var ctx1 = wx.createCanvasContext('posterCanvas');
    var ctx2 = wx.createCanvasContext('posterCanvas2');
    this.drawCirlce(ctx1,50,"red")
    
  },
    draw(ctx,radius,url) {
      ctx.rect(0, 0, 300, 200);
      ctx.save();
      ctx.beginPath() //开始创建一个路径
      ctx.arc(150, 55, radius, 0, 2 * Math.PI, false) //画一个圆形裁剪区域
      ctx.lineWidth = 4;
      ctx.strokeStyle="orange";
      ctx.stroke(); //描边
      ctx.clip() //裁剪
      ctx.drawImage(url, 100, 0, 100, 100) //绘制图片
      ctx.restore() //恢复之前保存的绘图上下文
      ctx.draw();
    },
    drawCirlce(ctx, radius,color) {
      ctx.rect(0, 0, 300, 200);
      ctx.save();
      ctx.beginPath() //开始创建一个路径
      ctx.arc(150, 55, radius, 0, 2 * Math.PI, false) //画一个圆形裁剪区域
      ctx.lineWidth = 10;
      ctx.strokeStyle= 'orange';
      ctx.stroke(); //描边
      ctx.fillStyle = color;
      ctx.fill();
      ctx.clip() //裁剪
     // ctx.drawImage('../image/logo.png', 100, 0, 100, 100) //绘制图片
      ctx.restore() //恢复之前保存的绘图上下文
      ctx.draw();
    },
  getUserInfo: function(e) {
    console.log(e)
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
 }
})
