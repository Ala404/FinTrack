import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => ({
    transactionsData: [],
    userName: 'Aladin',
    userEmail: 'doe.doe.doe@example.com',
    isFieldFocusRegistered: false,
    clients: [],
    history: []
  }),

  getters: {
    userAvatar: (state) =>
      `https://api.dicebear.com/7.x/avataaars/svg?seed=${state.userEmail.replace(
        /[^a-z0-9]+/gi,
        '-'
      )}`
  },

  actions: {
    async fetchTransactions() {
      try {
        const response = await fetch('/data.json')
        const data = await response.json()
        this.transactionsData = data.slice(0, 20)
      } catch (error) {
        console.error('Error loading transactions data:', error)
      }
    },

    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name
      }
      if (payload.email) {
        this.userEmail = payload.email
      }
    },

    async fetchSampleClients() {
      try {
        const result = await axios.get(`data-sources/clients.json?v=3`)
        this.clients = result?.data?.data
      } catch (error) {
        alert(error.message)
      }
    },

    async fetchSampleHistory() {
      try {
        const result = await axios.get(`data-sources/history.json`)
        this.history = result?.data?.data
      } catch (error) {
        alert(error.message)
      }
    }
  },

  persist: true
})
