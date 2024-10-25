<template>
  <div class="q-pa-md row justify-center">
    <div style="width: 100%; max-width: 400px">
      <q-chat-message v-for="chat in chats" :key="chat.message" :text="chat.message"> </q-chat-message>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'

const props = defineProps({
  chats: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['newMessage'])

const addMessage = (message) => {
  console.log(message)
  emits('newMessage', message)
}
onMounted(() => {
  console.log(
    'chats from child',
    props.chats.map((chat) => chat.message)
  )
})

const userChats = computed(() => props.chats.filter((chat) => chat.type === 'person'))
const botChats = computed(() => props.chats.filter((chat) => chat.type === 'chatbot'))

const ChatBotMsges = userChats.value.map((chat) => chat.message)
const ChatUserMsges = botChats.value.map((chat) => chat.message)
</script>
