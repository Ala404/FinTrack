<script setup>
import {  ref, onMounted } from 'vue'
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

onMounted(() => {
  fillChartData()
})


</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
    <SectionTitleLineWithButton :icon="mdiChartPie" title="Expesnses">
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

        <CardBox class="mb-6">
          <div v-if="chartData">
            <line-chart-expensess :data="chartData" class="h-96"/>
          </div>
        </CardBox>

    </SectionMain>
  </LayoutAuthenticated>
</template>
