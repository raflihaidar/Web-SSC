import { createStore } from 'vuex'
import index from './index'

const store = createStore({
  modules: {
    index
  }
})

export default store
