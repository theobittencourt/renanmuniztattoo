<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { t } from '../i18n'

const props = defineProps({
  open: { type: Boolean, default: false },
  waPhone: { type: String, required: true },
})
const emit = defineEmits(['close'])

/* Endpoint opcional (Formspree, n8n, Make, API própria...).
   Sem endpoint configurado, o lead é enviado pelo WhatsApp já formatado,
   de forma que nenhum contato se perca. */
const LEAD_ENDPOINT = import.meta.env.VITE_LEAD_ENDPOINT || ''

const form = ref({ name: '', from: '', instagram: '', phone: '', idea: '' })
const errors = ref({})
const status = ref('idle') // idle | sending | success | error
const fallbackUrl = ref('')
const firstField = ref(null)
const dialog = ref(null)

const isSending = computed(() => status.value === 'sending')

function reset() {
  form.value = { name: '', from: '', instagram: '', phone: '', idea: '' }
  errors.value = {}
  status.value = 'idle'
  fallbackUrl.value = ''
}

function close() {
  emit('close')
}

function validate() {
  const f = form.value
  const next = {}
  if (!f.name.trim()) next.name = t.value.form.required
  if (!f.from.trim()) next.from = t.value.form.required
  if (!f.instagram.trim()) next.instagram = t.value.form.required
  if (!f.phone.trim()) next.phone = t.value.form.required
  else if (f.phone.replace(/\D/g, '').length < 8) next.phone = t.value.form.invalidPhone
  errors.value = next
  return Object.keys(next).length === 0
}

function buildWaUrl() {
  const f = form.value
  const lines = [
    `*${t.value.form.leadHeader}*`,
    `Name: ${f.name}`,
    `From: ${f.from}`,
    `Instagram: ${f.instagram}`,
    `Phone: ${f.phone}`,
  ]
  if (f.idea.trim()) lines.push(`Idea: ${f.idea.trim()}`)
  return `https://api.whatsapp.com/send?phone=${props.waPhone}&text=${encodeURIComponent(lines.join('\n'))}`
}

async function submit() {
  if (isSending.value || !validate()) return

  const waUrl = buildWaUrl()

  if (!LEAD_ENDPOINT) {
    // Sem backend: abre o WhatsApp direto no clique (não é bloqueado pelo browser)
    window.open(waUrl, '_blank', 'noopener')
    fallbackUrl.value = waUrl
    status.value = 'success'
    return
  }

  status.value = 'sending'
  try {
    const res = await fetch(LEAD_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...form.value,
        locale: 'en',
        source: 'renanmuniztattoo.site',
        sentAt: new Date().toISOString(),
      }),
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    fallbackUrl.value = waUrl
    status.value = 'success'
  } catch {
    fallbackUrl.value = waUrl
    status.value = 'error'
  }
}

function onKeydown(e) {
  if (e.key === 'Escape') close()
}

watch(
  () => props.open,
  (open) => {
    if (open) {
      reset()
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', onKeydown)
      nextTick(() => firstField.value?.focus())
    } else {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeydown)
    }
  }
)

onBeforeUnmount(() => {
  document.body.style.overflow = ''
  window.removeEventListener('keydown', onKeydown)
})
</script>

