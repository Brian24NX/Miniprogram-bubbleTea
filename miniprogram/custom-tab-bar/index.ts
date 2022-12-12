import { ErrorMessage } from "../enums/ErrorMessage";

// custom-tab-bar/index.ts
Component({
  /**
   * Component properties
   */
  data: {
    active: 0,
    list:[
    {
      text: 'home',
      image: '../assets/images/tabbar/home.png',
      selectedImage: '../assets/images/tabbar/home-selected.png',
      path: '/pages/index/index'
    },
    {
      text: 'menu',
      image: '../assets/images/tabbar/store.png',
      selectedImage: '../assets/images/tabbar/store-selected.png',
      path: '/pages/menu/index'
    },
    {
      text: 'order',
      image: '../assets/images/tabbar/order.png',
      selectedImage: '../assets/images/tabbar/order-selected.png',
      path: '/pages/order/index'
    },
    {
      text: 'me',
      image: '../assets/images/tabbar/me.png',
      selectedImage: '../assets/images/tabbar/me-selected.png',
      path: '/pages/me/index'
    },
  ]
  },
  methods: {
    onChange(event: {detail:number}) {
      this.setData({
        active: event.detail
      })
      wx.switchTab({
        url: this.data.list[event.detail].path
      })
    },
    init() {
      const currentPage = getCurrentPages().pop()
      if(!currentPage){
        throw new Error(ErrorMessage.INNER_ERROR);
      }
      this.setData(
        {
          active: this.data.list.findIndex(item=>item.path === `/${currentPage.route}`)
        }
      )
    }
  }
})
