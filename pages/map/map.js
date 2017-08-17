Page({
  data: {
    myLocation: {
      latitude: 23.099994,
      longitude: 113.324520
    },
    markers: [{
      iconPath: "/resources/ic_person_pin_circle_black_24px.svg",
      id: 0,
      latitude: 23.099994,
      longitude: 113.324520,
      width: 50,
      height: 50,
      alpha: 0.1
    }],
    controls: [{
      id: 10000,
      iconPath: '/resources/ic_control_point_3x.png',
      position: {
        left: 320,
        top: 600 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }, {
      id: 10001,
      iconPath: '/resources/ic_add_a_photo_3x.png',
      position: {
        left: 320,
        top: 600 - 100,
        width: 50,
        height: 50
      },
      clickable: true
    }, {
      id: 10002,
      iconPath: '/resources/ic_my_location_3x.png',
      position: {
        left: 0,
        top: 600 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
  },
  controltap(e) {
    console.log(e.controlId)
    if (e.controlId === 10000) {
      wx.navigateTo({
        url: '../arounds/arounds'
      })
    }
    if (e.controlId === 10002) {
      var that = this
      wx.getLocation({
        success: function(res) {
          var location = {
            latitude: res.latitude,
            longitude: res.longitude
          }
          that.setData({
            myLocation: location
          })
        },
        fail: function(res) {
          console.log(res)
          wx.showModal({
            title: '失败',
            content: '获取当前位置失败',
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
        }
      })
    }
  }
})