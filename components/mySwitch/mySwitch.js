// 导入 behaviors
const player = require("../../behavior/player")

// components/mySwitch/mySwitch.js
Component({
  behaviors:[player],
  options:{
    multipleSlots:true,
    pureDataPattern:/^_/,
  },
  externalClasses:['mybg','myfont'],
  /**
   * 组件的属性列表
   */
  properties: {
    name: {
      // 接收属性值得类型
        type:String,
        // 属性的默认值
        value:'xx'
    },
      checked: {
        // 接收属性值得类型
          type:Boolean,
          // 属性的默认值
          value:true
        },

  },
  

  /**
   * 组件的初始数据
   */
  data: {
    num:2,
    n1:3,
    n2:66
  },

  /**
   * 组件的方法列表
   */
  methods: {
    myswitchClick(){
        var myEventDetail = {
          value:{
            a:10,
            checked:!this.data.checked
          }
        } // detail对象 提供给事件监听函数
        var myEventOption = {b:20} // 触发事件的选项
        this.triggerEvent("change",myEventDetail,myEventOption)
        this.test()
    }
  },
  // 数据侦听器
  observers:{
    num(){
      console.log("num发生改变了");
    },
    "n1,n2":(a,b)=>{
      console.log(a,b);
    }
    // 使用通配符 * 可以监听全部setData
  },

  // 组件的生命周期
  lifetimes:{
    created(){
      console.log("created");
      this.setData({
        num:22
      },()=>{
        console.log(this.data.num);
      })
      this.str = '字符串'
    },
    attached(){
      console.log('attached');
      this.setData({
        num:22
      })
    },
    detached(){
      console.log('detached');
    },
    error(){
      console.log("error");
    }
  },
  pageLifetimes:{
    // 组件所在页面显示时执行
    show(){

    },
  }
})
