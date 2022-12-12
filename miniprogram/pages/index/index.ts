// pages/index/index.ts
Page({

  /**
   * Page initial data
   */
  data: {
    swiperList: []

  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad() {
    wx.request({
      url: 'https://mock.apifox.cn/m1/1646135-0-default/page/home',
      method: 'GET',
      success: (res) => {
        this.setData({
          swiperList: res.data.swiper
        })
      }
    })
  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady() {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow() {
    this.getTabBar().init()

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide() {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload() {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh() {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom() {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})