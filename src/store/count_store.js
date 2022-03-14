import { defineStore } from 'pinia'

export const useCountStore = defineStore('count_store', {
  state () {
    return {
      count: 0
    }
  },
  getters: {},
  actions: {
    increase () {
      this.count++
    }
  }
})
