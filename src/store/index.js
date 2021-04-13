import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(user => {
        const newUser = {
          uid: user.uid,
          username: user.name
        }
        commit('setUser', newUser)
      }).catch(err => {
        console.log(err)
      })
    },
    logUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(user => {
        const newUser = {
          uid: user.uid,
        }
        commit('setUser', newUser)
      }).catch(err => {
        console.log(err)
      })
    },
    logUserInWithGoogle ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(user => {
        const newUser = {
          uid: user.uid,
        }
        commit('setUser', newUser)
      }).catch(err => {
        console.log(err)
      })

    },
    logUserInWithFacebook ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(user => {
        const newUser = {
          uid: user.uid,
        }
        commit('setUser', newUser)
      }).catch(err => {
        console.log(err)
      })
    },
    signUserUpWithGoogle ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(user => {
        const newUser = {
          uid: user.uid,
          username: user.additionalUserInfo.profile.name
        }
        commit('setUser', newUser)
      }).then(err => {
        console.log(err)
      })
    },
    signUserUpWithFacebook ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(user => {
        const newUser = {
          uid: user.uid,
          username: user.additionalUserInfo.profile.name
        }
        commit('setUser', newUser)
      }).then(err => {
        console.log(err)
      })
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  modules: {
  }
})
