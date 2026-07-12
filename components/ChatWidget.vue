<template>
  <div class="chat-widget" :class="{ 'chat-open': isOpen }">
    <button class="chat-fab" @click="toggleChat" :aria-label="isOpen ? 'Close chat' : 'Open chat'">
      <svg v-if="!isOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="24" height="24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
    </button>

    <Transition name="chat-panel">
      <div v-if="isOpen" class="chat-panel">
        <div class="chat-header">
          <div class="chat-header-info">
            <div class="chat-avatar">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <div>
              <strong>NemesisBot</strong>
              <span class="chat-status">Online</span>
            </div>
          </div>
          <button class="chat-close-btn" @click="toggleChat" aria-label="Close chat">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="18" height="18"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
          </button>
        </div>

        <div class="chat-messages" ref="messagesContainer">
          <div class="chat-welcome" v-if="messages.length === 0">
            <div class="chat-welcome-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="32" height="32"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h4>Hey! I'm NemesisBot</h4>
            <p>Ask me about NemesisNet's services, projects, pricing, or capabilities.</p>
          </div>

          <div v-for="(msg, i) in messages" :key="i" class="chat-msg" :class="'chat-msg--' + msg.role">
            <div class="chat-msg-content" v-html="formatMessage(msg.content)"></div>
          </div>

          <div v-if="isLoading" class="chat-msg chat-msg--model">
            <div class="chat-typing">
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>

        <form class="chat-input" @submit.prevent="sendMessage">
          <input
            v-model="input"
            type="text"
            placeholder="Ask about NemesisNet..."
            :disabled="isLoading"
            maxlength="2000"
            ref="inputField"
          />
          <button type="submit" :disabled="isLoading || !input.trim()" aria-label="Send message">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
          </button>
        </form>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const isOpen = ref(false)
const input = ref('')
const messages = ref([])
const isLoading = ref(false)
const messagesContainer = ref(null)
const inputField = ref(null)

const toggleChat = () => {
  isOpen.value = !isOpen.value
  if (isOpen.value) {
    nextTick(() => inputField.value?.focus())
  }
}

const scrollToBottom = () => {
  nextTick(() => {
    if (messagesContainer.value) {
      messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight
    }
  })
}

const formatMessage = (text) => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    .replace(/`(.*?)`/g, '<code>$1</code>')
    .replace(/(https?:\/\/[^\s<]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n/g, '<br>')
}

const sendMessage = async () => {
  const msg = input.value.trim()
  if (!msg || isLoading.value) return

  messages.value.push({ role: 'user', content: msg })
  input.value = ''
  isLoading.value = true
  scrollToBottom()

  try {
    const history = messages.value.slice(0, -1).map(m => ({
      role: m.role,
      content: m.content
    }))

    const response = await $fetch('/api/chat', {
      method: 'POST',
      body: { message: msg, history }
    })

    messages.value.push({ role: 'model', content: response?.text || 'Got a response but could not parse it.' })
  } catch {
    messages.value.push({ role: 'model', content: 'Something went wrong. Please try again or contact us at nemesisnet.co.za/contact' })
  } finally {
    isLoading.value = false
    scrollToBottom()
  }
}
</script>

<style scoped>
.chat-widget {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 10001;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.chat-fab {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--accent-color, #2979FF), var(--aurora-base, #00C2A8));
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  box-shadow: 0 4px 20px rgba(41, 121, 255, 0.4), 0 0 0 0 rgba(41, 121, 255, 0.3);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  animation: chat-pulse 3s ease-in-out infinite;
}
.chat-fab:hover {
  transform: scale(1.08);
  box-shadow: 0 6px 28px rgba(41, 121, 255, 0.5);
}
.chat-open .chat-fab {
  animation: none;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.15);
}

@keyframes chat-pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(41, 121, 255, 0.4), 0 0 0 0 rgba(41, 121, 255, 0.3); }
  50% { box-shadow: 0 4px 20px rgba(41, 121, 255, 0.4), 0 0 0 10px rgba(41, 121, 255, 0); }
}

.chat-panel {
  position: absolute;
  bottom: 72px;
  right: 0;
  width: 400px;
  max-height: 560px;
  background: rgba(15, 15, 18, 0.97);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.05), 0 0 60px rgba(41, 121, 255, 0.08);
}

[data-theme="light"] .chat-panel {
  background: rgba(255, 255, 255, 0.97);
  border-color: rgba(0, 0, 0, 0.08);
  box-shadow: 0 20px 80px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);
}

.chat-panel-enter-active { animation: chat-slide-up 0.3s cubic-bezier(0.4, 0, 0.2, 1); }
.chat-panel-leave-active { animation: chat-slide-up 0.2s cubic-bezier(0.4, 0, 0.2, 1) reverse; }

@keyframes chat-slide-up {
  from { opacity: 0; transform: translateY(12px) scale(0.96); }
  to { opacity: 1; transform: translateY(0) scale(1); }
}

.chat-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(41, 121, 255, 0.04);
}
[data-theme="light"] .chat-header {
  border-bottom-color: rgba(0, 0, 0, 0.06);
  background: rgba(41, 121, 255, 0.03);
}

