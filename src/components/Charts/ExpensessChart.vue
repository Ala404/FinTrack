<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { Chart, LineElement, PointElement, LineController, LinearScale, CategoryScale, Tooltip } from 'chart.js'
import * as chartConfig from '@/components/Charts/chart.config.js'

const data = [1000, 900, 500, 800, 400]
const labels = ['January', 'February', 'March', 'April', 'May']

const datasets = [{
  label: 'Expenses',
  data,
  borderColor: 'red',
  backgroundColor: 'red',
  fill: false
}]

const chartData = chartConfig.sampleChartData(datasets, labels)


const root = ref(null)
let chart

// const mockData = {
//   labels: ['Point 1', 'Point 2', 'Point 3', 'Point 4', 'Point 5', 'Point 6', 'Point 7', 'Point 8', 'Point 9'],
//   datasets: [{
//     label: 'Mock Data',
//     data: [10, 20, 30, 40, 50, 60, 70, 80, 90],
//     borderColor: 'yellow',
//     backgroundColor: 'yellow',
//     fill: false
//   }]
// }

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

const computedChartData = computed(() => chartData)

watch(computedChartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root"></canvas>
</template>
