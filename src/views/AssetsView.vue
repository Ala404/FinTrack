<script setup>
import { reactive, ref } from 'vue'
import { mdiHandCoin, mdiAccount } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/CardBox.vue'
import FormCheckRadioGroup from '@/components/FormCheckRadioGroup.vue'
import FormFilePicker from '@/components/FormFilePicker.vue'
import FormField from '@/components/FormField.vue'
import FormControl from '@/components/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/BaseButton.vue'
import BaseButtons from '@/components/BaseButtons.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import NotificationBarInCard from '@/components/NotificationBarInCard.vue'

const assetTypeOptions = [
  { id: 1, label: 'Fixed Asset' },
  { id: 2, label: 'Current Asset' },
  { id: 3, label: 'Intangible Asset' }
]

const depreciationMethodOptions = [
  {id: 1, label: 'Straight Line'},
  {id: 2, label: 'Declining Balance'},
]


const form = reactive({
  assetName: '',
  assetType: assetTypeOptions[0],
  date: '',
  acquisitionDate: '',
  purchasePrice: '',
  salvageValue: '',
  usefulLife: '',
  depreciationMethod: depreciationMethodOptions[0]
})

const customElementsForm = reactive({
  checkbox: ['lorem'],
  radio: 'one',
  switch: ['one'],
  file: null
})

const submit = () => {
  //
}

const formStatusWithHeader = ref(true)

const formStatusCurrent = ref(0)

const formStatusOptions = ['info', 'success', 'danger', 'warning']

const formStatusSubmit = () => {
  formStatusCurrent.value = formStatusOptions[formStatusCurrent.value + 1]
    ? formStatusCurrent.value + 1
    : 0
}
</script>

<template>
  <LayoutAuthenticated>
    <SectionMain>
      <SectionTitleLineWithButton :icon="mdiHandCoin" title="Add your Assets" main color="bg-red-400">
      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
        <FormField label="Name and Type">
          <FormControl v-model="form.assetName" placeholder="Your Asset Name" />
          <FormControl v-model="form.assetType" :options="assetTypeOptions" />
        </FormField>

        <FormField
          label="Acquisition Date and Purchase Price"
        >
          <FormControl v-model="form.acquisitionDate" type="date" />
          <FormControl  v-model="form.purchasePrice" type="number"  placeholder="Enter purchase price" />
        </FormField>

        <FormField
          label="Salvage Value"
          help="Estimated value of the asset at the end of its useful life"
        >
          <FormControl v-model="form.salvageValue" type="number"  placeholder="Enter salvage value" />
        </FormField>

        <FormField label="Useful Life" help="Expected lifespan of the asset">
          <FormControl v-model="form.usefulLife" placeholder="Enter useful life" />
        </FormField>

        <FormField
          label="Depreciation Method"
          help="Method used to allocate the asset's cost over its useful life (e.g., straight-line, declining balance)"
        >
          <FormControl v-model="form.depreciationMethod" placeholder="Enter depreciation method" :options="depreciationMethodOptions" />
        </FormField>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Submit" />
            <BaseButton type="reset" color="info" outline label="Reset" />
          </BaseButtons>
        </template>
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
