import { defineStore } from 'pinia'
import axios from 'axios'

export const useCashFlowStore = defineStore('cashFlow', {
  state: () => ({
    cashFlows: []
  }),
  getters: {
    totalCashInflow: (state) => state.cashFlows.reduce((sum, entry) => sum + entry.cash_inflow, 0),
    totalCashOutflow: (state) =>
      state.cashFlows.reduce((sum, entry) => sum + entry.cash_outflow, 0),
    totalNetCashFlow: (state) => state.totalCashInflow - state.totalCashOutflow
  },
  actions: {
    async fetchCashFlows() {
      try {
        // Replace with your actual API endpoint
        const response = await axios.get('/api/cash-flow')
        this.cashFlows = response.data
      } catch (error) {
        console.error('Error loading cash flow data:', error)
      }
    },
    async addCashFlow(cashFlow) {
      try {
        // Replace with your actual API endpoint for creating cash flow
        const response = await axios.post('/api/cash-flow', cashFlow)
        this.cashFlows.push(response.data)
      } catch (error) {
        console.error('Error adding cash flow:', error)
      }
    },
    async updateCashFlow(id, updatedCashFlow) {
      try {
        // Replace with your actual API endpoint for updating cash flow
        await axios.put(`/api/cash-flow/${id}`, updatedCashFlow)
        const index = this.cashFlows.findIndex((entry) => entry.id === id)
        if (index !== -1) {
          this.cashFlows.splice(index, 1, updatedCashFlow)
        }
      } catch (error) {
        console.error('Error updating cash flow:', error)
      }
    },
    async deleteCashFlow(id) {
      try {
        // Replace with your actual API endpoint for deleting cash flow
        await axios.delete(`/api/cash-flow/${id}`)
        this.cashFlows = this.cashFlows.filter((entry) => entry.id !== id)
      } catch (error) {
        console.error('Error deleting cash flow:', error)
      }
    }
  }
})