.chat-header-info {
  display: flex;
  align-items: center;
  gap: 10px;
}
.chat-header-info strong {
  color: var(--text-color, #F4F4F4);
  font-size: 0.95rem;
  display: block;
}
.chat-status {
  font-size: 0.75rem;
  color: #00C2A8;
}

.chat-avatar {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: linear-gradient(135deg, rgba(41, 121, 255, 0.2), rgba(0, 194, 168, 0.2));
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--accent-color, #2979FF);
}

.chat-close-btn {
  background: none;
  border: none;
  color: var(--text-muted, rgba(244, 244, 244, 0.6));
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  transition: all 0.2s;
}
.chat-close-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text-color, #F4F4F4);
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-height: 300px;
  max-height: 380px;
  scroll-behavior: smooth;
}
.chat-messages::-webkit-scrollbar { width: 4px; }
.chat-messages::-webkit-scrollbar-track { background: transparent; }
.chat-messages::-webkit-scrollbar-thumb { background: rgba(255, 255, 255, 0.1); border-radius: 4px; }

.chat-welcome {
  text-align: center;
  padding: 24px 12px;
  color: var(--text-muted, rgba(244, 244, 244, 0.82));
}
.chat-welcome-icon {
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(41, 121, 255, 0.15), rgba(0, 194, 168, 0.15));
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 12px;
  color: var(--accent-color, #2979FF);
}
.chat-welcome h4 {
  margin: 0 0 6px;
  color: var(--text-color, #F4F4F4);
  font-size: 1rem;
}
.chat-welcome p {
  margin: 0;
  font-size: 0.85rem;
  line-height: 1.5;
}

.chat-msg {
  max-width: 85%;
  padding: 10px 14px;
  border-radius: 14px;
  font-size: 0.88rem;
  line-height: 1.6;
  word-wrap: break-word;
}
.chat-msg--user {
  align-self: flex-end;
  background: linear-gradient(135deg, var(--accent-color, #2979FF), #1565C0);
  color: #fff;
  border-bottom-right-radius: 4px;
}
.chat-msg--model {
  align-self: flex-start;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-color, #F4F4F4);
  border-bottom-left-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.06);
}
[data-theme="light"] .chat-msg--model {
  background: rgba(0, 0, 0, 0.04);
  border-color: rgba(0, 0, 0, 0.06);
  color: var(--text-color, #1a1a1a);
}
.chat-msg-content :deep(strong) { color: var(--accent-color, #2979FF); }
.chat-msg-content :deep(code) {
  background: rgba(255, 255, 255, 0.08);
  padding: 1px 5px;
  border-radius: 4px;
  font-size: 0.82rem;
}
.chat-msg-content :deep(a) {
  color: var(--accent-color, #2979FF);
  text-decoration: underline;
  text-underline-offset: 2px;
}
.chat-msg-content :deep(a:hover) {
  opacity: 0.8;
}

.chat-typing {
  display: flex;
  gap: 4px;
  padding: 4px 0;
}
.chat-typing span {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent-color, #2979FF);
  opacity: 0.4;
  animation: typing-bounce 1.4s ease-in-out infinite;
}
.chat-typing span:nth-child(2) { animation-delay: 0.2s; }
.chat-typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes typing-bounce {
  0%, 60%, 100% { transform: translateY(0); opacity: 0.4; }
  30% { transform: translateY(-6px); opacity: 1; }
}

.chat-input {
  display: flex;
  gap: 8px;
  padding: 12px 14px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  background: rgba(0, 0, 0, 0.2);
}
[data-theme="light"] .chat-input {
  border-top-color: rgba(0, 0, 0, 0.06);
  background: rgba(0, 0, 0, 0.02);
}
.chat-input input {
  flex: 1;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 10px 14px;
  color: var(--text-color, #F4F4F4);
  font-size: 0.88rem;
  outline: none;
  transition: border-color 0.2s;
}
[data-theme="light"] .chat-input input {
  background: rgba(0, 0, 0, 0.03);
  border-color: rgba(0, 0, 0, 0.1);
  color: var(--text-color, #1a1a1a);
}
.chat-input input::placeholder {
  color: var(--text-muted, rgba(244, 244, 244, 0.4));
}
.chat-input input:focus {
  border-color: var(--accent-color, #2979FF);
}
.chat-input button {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: var(--accent-color, #2979FF);
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transition: all 0.2s;
  flex-shrink: 0;
}
.chat-input button:hover:not(:disabled) {
  background: var(--accent-hover, #2979FF);
  transform: scale(1.05);
}
.chat-input button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

@media (max-width: 480px) {
  .chat-widget { bottom: 16px; right: 16px; }
  .chat-panel {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    top: 0;
    width: 100%;
    max-height: 100%;
    border-radius: 0;
  }
  .chat-close-btn {
    display: flex !important;
    min-width: 32px;
    min-height: 32px;
    align-items: center;
    justify-content: center;
  }
  .chat-header {
    padding: 12px 14px;
    flex-shrink: 0;
  }
  .chat-header-info {
    min-width: 0;
    flex: 1;
  }
  .chat-header-info strong {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
