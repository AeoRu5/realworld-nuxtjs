import Vue from 'vue'
import dayjs from 'dayjs'

Vue.filter('dateFormatter', (date, format = 'MMM D, YYYY') => {
  return dayjs(date).format(format)
})