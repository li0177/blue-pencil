module.exports = Behavior({
  properties:{
    
  },
  data:{
    list:[1,2,3,4,5] // 公共数据
  },
  lifetimes:{
    created(){
      console.log("behavior中的方法created");
    }
  },
  // 
  methods:{
    test(){
      console.log("behavior中的test方法");
    }
  }
})