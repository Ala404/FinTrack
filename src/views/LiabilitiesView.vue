<script setup>
import { reactive, ref } from 'vue'
import { mdiHandExtended, mdiAccount, mdiMail, mdiGithub } from '@mdi/js'
import SectionMain from '@/components/SectionMain.vue'
import CardBox from '@/components/Cards/CardBox.vue'
import FormCheckRadioGroup from '@/components/Forms/FormCheckRadioGroup.vue'
import FormFilePicker from '@/components/Forms/FormFilePicker.vue'
import FormField from '@/components/Forms/FormField.vue'
import FormControl from '@/components/Forms/FormControl.vue'
import BaseDivider from '@/components/BaseDivider.vue'
import BaseButton from '@/components/Buttons/BaseButton.vue'
import BaseButtons from '@/components/Buttons/BaseButtons.vue'
import SectionTitle from '@/components/SectionTitle.vue'
import LayoutAuthenticated from '@/layouts/LayoutAuthenticated.vue'
import SectionTitleLineWithButton from '@/components/SectionTitleLineWithButton.vue'
import NotificationBarInCard from '@/components/NotificationBarInCard.vue'

const selectOptions = [
  { id: 1, label: 'current liability' },
  { id: 2, label: 'long-term liability' }
]

const form = reactive({
  liabilityName: '',
  liabilityType: selectOptions[0],
  incurrenceDate: '',
  amount: '',
  interestRate: '',
  maturityDate: '',
  paymentTerms: ''
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
      <SectionTitleLineWithButton :icon="mdiHandExtended" title="Forms example" main>
      </SectionTitleLineWithButton>
      <CardBox form @submit.prevent="submit">
        <FormField label="Liability Name" help="A descriptive name for the liability.">
          <FormControl v-model="form.liabilityName" placeholder="Enter liability name" />
        </FormField>

        <FormField
          label="Liability Type"
          help="Categorize the liability (e.g., current liability, long-term liability)."
        >
          <FormControl
            v-model="form.liabilityType"
            placeholder="Enter liability type"
            :options="selectOptions"
          />
        </FormField>

        <FormField label="Incurrence Date" help="Date when the liability was incurred.">
          <FormControl v-model="form.incurrenceDate" type="date" />
        </FormField>

        <FormField label="Amount" help="Total amount of the liability.">
          <FormControl v-model="form.amount" type="number" placeholder="Enter amount" />
        </FormField>

        <FormField label="Interest Rate" help="Applicable interest rate, if any.">
          <FormControl
            v-model="form.interestRate"
            type="number"
            placeholder="Enter interest rate"
          />
        </FormField>

        <FormField label="Maturity Date" help="Date when the liability is due.">
          <FormControl v-model="form.maturityDate" type="date" />
        </FormField>

        <FormField label="Payment Terms" help="Terms and conditions for repayment.">
          <FormControl
            v-model="form.paymentTerms"
            type="textarea"
            placeholder="Enter payment terms"
          />
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
