// components/popup.js
Component({
     
  /**
   * 组件的属性列表options
   */
  options: {
    multipleSlots: true  //在租金啊定义时的选项中多启用多slot支持
  },
  properties: {
    title: {
      type: String,
      value: '标题'
    },
    content:  {
      type: String,
      value: '内容'
    },
    btn_no: {
      type: String,
      value: '取消'
    },
    btn_ok: {
      type: String,
      value: '确定'
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    flag: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hidePopup () {
      this.setData({
        flag: !this.data.flag
      })
    },
    showPopup () {
      this.setData({
        flag: !this.data.flag
      })
    },
    _error () {
      this.triggerEvent('error')
    },
    _success() {
      this.triggerEvent('success')
    }
  }
})
