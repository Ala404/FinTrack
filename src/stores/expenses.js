import { defineStore } from 'pinia'
import axios from 'axios'

export const useExpenseStore = defineStore('expense', {
  state: () => ({
    expenses: [],
  }),
  actions: {
    async fetchAll() {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/expenses')
        this.expenses = response.data
      } catch (error) {
        console.error('Error loading expenses data:', error)
      }
    },
    async create(expense) {
      try {
        // Replace with your actual API endpoint for creating cash flow
        const res = await axios.post('/api/expenses', expense)
        this.expenses.push(res.data)
      } catch (error) {
        console.error('Error adding expenses:', error)
      }
    },
    async update(id, expense) {
      try {
        await axios.put(`/api/expenses/${id}`, expense)
        const index = this.expenses.findIndex((entry) => entry.id === id)
        if (index !== -1) {
          this.expenses.splice(index, 1, expense)
        }
      } catch (error) {
        console.error('Error updating expense:', error)
      }
    },
    async delete(id) {
      try {
        // Replace with your actual API endpoint for deleting cash flow
        await axios.delete(`/api/expenses/${id}`)
        this.expenses = this.expenses.filter((entry) => entry.id !== id)
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