import { defineStore } from 'pinia'
import axios from 'axios'

export const useProfitStore = defineStore('profit', {
  state: () => ({
    profits: [],
  }),
  actions: {
    async fetchAll() {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/profits')
        this.profits = response.data
      } catch (error) {
        console.error('Error loading profits data:', error)
      }
    },
    async create(one) {
      try {
        // Replace with your actual API endpoint for creating cash flow
        const res = await axios.post('/api/profits', one)
        this.profits.push(res.data)
      } catch (error) {
        console.error('Error adding profits:', error)
      }
    },
    async update(id, one) {
      try {
        await axios.put(`/api/profits/${id}`, one)
        const index = this.profits.findIndex((entry) => entry.id === id)
        if (index !== -1) {
          this.profits.splice(index, 1, one)
        }
      } catch (error) {
        console.error('Error updating expense:', error)
      }
    },
    async delete(id) {
      try {
        // Replace with your actual API endpoint for deleting cash flow
        await axios.delete(`/api/profits/${id}`)
        this.profits = this.profits.filter((entry) => entry.id !== id)
      } catch (error) {
        console.error('Error deleting cash flow:', error)
      }
    },
  },
  getters: {
    // totalCashInflow: (state) =>
    //   state.expenses.reduce((sum, entry) => sum + entry.cash_inflow, 0),
    // totalCashOutflow: (state) =>
    //   state.expenses.reduce((sum, entry) => sum + entry.cash_outflow, 0),
    // totalNetCashFlow: (state) =>
    //   state.totalCashInflow - state.totalCashOutflow,
  },
})