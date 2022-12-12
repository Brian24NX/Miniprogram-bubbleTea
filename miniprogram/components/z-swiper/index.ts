// components/z-swiper/index.ts
import {SwiperData} from './types'

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
    }

  }
})
