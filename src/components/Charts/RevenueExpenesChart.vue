<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {
  Chart,
  LineElement,
  PointElement,
  LineController,
  LinearScale,
  CategoryScale,
  Tooltip
} from 'chart.js'

import * as c from './chart.config.js'

// const props = defineProps({
//   data: {
//     type: Object,
//     required: true
//   }
// })

const data = [12000, 15000, 18000, 20000, 22000]
const data2 = [8000, 9000, 10000, 12000, 14000]
const labels = ['January', 'February', 'March', 'April', 'May']

const Datasets = [
  {
    label: 'Revenue',
    data: data,
    backgroundColor: 'rgba(75, 192, 192, 0.6)',
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1
  },
  {
    label: 'Expenses',
    data: data2,
    backgroundColor: 'rgba(255, 99, 132, 0.6)',
    borderColor: 'rgba(255, 99, 132, 1)',
    borderWidth: 1
  }
]

const chartData = c.sampleChartData(Datasets, labels)
const root = ref(null)

let chart

Chart.register(LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'line',
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: false
        },
        x: {
          display: true
        }
      },
      plugins: {
        legend: {
           display: true,
          position: 'top',
        }
      }
    }
  })
})

const computedChartData1 = computed(() => chartData)

watch(computedChartData1, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root" />
</template>
