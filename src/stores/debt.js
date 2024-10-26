import { defineStore } from 'pinia'
import axios from 'axios'

export const useDebtStore = defineStore('debts', {
  state: () => ({
    debts: [],
  }),
  actions: {
    async fetchAll() {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/debts')
        this.debts = response.data
      } catch (error) {
        console.error('Error loading debts data:', error)
      }
    },
    async create(one) {
      try {
        // Replace with your actual API endpoint for creating cash flow
        const res = await axios.post('/api/debts', one)
        this.debts.push(res.data)
      } catch (error) {
        console.error('Error adding debts:', error)
      }
    },
    async update(id, one) {
      try {
        await axios.put(`/api/debts/${id}`, one)
        const index = this.debts.findIndex((entry) => entry.id === id)
        if (index !== -1) {
          this.debts.splice(index, 1, one)
        }
      } catch (error) {
        console.error('Error updating debts:', error)
      }
    },
    async delete(id) {
      try {
        // Replace with your actual API endpoint for deleting cash flow
        await axios.delete(`/api/debts/${id}`)
        this.debts = this.debts.filter((entry) => entry.id !== id)
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