<template>
  <Teleport to="body">
    <Transition name="lead-fade">
      <div
        v-if="open"
        class="fixed inset-0 z-[60] flex items-start sm:items-center justify-center overflow-y-auto bg-black/80 backdrop-blur-sm p-4 sm:p-6"
        @click.self="close"
      >
        <div
          ref="dialog"
          role="dialog"
          aria-modal="true"
          :aria-label="t.form.title"
          class="relative w-full max-w-md my-auto bg-[#0c0c0c] border border-white/10 p-6 sm:p-8"
          style="clip-path: polygon(0 0, 100% 0, 100% 96%, 96% 100%, 0 100%);"
        >
          <button
            type="button"
            :aria-label="t.form.close"
            class="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white/35 hover:text-white transition-colors"
            @click="close"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <!-- SUCESSO -->
          <div v-if="status === 'success'" class="text-center py-6">
            <div class="w-14 h-14 mx-auto mb-6 rounded-full bg-[#e81414]/10 border border-[#e81414]/30 flex items-center justify-center">
              <svg class="w-7 h-7 text-[#e81414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 class="font-display text-3xl uppercase tracking-wide mb-3">{{ t.form.successTitle }}</h3>
            <p class="text-white/40 text-sm leading-relaxed mb-7">{{ t.form.successText }}</p>
            <a
              :href="fallbackUrl" target="_blank" rel="noopener"
              class="inline-flex items-center justify-center gap-2 w-full bg-[#25d366] text-black font-bold px-6 py-3.5 text-[12px] uppercase tracking-widest hover:bg-green-400 transition-colors"
            >
              {{ t.form.successWa }}
            </a>
          </div>

          <!-- FORMULÁRIO -->
          <form v-else novalidate @submit.prevent="submit">
            <div class="flex items-center gap-3 mb-4">
              <div class="h-px w-8 bg-[#e81414]"></div>
              <span class="text-[#e81414] text-[10px] font-bold tracking-[0.4em] uppercase">{{ t.form.eyebrow }}</span>
            </div>

            <h3 class="font-display text-[2.2rem] leading-[0.95] uppercase tracking-wide mb-2">{{ t.form.title }}</h3>
            <p class="text-white/35 text-sm leading-relaxed mb-7">{{ t.form.subtitle }}</p>

            <div class="space-y-4">
              <div>
                <label for="lead-name" class="block text-white/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{{ t.form.name }}</label>
                <input
                  id="lead-name" ref="firstField" v-model="form.name" type="text" autocomplete="name"
                  :placeholder="t.form.namePlaceholder"
                  class="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#e81414] focus:outline-none transition-colors"
                />
                <p v-if="errors.name" class="text-[#e81414] text-xs mt-1.5">{{ errors.name }}</p>
              </div>

              <div>
                <label for="lead-from" class="block text-white/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{{ t.form.from }}</label>
                <input
                  id="lead-from" v-model="form.from" type="text" autocomplete="country-name"
                  :placeholder="t.form.fromPlaceholder"
                  class="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#e81414] focus:outline-none transition-colors"
                />
                <p v-if="errors.from" class="text-[#e81414] text-xs mt-1.5">{{ errors.from }}</p>
              </div>

              <div>
                <label for="lead-instagram" class="block text-white/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{{ t.form.instagram }}</label>
                <input
                  id="lead-instagram" v-model="form.instagram" type="text" autocapitalize="none" spellcheck="false"
                  :placeholder="t.form.instagramPlaceholder"
                  class="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#e81414] focus:outline-none transition-colors"
                />
                <p v-if="errors.instagram" class="text-[#e81414] text-xs mt-1.5">{{ errors.instagram }}</p>
              </div>

              <div>
                <label for="lead-phone" class="block text-white/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{{ t.form.phone }}</label>
                <input
                  id="lead-phone" v-model="form.phone" type="tel" autocomplete="tel" inputmode="tel"
                  :placeholder="t.form.phonePlaceholder"
                  class="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#e81414] focus:outline-none transition-colors"
                />
                <p v-if="errors.phone" class="text-[#e81414] text-xs mt-1.5">{{ errors.phone }}</p>
              </div>

              <div>
                <label for="lead-idea" class="block text-white/45 text-[11px] font-bold tracking-[0.2em] uppercase mb-2">{{ t.form.idea }}</label>
                <textarea
                  id="lead-idea" v-model="form.idea" rows="3"
                  :placeholder="t.form.ideaPlaceholder"
                  class="w-full bg-[#111] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/20 focus:border-[#e81414] focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
            </div>

            <p v-if="status === 'error'" class="mt-5 text-white/45 text-xs leading-relaxed">
              {{ t.form.errorText }}
              <a :href="fallbackUrl" target="_blank" rel="noopener" class="text-[#25d366] font-semibold underline underline-offset-2">WhatsApp</a>
            </p>

            <button
              type="submit"
              :disabled="isSending"
              class="mt-6 w-full bg-[#e81414] text-white font-bold px-6 py-4 text-[13px] uppercase tracking-widest hover:bg-red-700 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
            >
              {{ isSending ? t.form.sending : t.form.submit }}
            </button>

            <p class="mt-4 text-white/20 text-[11px] leading-relaxed text-center">{{ t.form.privacy }}</p>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lead-fade-enter-active,
.lead-fade-leave-active {
  transition: opacity 0.25s ease;
}
.lead-fade-enter-from,
.lead-fade-leave-to {
  opacity: 0;
}
</style>
