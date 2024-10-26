import { defineStore } from 'pinia'
import axios from 'axios'

export const useBudgetStore = defineStore('budget', {
  state: () => ({
    budgets: [],
  }),
  actions: {
    async fetchAll() {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/budgets')
        this.budgets = response.data
      } catch (error) {
        console.error('Error loading budgets data:', error)
      }
    },
    async create(one) {
      try {
        // Replace with your actual API endpoint for creating cash flow
        const res = await axios.post('/api/budgets', one)
        this.budgets.push(res.data)
      } catch (error) {
        console.error('Error adding budgets:', error)
      }
    },
    async update(id, one) {
      try {
        await axios.put(`/api/budgets/${id}`, one)
        const index = this.budgets.findIndex((entry) => entry.id === id)
        if (index !== -1) {
          this.budgets.splice(index, 1, one)
        }
      } catch (error) {
        console.error('Error updating budget:', error)
      }
    },
    async delete(id) {
      try {
        // Replace with your actual API endpoint for deleting cash flow
        await axios.delete(`/api/budgets/${id}`)
        this.budgets = this.budgets.filter((entry) => entry.id !== id)
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