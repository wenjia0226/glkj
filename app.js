const TOKEN = 'token';
App({
  globalData: {
    token: '',
    appid: '',
    share: false,
    height: 0
  },
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    const token = wx.getStorageSync(TOKEN);
    if (token && token.length !== 0) {
      this.check_token(token);
    } else {
      this.login();
    }
    //判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true;
    } else {
      this.globalData.share = false;
    }
    //获取设备窗口的高度
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight;
      }
    });
  },
  check_token(token) {
    console.log('执行了token')
    wx.request({
      url: 'http://123.207.32.32:3000/auth',
      method: 'post',
      header: {
        token
      },
      success: (res) => {
      },
      fail: (err) => {
        console.log(err)
      }
    })
  },
  login() {
    console.log('执行了登录操作')
    wx.login({
      success: (res) => {
        const code = res.code;
        wx.request({
          url: 'http://123.207.32.32:3000/login',
          method: 'post',
          data: { code },
          success: (res) => {
            const token = res.data.token;
            //将token保存在globalData中
            this.globalData.token = token;
            //将token本地存储
            wx.setStorageSync(TOKEN, token)
          }
        })
      }
    })
  }
})