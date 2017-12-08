Page({
    data: {
        myLocation: {
            latitude: 23.099994,
            longitude: 113.324520
        },
        markers: [{
            iconPath: "/resources/avatar.jpeg",
            id: 0,
            latitude: 23.099994,
            longitude: 113.324520,
            width: 20,
            height: 20,
            alpha: 0.4
        }],
        controls: [{
            id: 10001,
            iconPath: '/resources/ic_post.svg',
            position: {
                left: 320,
                top: 600 - 50,
                width: 50,
                height: 50
            },
            clickable: true
        }, {
            id: 10002,
            iconPath: '/resources/ic_gps.svg',
            position: {
                left: 0,
                top: 600 - 40,
                width: 40,
                height: 40
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
        if (e.controlId === 10001) {
            wx.navigateTo({
                url: '../post/post',
            })
        }
        if (e.controlId === 10002) {
            var that = this
            wx.getLocation({
                success: function (res) {
                    var location = {
                        latitude: res.latitude,
                        longitude: res.longitude
                    }
                    that.setData({
                        myLocation: location
                    })
                },
                fail: function (res) {
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