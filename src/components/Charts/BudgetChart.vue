

<script setup>
import { ref, onMounted, watch } from 'vue'
import { Chart, PieController, ArcElement, Legend, Tooltip } from 'chart.js'
import * as ch from './chart.config.js'


const data = [450, 400, 350, 250, 800, 200, 90, 150, 650]
const  labels = ['Savings', 'Entertainment', 'Food', 'Transportation', 'Housing', 'Utilities', 'Health', 'Miscellaneous', 'Investments']

const chartDatasets = [
  {
    label: 'Budget',
    data: data,
    backgroundColor: [
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)',
      'rgba(75, 192, 192, 0.6)',
      'rgba(153, 102, 255, 0.6)',
      'rgba(255, 159, 64, 0.6)',
      'rgba(255, 99, 132, 0.6)',
      'rgba(54, 162, 235, 0.6)',
      'rgba(255, 206, 86, 0.6)'
    ],
    borderColor: [
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)',
      'rgba(255, 99, 132, 1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)'
    ],
    borderWidth: 1
  }
]
 const chartData = ch.sampleChartData(chartDatasets, labels)

const root = ref(null)

let chart

Chart.register(PieController, ArcElement, Legend, Tooltip)

onMounted(() => {
  chart = new Chart(root.value, {
    type: 'pie',
    data: chartData,
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom'
        }
      }
    }
  })
})

watch(chartData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})

</script>

<template>

    <canvas ref="root"></canvas>

</template>
