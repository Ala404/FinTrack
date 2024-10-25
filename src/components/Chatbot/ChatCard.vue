<template>
  <q-card class="my-card mb-96 w-64 sm:w-72 md:w-96 h-64 sm:h-72 md:h-96 relative overflow-y-scroll pb-12">
  <div class="fixed z-30 w-full">
      <q-item class=" bg-slate-200  ">
        <q-item-section avatar>
          <q-avatar>
            <img
              src="https://chat-gpt-5.ai/wp-content/uploads/2023/08/GPTBot.jpeg"
              class="w-12 object-contain"
            />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>ChatBot</q-item-label>
          <q-item-label caption>FinTrack Assistant</q-item-label>
        </q-item-section>
      </q-item>
  </div>

    <q-item-section class="">
      <ChatBubble :chats="chats" @newMessage="handleNewMessage" @newBotResponse="handleNewMessage" />
    </q-item-section>
    <form @submit.prevent="" class="flex fixed bottom-5 w-full items-center bg-white drop-shadow-md justify-evenly ">
      <input v-model="text" type="text" class="flex-1 border-1 border-gray-500 rounded w-3/5 " />

      <q-card-actions>
        <q-btn flat @click="send" type="submit" class="text-subtitle2 bg-violet-500 text-white">Send</q-btn>
      </q-card-actions>
    </form>
  </q-card>
</template>

<script setup>
import ChatBubble from './ChatBubble.vue'
import { ref } from 'vue'

const chats = ref([
  { message: 'Hi! How are you?', type: 'chatbot' },
  { message: 'Hello, im fine, thanks.', type: 'person', timestamp: '3:46 PM' }
])
const text = ref('')

const handleNewMessage = (message) => {
  chats.value.push(message)
}

const send = () => {
  const newMessage = { message: text.value, type: 'person' }
  handleNewMessage(newMessage)
  text.value = ''
  console.log(newMessage)
}
</script>
