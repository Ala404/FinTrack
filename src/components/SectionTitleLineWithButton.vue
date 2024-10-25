<script setup>
import { mdiCog } from '@mdi/js'
import { useSlots, computed } from 'vue'
import BaseIcon from '@/components/BaseIcon.vue'
import BaseButton from '@/components/Buttons/BaseButton.vue'
import IconRounded from '@/components/IconRounded.vue'

const props = defineProps({
  icon: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'dark'
  },
  main: Boolean
})

const hasSlot = computed(() => useSlots().default)
const classStyle = computed(() => {
  return [props.color, 'mr-2']
})
</script>

<template>
  <section :class="{ 'pt-6': !main }" class="mb-6 flex items-center justify-between">
    <div class="flex items-center justify-start">
      <IconRounded v-if="icon && main" :icon="icon" color="light" class="mr-3" bg />
      <BaseIcon v-else-if="icon" :path="icon" :class="color" size="20" />
      <h1 :class="main ? 'text-3xl' : 'text-2xl'" class="leading-tight">
        {{ title }}
      </h1>
    </div>
    <slot v-if="hasSlot" />
    <!-- <BaseButton v-else :icon="mdiCog" color="whiteDark" /> -->
  </section>
</template>
