<script setup>
import { reactive, ref } from 'vue'
import { mdiSwapVerticalBold, mdiAccount, mdiPlus } from '@mdi/js'
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
import TableSampleClients from '@/components/TableSampleClients.vue'
import CardBoxModal from '@/components/CardBoxModal.vue'

const modalOneActive = ref(false)
const newAssetName = ref('')

const transactionTypeOptions = [
  { id: 1, label: 'Assets' },
  { id: 2, label: 'Liabilities' },
  { id: 3, label: 'Debt' }
]

const transactionNameOptions =reactive( [
  { id: 1, label: 'Buy smthing' },
  { id: 2, label: 'Sell smthing' },
  { id: 3, label: 'Transfer smthing' }
])


const form = reactive({
  assetName: '',
  assetType: transactionTypeOptions[0],
  date: '',
  price: '',
  amount: ''
})

const submit = () => {
  //
}

const addTransactionName = () => {
  transactionNameOptions.push({ id: transactionNameOptions.length + 1, label: newAssetName })
  console.log(transactionNameOptions)
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
     <CardBoxModal
      v-model="modalOneActive"
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
      <SectionTitleLineWithButton
        :icon="mdiSwapVerticalBold"
        title="Add your Transactions"
        main
        color="bg-red-400"
      >
        <!-- <BaseButton
          @click="AddField"
          :icon="mdiAccount"
          label="Add New Field"
          color="bg-blue-500"
          class="text-white"
          rounded-full
          small
        /> -->
      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
        <div class="grid grid-cols-1 gap-6 lg:grid-cols-6">
          <FormField label="Name" class="col-span-2">
            <FormControl v-model="form.assetName" class="flex-1" placeholder="Your Asset Name" :options="transactionNameOptions" />
            <BaseButton
              @click="modalOneActive = true"
              :icon="mdiPlus"
              label="Add"
              color="info"
              class="text-white "
              rounded
              small
            />
          </FormField>

          <FormField label="Type">
            <FormControl v-model="form.assetType" :options="transactionTypeOptions" />
          </FormField>

          <FormField label="Date">
            <FormControl v-model="form.date" type="date" />
          </FormField>

          <FormField label="Price">
            <FormControl v-model="form.price" type="number" />
          </FormField>

          <FormField label="Amount">
            <FormControl v-model="form.amount" type="number" />
          </FormField>
        </div>

        <template #footer>
          <BaseButtons>
            <BaseButton type="submit" color="info" label="Add" />
            <BaseButton type="reset" color="info" outline label="Reset" />
          </BaseButtons>
        </template>
      </CardBox>

      <BaseDivider class="my-6" />

      <CardBox class="mb-6" has-table>
        <TableSampleClients checkable />
      </CardBox>
    </SectionMain>
  </LayoutAuthenticated>
</template>
