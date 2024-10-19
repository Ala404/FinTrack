<script setup>
import { computed, ref, onMounted } from 'vue'
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
// import SectionBannerStarOnGitHub from '@/components/SectionBannerStarOnGitHub.vue'

const chartData = ref(null)
const ExpensesData = ref(null)

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
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="Overview" main>
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
