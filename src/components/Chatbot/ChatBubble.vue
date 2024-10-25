<template>
  <div class="q-pa-md row justify-center ">
    <div style="width: 100%; max-width: 400px; margin-top: 4rem;" >
      <q-chat-message

        v-for="chat in chats"
        :key="chat.message"
        :text="[chat.message]"
        :sent="chat.type === 'chatbot' ? false : true"
      >
      </q-chat-message>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  chats: {
    type: Array,
    required: true
  }
})

const emits = defineEmits(['newMessage', 'newBotResponse'])

const addMessage = (message) => {
  console.log(message)
  emits('newMessage', message)
  // Simulate bot response after user message
  setTimeout(() => {
    const botResponse = generateBotResponse(message)
    emits('newBotResponse', botResponse)
  }, 1000) // Simulate delay for bot response
}

const generateBotResponse = (message) => {
  // Generate a bot response based on the user's message
  return { message: 'This is a bot response to: ' + message.message, type: 'chatbot' }
}
</script>
