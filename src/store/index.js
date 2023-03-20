import { createStore } from 'vuex'

export default createStore({
  state: {
          user:{
              first_name: 'Jon',
              last_name: 'Snow',
              email: 'jon@snow.com.br'
          },
          products: []

  },
  getters: {
  },
  mutations: {
    storeUser(state, data){

      console.log('Teste state',data)
      state.user = data

    },
  },
  actions: {
  },
  modules: {
  }
})
