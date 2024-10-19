<script setup>
import { computed, ref, onMounted, reactive } from 'vue'
import { useMainStore } from '@/stores/main'
import {
  mdiAccountMultiple,
  mdiCartOutline,
  mdiChartTimelineVariant,
  mdiMonitorCellphone,
  mdiReload,
  mdiGithub,
  mdiChartPie,
  mdiExportVariant
} from '@mdi/js'
import * as chartConfig from '@/components/Charts/chart.config.js'
import LineChart from '@/components/Charts/RevenueExpenesChart.vue'
import SectionMain from '@/components/SectionMain.vue'
import CardBoxWidget from '@/components/CardBoxWidget.vue'
import CardBox from '@/components/CardBox.vue'
import TableSampleClients from '@/components/TableSampleClients.vue'
import NotificationBar from '@/components/NotificationBar.vue'
import BaseButton from '@/components/BaseButton.vue'
import CardBoxTransaction from '@/components/CardBoxTransaction.vue'
import CardBoxClient from '@/components/CardBoxClient.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import ChartTwo from '@/components/Charts/CashFlowChart.vue'
import LineChartExpensess from '@/components/Charts/ExpensessChart.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
// import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue'

const chartData = ref(null)
const ExpensesData = ref(null)
const reportsModalOneActive = ref(false)
const DataModalOneActive = ref(false)

const exportType = reactive( [
  { id: 1, label: 'PDF' },
  { id: 2, label: 'CSV' },
  { id: 3, label: 'EXCEL' }
])

const exportData = ([
  { id: 1, label: 'Revenue' },
  { id: 2, label: 'Expenses' },
  { id: 3, label: 'Profit' },
  { id: 4, label: 'Cash Flow' }
])

const reportsForm = reactive({
 startDate: '',
  endDate: '',
  dataType: exportType[0],
  dataToExport: exportData[0]
})

const fillChartData = () => {
  chartData.value = chartConfig.sampleChartData()
  ExpensesData.value = chartConfig.sampleChartData()
}



onMounted(() => {
  fillChartData()
})

const mainStore = useMainStore()

const clientBarItems = computed(() => mainStore.clients.slice(0, 4))

const transactionBarItems = computed(() => mainStore.history)
</script>

<template>
  <LayoutAuthenticated>
      <CardBoxModal
      v-model="reportsModalOneActive"
      title="add new transaction"
      button-label="Done"
      has-cancel
    >

      <FormField label="Start Date" class="col-span-2">
        <FormControl v-model="reportsForm.startDate" class="flex-1"   />
      </FormField>
      <FormField label="End Date" class="col-span-2">
        <FormControl v-model="reportsForm.endDate" class="flex-1"   />
      </FormField>
      <FormField label="Data Type" class="col-span-2">
        <FormControl v-model="reportsForm.dataType" class="flex-1"   />
      </FormField>
      <FormField label="Data To Export" class="col-span-2">
        <FormControl v-model="reportsForm.dataToExport" class="flex-1"   />
      </FormField>
        <BaseButton
          @click="addTransactionName"
          :icon="mdiPlus"
          label="Add"
          color="info"
          class="text-white "
          rounded
          small
        />
    </CardBoxModal>
     <CardBoxModal
      v-model="DataModalOneActive"
      title="add new transaction"
      button-label="Done"
      has-cancel
    >
      <FormField label="Name" class="col-span-2">
        <FormControl v-model="newAssetName" class="flex-1" placeholder="Your Asset Name"  />
        <BaseButton
          @click="addTransactionName"
          :icon="mdiPlus"
          label="Add"
          color="info"
          class="text-white "
          rounded
          small
        />
      </FormField>
    </CardBoxModal>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="Overview" main>
     <div class="">
           <BaseButton
           @click="reportsModalOneActive = true"
            href=""
            target="_blank"
            :icon="mdiExportVariant"
            label="Export Reports"
            color="gray"
            rounded-full
            small

          />
          <BaseButton
            @click="DataModalOneActive = true"
            href=""
            target="_blank"
            :icon="mdiExportVariant"
            label="Export Data"
            color="gray"
            rounded-full
            small

          />
     </div>

      </SectionTitleLineWithButton>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-4 mb-6">
        <CardBoxWidget
          trend="12%"
          trend-type="up"
          color="text-emerald-500"
          :icon="mdiChartTimelineVariant"
          :number="9950"
          prefix="$"
          label="Total Revenue"
        />
          <CardBoxWidget
          trend="10%"
          trend-type="down"
          color="text-red-500"
          :icon="mdiCartOutline"
          :number="105"
          prefix="$"
          label="Total Expenses"
        />
        <CardBoxWidget
          trend="12%"
          trend-type="down"
          color="text-blue-500"
          :icon="mdiCartOutline"
          :number="9845"
          prefix="$"
          label="Profit"
        />
        <CardBoxWidget
          trend="15"
          trend-type="up"
          color="text-red-500"
          :icon="mdiChartTimelineVariant"
          :number="256"
          prefix="$"
          label="Cash Flow"
        />
      </div>

      <SectionTitleLineWithButton :icon="mdiChartPie" title="Trends overview">
        <!-- <BaseButton :icon="mdiReload" color="whiteDark" @click="fillChartData" /> -->
      </SectionTitleLineWithButton>

   <div class="grid grid-cols-1 gap-6 lg:grid-cols-2 mb-6 items-center">
        <CardBox class="mb-6">
          <div v-if="chartData">
            <line-chart :data="chartData" class="h-96" />
          </div>
        </CardBox>


         <CardBox class="mb-6">
          <div v-if="chartData">
            <chart-two :data="chartData" />
          </div>
        </CardBox>
   </div>


    </SectionMain>
  </LayoutAuthenticated>
</template>
