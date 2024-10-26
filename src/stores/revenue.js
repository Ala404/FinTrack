import { defineStore } from 'pinia'
import axios from 'axios'

export const useRevenueStore = defineStore('revenue', {
  state: () => ({
    revenues: [],
  }),
  actions: {
    async fetchAll() {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/revenues')
        this.revenues = response.data
      } catch (error) {
        console.error('Error loading revenues data:', error)
      }
    },
    async create(one) {
      try {
        // Replace with your actual API endpoint for creating cash flow
        const res = await axios.post('/api/revenues', one)
        this.revenues.push(res.data)
      } catch (error) {
        console.error('Error adding revenues:', error)
      }
    },
    async update(id, expense) {
      try {
        await axios.put(`/api/revenues/${id}`, expense)
        const index = this.revenues.findIndex((entry) => entry.id === id)
        if (index !== -1) {
          this.revenues.splice(index, 1, expense)
        }
      } catch (error) {
        console.error('Error updating revenue:', error)
      }
    },
    async delete(id) {
      try {
        // Replace with your actual API endpoint for deleting cash flow
        await axios.delete(`/api/revenues/${id}`)
        this.revenues = this.revenues.filter((entry) => entry.id !== id)
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