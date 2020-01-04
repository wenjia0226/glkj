const app =  getApp();
//Component Object
Component({
  properties: {
    navbarData:{
      type: Object,
      value:{},
      observer: function(newVal, oldVal){}
    },

  },
  data: {
    height: '',
    navbarData: {
      showCapsule: 1
    }
  },
  methods: {
    _navback(event) {
      if(this.data.navbarData.pageName === 'edit-address') {
        wx.showModal({
          title: '',
          content: '当前页面尚未保存，是否确认返回?',
          showCancel: true,
          cancelColor: '#909399',
          confirmColor: '#3888FF',
          success: (result) => {
            if(result.confirm){
              vx.navigateBack()
            }
          },
         
        });
        return;
      }
      wx.navigateBack();
    },
    _backhome() {
      wx.switchTab({
        url: '/pages/index/index'
      })
    }
  },
  created: function(){

  },
  attached: function(){
    // 获取是否通过分型进入的小程序
    this.setData({
      share: app.globalData.share
    })
    //定义导航栏高度，方便对齐
    this.setData({
      height: app.globalData.height
    })
  },
  ready: function(){

  },
  moved: function(){

  },
  detached: function(){

  },
});