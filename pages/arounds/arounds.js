Page({
  data: {
    scrollTop: 100,
    posts: [{
      id: 1,
      avatarUrl: 'https://cdn.dribbble.com/users/947358/screenshots/3591096/frog_1x.png',
      nickName: 'Abc',
      message: '本文档将带你一步步创建完成一个微信小程序，并可以在手机上体验该小程序的实际效果。这个小程序的首页将会显示欢迎语以及当前用户的微信头像，点击头像，可以在新开的页面中查看当前小程序的启动日志'
    }, {
      id: 2,
      avatarUrl: 'https://cdn.dribbble.com/users/634508/screenshots/3590356/ducky_walk_dribbble.gif',
      nickName: 'TTT',
      message: 'Colored, sized and positioned entirely with CSS. Vector-based: Looks great at any scale, retina displays, low-dpi display screens. The icon font weighs in at only'
    },{
      id: 3,
      avatarUrl: 'https://cdn.dribbble.com/users/847028/screenshots/3591609/logo_1x.png',
      nickName: 'CCC',
      message: '小程序开发框架的目标是通过尽可能简单、高效的方式让开发者可以在微信中开发具有原生 APP 体验的服务。 框架提供了自己的视图层描述语言 WXML 和 WXSS，以及基于 JavaScript 的逻辑层框架，并在视图层与逻辑层间提供了数据传输和事件系统，可以让开发者可以方便的聚焦于数据与逻辑上。'
    },{
      id: 4,
      avatarUrl: 'https://cdn.dribbble.com/users/1554279/screenshots/3591884/800x600_1x.jpg',
      nickName: 'DDD',
      message: '框架可以让数据与视图非常简单地保持同步。当做数据修改的时候，只需要在逻辑层修改数据，视图层就会做相应的更新。'
    }, {
      id: 5,
      avatarUrl: 'https://cdn.dribbble.com/users/77598/screenshots/3591474/banana_dribbble_1x.png',
      nickName: 'Ailtex',
      message: '新浪网博客频道是全中国最主流，最具人气的博客频道。拥有最耀眼的娱乐明星博客、最知性的名人博客、最动人的情感博客，最自我的草根博客'
    }]
  },
  upper: function (e) {
    console.log(e)
  },
  lower: function (e) {
    console.log(e)
  },
  scroll: function (e) {
    // console.log(e)
  },
  tap: function (e) {
    // console.log(e)
  },
  tapMove: function (e) {
    console.log(e)
  }
})