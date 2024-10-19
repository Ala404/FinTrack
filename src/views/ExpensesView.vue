<script setup>
import { ref, onMounted } from 'vue'
import {
  mdiChartPie,
  mdiExportVariant
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import BaseButton from '@/components/BaseButton.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import LineChartExpensess from '@/components/Charts/ExpensessChart.vue'
// import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue'

const chartData = ref(null)
const ExpensesData = ref(null)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
  ExpensesData.value = chartConfig.sampleChartData()
}

const expensess = [
  { id: 1, label: 'Rent', amount: 1000 },
  { id: 2, label: 'Utilities', amount: 500 },
  { id: 3, label: 'Groceries', amount: 800 },
  { id: 4, label: 'Transportation', amount: 400 }
]

onMounted(() => {
  fillChartData()
})
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChartPie" title="Expenses">
        <BaseButton
          href=""
          target="_blank"
          :icon="mdiExportVariant"
          label="Export Data"
          color="gray"
          rounded-full
          small
        />
      </SectionTitleLineWithButton>
<div class="">
<CardBox class="mb-6">
          <div v-if="expensess">
            <h2 class="text-lg font-semibold mb-4">Different Kinds of Expenses</h2>
            <ul>
              <li v-for="expense in expensess" :key="expense.id">
                <div class="flex justify-between border-y p-2">
                  <span>{{ expense.label }}</span>
                  <span>{{ expense.amount }}</span>
                </div>
              </li>
            </ul>
          </div>
        </CardBox>

        <CardBox class="mb-6">
          <div v-if="chartData">
            <line-chart-expensess :data="chartData" class="h-96"/>
          </div>
        </CardBox>

</div>
    </SectionMain>
  </LayoutAuthenticated>
</template>
