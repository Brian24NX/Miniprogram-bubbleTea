// components/z-swiper/index.ts
import navigator from "../../utils/navigator"

Component({
  /**
   * Component properties
   */
  properties: {
    list: {
      type: Array,
      value: <SwiperData[]> []
    }

  },

  /**
   * Component initial data
   */
  data: {
    current: 0,

  },

  /**
   * Component methods
   */
  methods: {
    onChange (event : {detail : {current: number}}) {
      this.setData({
        current: event.detail.current
      })
    },
    onItemTap(event: ItemParam) {
      const currentItem = event.currentTarget.dataset.item
      navigator.to(currentItem.type, currentItem.target)
    }
  }
})
