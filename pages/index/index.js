//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '想在善和恶中作造物主的人，必须首先是个破坏者，并砸烂一切价值。也就是说，最大的恶属于最高的善。不过，后者是创造性的善。--尼采',
    msg: 'Once',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../map/map'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
