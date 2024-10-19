<script setup>
import { ref, watch, onMounted } from 'vue'
import { Chart, BarController, BarElement, CategoryScale, LinearScale } from 'chart.js';


// const props = defineProps({
//   data: {
//     type: Object,
//     required: true
//   }
// })

const root = ref(null)
const mockData = ref({
        labels: ['January', 'February', 'March', 'April', 'May'],  // X-axis labels
        datasets: [
          {
            label: 'Revenues',
            data: [12000, 15000, 18000, 20000, 22000],  // Revenues data
            backgroundColor: 'rgba(75, 192, 192, 0.6)',  // Color for revenues
            borderColor: 'rgba(75, 192, 192, 1)',  // Border for revenues
            borderWidth: 1
          },
          {
            label: 'Expenses',
            data: [8000, 9000, 10000, 12000, 14000],  // Expenses data
            backgroundColor: 'rgba(255, 99, 132, 0.6)',  // Color for expenses
            borderColor: 'rgba(255, 99, 132, 1)',  // Border for expenses
            borderWidth: 1
          }
        ]
      })

let chart

Chart.register(BarController, BarElement, CategoryScale, LinearScale)

onMounted(() => {
    chart = new Chart( root.value,{
       type: 'bar',  // Bar chart type
      data:mockData.value ,
      options: {
        scales: {
          y: {
            beginAtZero: true  // Y-axis starts from 0
          }
        },
        responsive: true,  // Responsive chart
        plugins: {
          legend: {
            display: true  // Display the legend
          },
          tooltip: {
            enabled: true  // Tooltips enabled
          }
        }
      }
    });
  }
)

watch(mockData, (data) => {
  if (chart) {
    chart.data = data
    chart.update()
  }
})
</script>

<template>
  <canvas ref="root"></canvas>
</template>
