import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/database'
import 'firebase/firestore'
import router from "../router";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    newUser: null,
    userInfo: null,
    users: null,
    userPageLoading: false,
    categorii: null
  },
  mutations: {
    newUser (state, payload) {
      state.newUser = payload
    },
    userInfo (state, payload) {
      state.userInfo = payload
    },
    setAllUsers (state, payload) {
      state.users = payload
    },
    setLoading (state, payload) {
      state.userPageLoading = payload
    },
    setCategorii (state, payload) {
      state.categorii = payload
    }
  },
  actions: {
    signUserUp ({commit}, payload) {
      const newUser = {
        userName: payload.username,
        profileImg: "https://firebasestorage.googleapis.com/v0/b/itec-8b9cf.appspot.com/o/FREE-PROFILE-AVATARS.png?alt=media&token=a6b17192-ac3a-44ca-928f-08856f438d15",
      }
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then((cred) => {
        const id = cred.user.uid

        firebase.database().ref('users').push(newUser).then((data) => {
          const newUserWithId = {
            userName: payload.username,
            profileImg: "https://firebasestorage.googleapis.com/v0/b/itec-8b9cf.appspot.com/o/FREE-PROFILE-AVATARS.png?alt=media&token=a6b17192-ac3a-44ca-928f-08856f438d15",
            key: data.key
          }
          firebase.firestore().collection('users').doc(id).set(newUserWithId).then((data) => {
            commit('newUser', newUserWithId)
          }).catch(err => {
            console.log(err)
          })
        }).catch(err => {
          console.log(err)
        })

      }).catch(err => {
        console.log(err)
      })
    },
    logUserIn ({commit}, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(() => {

      }).catch(err => {
        console.log(err)
      })
    },
    logUserInWithGoogle ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(() => {

      }).catch(err => {
        console.log(err)
      })

    },
    logUserInWithFacebook ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(() => {

      }).catch(err => {
        console.log(err)
      })
    },
    signUserUpWithGoogle ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(cred => {
        const id = cred.user.uid

        const newUser = {
          userName: cred.additionalUserInfo.profile.name,
          profileImg: cred.additionalUserInfo.profile.picture
        }
        firebase.database().ref('users').push(newUser).then((data) => {
          const newUserWithId = {
            userName: cred.additionalUserInfo.profile.name,
            profileImg: cred.additionalUserInfo.profile.picture,
            key: data.key
          }
          firebase.firestore().collection('users').doc(id).set(newUserWithId).then((data) => {
            commit('newUser', newUserWithId)
          }).catch(err => {
            console.log(err)
          })
        }).catch(err => {
          console.log(err)
        })

      }).then(err => {
        console.log(err)
      })
    },
    signUserUpWithFacebook ({commit}, payload) {
      firebase.auth().signInWithPopup(payload).then(cred => {
        const id = cred.user.uid

        const newUser = {
          userName: cred.additionalUserInfo.profile.name,
          profileImg: cred.additionalUserInfo.profile.picture.data.url
        }
        firebase.database().ref('users').push(newUser).then((data) => {
          const newUserWithId = {
            userName: cred.additionalUserInfo.profile.name,
            profileImg: cred.additionalUserInfo.profile.picture.data.url,
            key: data.key
          }
          firebase.firestore().collection('users').doc(id).set(newUserWithId).then((data) => {
            commit('newUser', newUserWithId)
          }).catch(err => {
            console.log(err)
          })
        }).catch(err => {
          console.log(err)
        })

      }).then(err => {
        console.log(err)
      })
    },
    autoSignIn ({commit}, payload) {
      firebase.firestore().collection('users').doc(payload.uid).onSnapshot((doc) => {
        if (doc.exists) {
          const userInfo = {
            userName: doc.data().userName,
            email: payload.email,
            profileImg: doc.data().profileImg,
            key: doc.data().key
          }
          commit('userInfo', userInfo)
        } else console.log("Nu exista")
      })
    },
    logout ({commit}) {
      firebase.auth().signOut()
      router.push('/')
      commit('userInfo', null)
    },
    loadUsers ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('users').once('value').then((data) => {
        const users = []
        const obj = data.val()
        for(let key in obj) {
          users.push({
            id: key,
            userName: obj[key].userName,
            profileImg: obj[key].profileImg
          })
        }
        commit('setAllUsers', users)
        commit('setLoading', false)
      }).catch(err => {
            console.log(err)
            commit('setLoading', false)
          })
    },
    loadCategorii ({commit}) {
      commit('setLoading', true)
      firebase.database().ref('categorii').once('value').then((data) => {
        const categorii = []
        const obj = data.val()
        for(let key in obj) {
          categorii.push({
            id: key,
            numeCategorie: obj[key].numeCategorie,
            img: obj[key].img,
            description: obj[key].description
          })
          commit('setCategorii', categorii)
          commit('setLoading', false)
        }
      }).catch(err => {
        commit('setLoading', false)
        console.log(err)
      })
    }
  },
  getters: {
    user (state) {
      return state.userInfo
    },
    someUser (state) {
      return (userId) => {
        return state.users.find((theUser) => {
          return theUser.id === userId
        })
      }
    },
    loading (state) {
      return state.userPageLoading
    },
    categorii (state) {
      return state.categorii
    }
  },
  modules: {
  }
})
