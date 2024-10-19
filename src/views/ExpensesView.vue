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
import CardBoxModal from '@/components/CardBoxModal.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
// import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue'

const chartData = ref(null)
const ExpensesData = ref(null)
const reportsModalOneActive = ref(false)

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
  ExpensesData.value = chartConfig.sampleChartData()
}

const exportType = [
  { id: 1, label: 'PDF' },
  { id: 2, label: 'CSV' },
  { id: 3, label: 'EXCEL' }
]

const reportsForm = {
  startDate: '',
  endDate: '',
  dataType: exportType[0],
  dataToExport: exportType[0]
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
     <CardBoxModal
      v-model="reportsModalOneActive"
      title="add new transaction"
      button-label="Done"
      has-cancel
      form
    >

      <FormField label="Start Date" class="col-span-2">
        <FormControl  v-model="reportsForm.startDate" type="date" class="flex-1"   />
      </FormField>
      <FormField label="End Date" class="col-span-2">
        <FormControl v-model="reportsForm.endDate" type="date" class="flex-1"   />
      </FormField>
      <FormField label="Data Type" class="col-span-2">
        <FormControl v-model="reportsForm.dataType" class="flex-1"  :options="exportType"  />
      </FormField>

    </CardBoxModal>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChartPie" title="Expenses">
        <BaseButton
          @click="reportsModalOneActive = true"
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
