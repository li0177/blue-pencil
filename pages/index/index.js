// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    isOpen: true
  },
  switchChange(e) {
    console.log(e.detail.value);
    this.setData({
      isOpen: e.detail.value
    })
    // 获取子组件实例对象
    console.log(this.selectComponent("aa"));
  },
  

  sySwitchXX(e) {
    console.log(e);
    this.setData({
      isOpen: e.detail.value.checked
    })
  },

})
