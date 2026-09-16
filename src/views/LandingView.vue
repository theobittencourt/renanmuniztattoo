<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import LeadFormModal from '../components/LeadFormModal.vue'
import { isEn, locale, t, toggleLocale } from '../i18n'

const WA_PHONE = '5521976336934'
const WA_URL =
  'https://api.whatsapp.com/send?phone=5521976336934&text=Opa%2C%20e%20ai%20blz%20Renan%2C%20quero%20um%20or%C3%A7amento'
const IG_URL  = 'https://www.instagram.com/renanmuniz.tattoo/'
const MAP_URL = 'https://maps.google.com/?q=Av.+L%C3%BAcio+Meira%2C+210%2C+Teresópolis+RJ'
const STREET_VIEW_URL = 'https://www.google.com/maps/@-22.4127215,-42.9694273,3a,75y,124.29h,90t/data=!3m5!1e1!3m3!1sU6pbERUI8lrleu9JggUHaw!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D0%26panoid%3DU6pbERUI8lrleu9JggUHaw%26yaw%3D124.28642?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D'

/* Em inglês os CTAs abrem o formulário de captação de leads.
   O botão flutuante do WhatsApp continua sendo link direto nos dois idiomas. */
const leadOpen = ref(false)
function onCta(e) {
  if (!isEn.value) return
  e.preventDefault()
  leadOpen.value = true
}

const scrolled = ref(false)
function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

onMounted(() => {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const delay = parseInt(e.target.dataset.delay || '0')
          setTimeout(() => e.target.classList.add('is-revealed'), delay)
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => obs.observe(el))
})

const portfolio = [
  { src: '/thumb1.png',    reel: 'https://www.instagram.com/reel/DOrW9L9DjnT/' },
  { src: '/thumb2.png',    reel: 'http://instagram.com/reel/DPjU425Djtk/'      },
  { src: '/thumb3.png',    reel: 'https://www.instagram.com/reel/DS0vYJTDrwc/' },
  { src: '/fusion/1.jpeg', reel: 'https://www.instagram.com/renanmuniz.tattoo/' },
  { src: '/fusion/2.jpeg', reel: 'https://www.instagram.com/renanmuniz.tattoo/' },
  { src: '/fusion/3.jpeg', reel: 'https://www.instagram.com/renanmuniz.tattoo/' },
  { src: '/fusion/4.jpeg', reel: 'https://www.instagram.com/renanmuniz.tattoo/' },
]
</script>

<template>
  <div class="min-h-screen bg-[#080808] text-white overflow-x-hidden">

    <!-- LEAD FORM (EN) -->
    <LeadFormModal :open="leadOpen" :wa-phone="WA_PHONE" @close="leadOpen = false" />

    <!-- FLOATING WA (desktop) -->
    <a
      :href="WA_URL" target="_blank" rel="noopener"
      class="hidden md:flex fixed bottom-8 right-8 z-50 items-center gap-3 bg-[#25d366] text-black font-bold px-5 py-3 rounded-full shadow-xl shadow-green-950/60 hover:scale-105 active:scale-95 transition-transform duration-200 text-sm"
    >
      <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      {{ t.floatingWa }}
    </a>

    <!-- MOBILE FLOATING WA (icon only, bottom-right) -->
    <a
      :href="WA_URL" target="_blank" rel="noopener"
      class="md:hidden fixed bottom-6 right-5 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-xl shadow-green-950/50 active:scale-95 transition-transform duration-200"
      :aria-label="t.floatingWa"
    >
      <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>

    <!-- ─── NAV ─────────────────────────────────────────────────────── -->
    <header
      :class="[
        'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
        scrolled ? 'bg-[#080808]/95 backdrop-blur-md border-b border-white/5' : '',
      ]"
    >
      <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" class="font-display text-2xl tracking-[0.25em] text-white">
          RM<span class="text-[#e81414]">.</span>
        </a>
        <nav class="hidden md:flex items-center gap-8 text-[12px] font-bold tracking-[0.2em] uppercase text-white/40">
          <a href="#portfolio"   class="hover:text-white transition-colors duration-200">{{ t.nav.portfolio }}</a>
          <a href="#estudio"     class="hover:text-white transition-colors duration-200">{{ t.nav.studio }}</a>
          <a href="#processo"    class="hover:text-white transition-colors duration-200">{{ t.nav.process }}</a>
          <a href="#localizacao" class="hover:text-white transition-colors duration-200">{{ t.nav.location }}</a>
        </nav>

        <div class="flex items-center gap-4 md:gap-5">
          <!-- LANG TOGGLE -->
          <button
            type="button"
            class="text-[11px] font-bold tracking-[0.18em] uppercase select-none hover:opacity-80 transition-opacity"
            :aria-label="locale === 'pt' ? 'Switch to English' : 'Mudar para português'"
            @click="toggleLocale"
          >
            <span :class="locale === 'pt' ? 'text-white' : 'text-white/30'">PT</span>
            <span class="text-white/15 mx-1">/</span>
            <span :class="locale === 'en' ? 'text-white' : 'text-white/30'">EN</span>
          </button>

          <a
            :href="WA_URL" target="_blank" rel="noopener" @click="onCta"
            class="hidden md:inline-flex items-center gap-2 border border-[#e81414] text-[#e81414] px-4 py-2 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-[#e81414] hover:text-white transition-all duration-200"
          >
            {{ t.nav.cta }}
          </a>
          <a
            :href="WA_URL" target="_blank" rel="noopener" @click="onCta"
            :class="[
              'md:hidden text-[13px] font-bold tracking-wide',
              isEn ? 'text-[#e81414] uppercase text-[11px] tracking-[0.2em]' : 'text-[#25d366]',
            ]"
          >
            {{ t.nav.ctaMobile }}
          </a>
        </div>
      </div>
    </header>

    <!-- ─── HERO ─────────────────────────────────────────────────────── -->
    <section id="inicio" class="min-h-screen relative flex items-center overflow-hidden pt-20">

      <!-- Kanji watermark bg -->
      <div aria-hidden="true" class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none">
        <span class="font-display text-[55vw] leading-none text-white/[0.018] tracking-widest">刺青</span>
      </div>

      <!-- Glow blobs -->
      <div aria-hidden="true" class="absolute top-0 right-[-5%] w-[700px] h-[700px] bg-[#e81414]/7 rounded-full blur-[160px] pointer-events-none"></div>
      <div aria-hidden="true" class="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#7c3aed]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1fr_auto] gap-10 lg:gap-20 items-center py-20">

        <!-- Text block -->
        <div class="order-2 lg:order-1" data-reveal>
          <div class="flex items-center gap-3 mb-7">
            <div class="h-px w-10 bg-[#e81414]"></div>
            <span class="text-[#e81414] text-[11px] font-bold tracking-[0.45em] uppercase">{{ t.hero.eyebrow }}</span>
          </div>

          <h1 class="font-display leading-[0.88] tracking-wide uppercase mb-8 text-[clamp(3.8rem,9.5vw,8.5rem)]">
            {{ t.hero.title1 }}<br>
            <span class="text-[#e81414]">{{ t.hero.title2 }}</span><br>
            {{ t.hero.title3 }}
          </h1>

          <p class="text-white/50 text-base md:text-lg leading-relaxed max-w-[430px] mb-10" v-html="t.hero.text"></p>

          <div class="flex flex-wrap gap-3 mb-14">
            <a
              :href="WA_URL" target="_blank" rel="noopener" @click="onCta"
              class="flex items-center gap-2 bg-[#e81414] text-white font-bold px-7 py-3.5 text-[13px] uppercase tracking-widest hover:bg-red-700 active:scale-95 transition-all duration-200"
            >
              {{ t.hero.ctaPrimary }}
            </a>
            <a
              :href="IG_URL" target="_blank" rel="noopener"
              class="flex items-center gap-2 border border-white/15 text-white/60 font-bold px-7 py-3.5 text-[13px] uppercase tracking-widest hover:border-white/40 hover:text-white transition-all duration-200"
            >
              {{ t.hero.ctaSecondary }}
            </a>
          </div>

          <!-- Mini stats row -->
          <div class="flex flex-wrap gap-10 border-t border-white/5 pt-8">
            <div v-for="(stat, i) in t.hero.stats" :key="i">
              <div :class="['font-display text-[2.8rem] leading-none', i === 1 ? 'text-[#e81414]' : 'text-white']">{{ stat.value }}</div>
              <div class="text-white/30 text-[11px] tracking-[0.3em] uppercase mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Photo block -->
        <div class="order-1 lg:order-2 relative flex justify-center" data-reveal data-delay="150">
          <div class="relative">
            <!-- Glow behind photo -->
            <div class="absolute inset-0 bg-[#e81414]/15 blur-[60px] scale-90 rounded-full pointer-events-none"></div>

            <!-- Photo with angled clip -->
            <img
              src="/renan.png"
              :alt="t.hero.photoAlt"
              loading="eager"
              class="relative z-10 w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px] object-cover"
              style="clip-path: polygon(0 0, 94% 0, 100% 6%, 100% 100%, 6% 100%, 0 94%); filter: contrast(1.05);"
            />

            <!-- Bottom red bar -->
            <div class="absolute bottom-0 left-0 right-0 h-[3px] bg-[#e81414] z-20"></div>

            <!-- Floating badge -->
            <div class="absolute -top-4 -right-4 lg:-right-6 z-20 bg-[#e81414] text-white font-display text-[15px] leading-tight px-4 py-2.5 rotate-3 shadow-lg shadow-red-900/50 whitespace-nowrap">
              {{ t.hero.badge }}
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll cue -->
      <div class="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/20 text-[10px] tracking-[0.4em] uppercase select-none">
        <span>{{ t.hero.scroll }}</span>
        <div class="w-px h-8 bg-gradient-to-b from-white/20 to-transparent"></div>
      </div>
    </section>

    <!-- ─── SOBRE O RENAN ─────────────────────────────────────────────── -->
    <section id="sobre" class="py-20 md:py-28 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-14 items-center">

          <!-- Left: copy -->
          <div data-reveal>
            <div class="flex items-center gap-3 mb-6">
              <div class="h-px w-10 bg-[#e81414]"></div>
              <span class="text-[#e81414] text-[11px] font-bold tracking-[0.45em] uppercase">{{ t.about.eyebrow }}</span>
            </div>

            <h2 class="font-display text-[clamp(2.8rem,5.5vw,5rem)] leading-[0.88] uppercase mb-8">
              {{ t.about.title1 }}<br>
              <span class="text-white/25">{{ t.about.title2 }}</span><br>
              {{ t.about.title3 }}
            </h2>

            <div class="space-y-5 text-white/50 leading-relaxed text-[15px]">
              <p v-html="t.about.p1"></p>
              <p v-html="t.about.p2"></p>
            </div>

            <a
              :href="WA_URL" target="_blank" rel="noopener" @click="onCta"
              class="mt-10 inline-flex items-center gap-2 bg-[#e81414] text-white font-bold px-6 py-3.5 text-[13px] uppercase tracking-widest hover:bg-red-700 transition-colors duration-200"
            >
              {{ t.about.cta }}
            </a>
          </div>

          <!-- Right: award photo -->
          <div class="relative" data-reveal data-delay="200">
            <div aria-hidden="true" class="absolute inset-0 flex items-center justify-end overflow-hidden pointer-events-none">
              <span class="font-display text-[18vw] leading-none text-[#e81414]/4 select-none">★★★</span>
            </div>
            <img
              src="/renanwins.png"
              :alt="t.about.photoAlt"
              loading="lazy"
              class="relative z-10 w-full object-cover"
              style="clip-path: polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%);"
            />
            <div class="absolute top-5 left-5 z-20 bg-[#e81414]/90 backdrop-blur text-white font-display text-xl px-4 py-2 tracking-wide">
              {{ t.about.badge }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ─── PORTFÓLIO ─────────────────────────────────────────────────── -->
    <section id="portfolio" class="py-28 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6">

        <!-- Header -->
        <div class="flex items-end justify-between mb-12">
          <div data-reveal>
            <div class="flex items-center gap-3 mb-4">
              <div class="h-px w-10 bg-[#e81414]"></div>
              <span class="text-[#e81414] text-[11px] font-bold tracking-[0.45em] uppercase">{{ t.portfolio.eyebrow }}</span>
            </div>
            <h2 class="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.88] uppercase">
              {{ t.portfolio.title1 }}<br>{{ t.portfolio.title2 }}
            </h2>
          </div>
          <a
            :href="IG_URL" target="_blank" rel="noopener"
            class="hidden md:flex items-center gap-2 border border-white/10 text-white/40 text-[12px] font-bold px-5 py-2.5 uppercase tracking-widest hover:border-white/30 hover:text-white transition-all duration-200"
          >
            {{ t.portfolio.seeMore }}
          </a>
        </div>

        <!-- Linha 1: 4 fotos compactas -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4" data-reveal>
          <a
            v-for="(item, i) in portfolio.slice(0, 4)"
            :key="i"
            :href="item.reel"
            target="_blank"
            rel="noopener"
            class="group block relative overflow-hidden bg-[#0e0e0e]"
          >
            <img
              :src="item.src"
              :alt="t.portfolio.alt"
              loading="lazy"
              class="w-full h-[260px] md:h-[300px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 brightness-90"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <span class="text-white font-bold text-[11px] tracking-widest uppercase flex items-center gap-2">
                {{ t.portfolio.hover }}
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7M3 12h18"/></svg>
              </span>
            </div>
            <div class="absolute top-0 right-0 border-t-[28px] border-r-[28px] border-t-transparent border-r-[#e81414] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <!-- Linha 2: 3 fotos maiores com stagger no meio -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-reveal data-delay="100">
          <a
            v-for="(item, i) in portfolio.slice(4)"
            :key="'b' + i"
            :href="item.reel"
            target="_blank"
            rel="noopener"
            :class="[
              'group block relative overflow-hidden bg-[#0e0e0e]',
              i !== 1 ? 'md:mt-10' : ''
            ]"
          >
            <img
              :src="item.src"
              :alt="t.portfolio.alt"
              loading="lazy"
              class="w-full h-[380px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110 brightness-90"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
              <span class="text-white font-bold text-[13px] tracking-widest uppercase flex items-center gap-2">
                {{ t.portfolio.hover }}
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7M3 12h18"/></svg>
              </span>
            </div>
            <div class="absolute top-0 right-0 border-t-[36px] border-r-[36px] border-t-transparent border-r-[#e81414] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        <div class="mt-6 md:hidden">
          <a
            :href="IG_URL" target="_blank" rel="noopener"
            class="flex items-center justify-center gap-2 w-full border border-white/10 text-white/40 font-bold py-3.5 text-[13px] uppercase tracking-widest hover:border-white/30 hover:text-white transition-all"
          >
            {{ t.portfolio.seeMoreMobile }}
          </a>
        </div>
      </div>
    </section>

    <!-- ─── O ESTÚDIO ─────────────────────────────────────────────────── -->
    <section id="estudio" class="py-16 md:py-28 bg-[#0c0c0c] border-t border-white/5 relative overflow-hidden">
      <!-- Purple glow (anime vibe) -->
      <div aria-hidden="true" class="absolute bottom-0 right-0 w-72 h-72 md:w-[500px] md:h-[500px] bg-[#7c3aed]/6 rounded-full blur-[100px] md:blur-[140px] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6">

        <div class="text-center mb-10 md:mb-16" data-reveal>
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="h-px w-10 bg-[#e81414]"></div>
            <span class="text-[#e81414] text-[11px] font-bold tracking-[0.45em] uppercase">{{ t.studio.eyebrow }}</span>
            <div class="h-px w-10 bg-[#e81414]"></div>
          </div>
          <h2 class="font-display text-[clamp(2.2rem,5.5vw,4.5rem)] leading-[0.88] uppercase mb-4">
            {{ t.studio.title }}
          </h2>
          <p class="text-white/35 max-w-sm mx-auto text-[15px] leading-relaxed">
            {{ t.studio.text }}
          </p>
        </div>

        <!-- Comodidades reais -->
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3" data-reveal data-delay="100">
          <div
            v-for="(item, i) in t.studio.amenities"
            :key="i"
            class="bg-[#0d0d0d] border border-white/5 p-5 flex items-start gap-3"
          >
            <span class="text-xl shrink-0">{{ item.icon }}</span>
            <div>
              <div class="text-white font-semibold text-sm mb-1">{{ item.title }}</div>
              <div class="text-white/35 text-xs leading-relaxed">{{ item.desc }}</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ─── PROCESSO ──────────────────────────────────────────────────── -->
    <section id="processo" class="py-28 relative overflow-hidden">
      <!-- Bg text watermark -->
      <div aria-hidden="true" class="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[28vw] leading-none text-white/[0.013] select-none pointer-events-none">HOW</div>

      <div class="max-w-7xl mx-auto px-6">
        <div class="text-center mb-16" data-reveal>
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="h-px w-10 bg-[#e81414]"></div>
            <span class="text-[#e81414] text-[11px] font-bold tracking-[0.45em] uppercase">{{ t.process.eyebrow }}</span>
            <div class="h-px w-10 bg-[#e81414]"></div>
          </div>
          <h2 class="font-display text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[0.88] uppercase">
            {{ t.process.title1 }}<br>
            <span class="text-white/25">{{ t.process.title2 }}</span>
          </h2>
        </div>

        <!-- Steps grid with big numbers -->
        <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-white/5" data-reveal>
          <div
            v-for="(step, i) in t.process.steps"
            :key="i"
            class="bg-[#080808] p-8 relative overflow-hidden group hover:bg-[#0d0d0d] transition-colors duration-300"
          >
            <!-- Ghost number bg -->
            <div class="absolute -top-4 -left-1 font-display text-[7rem] leading-none text-white/[0.04] group-hover:text-[#e81414]/10 transition-colors duration-300 select-none">
              {{ step.n }}
            </div>
            <div class="relative z-10">
              <div class="font-display text-[3.5rem] text-[#e81414] leading-none mb-5">{{ step.n }}</div>
              <h3 class="font-display text-xl uppercase text-white mb-3 tracking-wide">{{ step.title }}</h3>
              <p class="text-white/35 text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>

        <!-- Nota importante -->
        <div class="mt-8 border border-white/8 bg-white/[0.02] px-6 py-4 text-white/40 text-sm leading-relaxed" data-reveal>
          <span class="text-white/70 font-semibold">{{ t.process.noteLabel }}</span>{{ t.process.noteText }}
        </div>

        <div class="text-center mt-10" data-reveal>
          <a
            :href="WA_URL" target="_blank" rel="noopener" @click="onCta"
            class="inline-flex items-center gap-3 bg-[#e81414] text-white font-bold px-9 py-4 text-[13px] uppercase tracking-widest hover:bg-red-700 active:scale-95 transition-all duration-200"
          >
            {{ t.process.cta }}
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7M3 12h18"/></svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ─── LOCALIZAÇÃO ───────────────────────────────────────────────── -->
    <section id="localizacao" class="py-28 bg-[#0c0c0c] border-t border-white/5">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid lg:grid-cols-2 gap-16 items-center">

          <div data-reveal>
            <div class="flex items-center gap-3 mb-6">
              <div class="h-px w-10 bg-[#e81414]"></div>
              <span class="text-[#e81414] text-[11px] font-bold tracking-[0.45em] uppercase">{{ t.location.eyebrow }}</span>
            </div>
            <h2 class="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.88] uppercase mb-10">
              {{ t.location.title1 }}<br>{{ t.location.title2 }}
            </h2>

            <div class="space-y-5 mb-10">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-[#e81414]/10 border border-[#e81414]/20 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-[#e81414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-semibold mb-0.5">{{ t.location.items[0].title }}</div>
                  <div class="text-white/35 text-sm">{{ t.location.items[0].desc }}</div>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-[#e81414]/10 border border-[#e81414]/20 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-[#e81414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-semibold mb-0.5">{{ t.location.items[1].title }}</div>
                  <div class="text-white/35 text-sm leading-relaxed">{{ t.location.items[1].desc }}</div>
                </div>
              </div>
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 bg-[#e81414]/10 border border-[#e81414]/20 flex items-center justify-center shrink-0">
                  <svg class="w-5 h-5 text-[#e81414]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div class="text-white font-semibold mb-0.5">{{ t.location.items[2].title }}</div>
                  <div class="text-white/35 text-sm">{{ t.location.items[2].desc }}</div>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-3">
              <a
                :href="WA_URL" target="_blank" rel="noopener" @click="onCta"
                class="flex items-center justify-center gap-2 bg-[#e81414] text-white font-bold px-6 py-3.5 text-[13px] uppercase tracking-widest hover:bg-red-700 transition-colors"
              >
                {{ t.location.ctaWa }}
              </a>
              <a
                :href="MAP_URL" target="_blank" rel="noopener"
                class="flex items-center justify-center gap-2 border border-white/10 text-white/45 font-bold px-6 py-3.5 text-[13px] uppercase tracking-widest hover:border-white/25 hover:text-white transition-all"
              >
                {{ t.location.ctaMap }}
              </a>
            </div>
          </div>

          <!-- Foto do mapa clicável -->
          <a
            :href="STREET_VIEW_URL"
            target="_blank"
            rel="noopener"
            class="group relative block cursor-pointer"
            data-reveal
            data-delay="200"
            :aria-label="t.location.mapAria"
          >
            <!-- Imagem -->
            <img
              src="/map.png"
              :alt="t.location.mapAlt"
              loading="lazy"
              class="w-full object-cover border border-white/5 transition-all duration-500 group-hover:brightness-75"
              style="clip-path: polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%);"
            />

            <!-- Pin animado centralizado -->
            <div class="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <!-- Anéis de pulso -->
              <div class="relative flex items-center justify-center mb-2">
                <div class="absolute w-14 h-14 rounded-full bg-[#e81414]/20 animate-ping" style="animation-duration:2s;"></div>
                <div class="absolute w-8 h-8 rounded-full bg-[#e81414]/30 animate-ping" style="animation-duration:2s;animation-delay:.4s;"></div>
                <!-- Ícone do pin -->
                <div class="relative z-10 w-8 h-8 bg-[#e81414] rounded-full flex items-center justify-center shadow-lg shadow-red-900/60">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
              </div>
              <!-- Label que aparece no hover -->
              <div class="bg-[#080808]/90 backdrop-blur border border-white/10 px-4 py-2 text-center translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                <div class="text-white font-semibold text-sm tracking-wide">Renan Muniz Tattoo</div>
                <div class="text-[#e81414] text-xs mt-0.5 flex items-center justify-center gap-1">
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
                  {{ t.location.mapOpen }}
                </div>
              </div>
            </div>

            <!-- Borda vermelha no hover -->
            <div class="absolute inset-0 border-2 border-[#e81414]/0 group-hover:border-[#e81414]/60 transition-all duration-300 pointer-events-none" style="clip-path: polygon(0 0, 100% 0, 100% 95%, 95% 100%, 0 100%);"></div>
          </a>
        </div>
      </div>
    </section>

    <!-- ─── CTA FINAL ─────────────────────────────────────────────────── -->
    <section class="py-36 relative overflow-hidden">
      <div aria-hidden="true" class="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span class="font-display text-[32vw] leading-none text-[#e81414]/[0.04] select-none">RM</span>
      </div>
      <div aria-hidden="true" class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#e81414]/5 rounded-full blur-[180px] pointer-events-none"></div>

      <div class="max-w-2xl mx-auto px-6 text-center relative z-10" data-reveal>
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="h-px w-10 bg-[#e81414]"></div>
          <span class="text-[#e81414] text-[11px] font-bold tracking-[0.45em] uppercase">{{ t.finalCta.eyebrow }}</span>
          <div class="h-px w-10 bg-[#e81414]"></div>
        </div>
        <h2 class="font-display text-[clamp(3rem,8vw,7rem)] leading-[0.88] uppercase mb-8">
          {{ t.finalCta.title1 }}<br>
          <span class="text-[#e81414]">{{ t.finalCta.title2 }}</span><br>
          {{ t.finalCta.title3 }}
        </h2>
        <p class="text-white/40 text-lg mb-12 leading-relaxed">
          {{ t.finalCta.text }}
        </p>
        <a
          :href="WA_URL" target="_blank" rel="noopener" @click="onCta"
          :class="[
            'inline-flex items-center gap-3 font-bold px-10 py-5 text-[15px] uppercase tracking-widest active:scale-95 transition-all duration-200 shadow-2xl',
            isEn
              ? 'bg-[#e81414] text-white hover:bg-red-700 shadow-red-950/40'
              : 'bg-[#25d366] text-black hover:bg-green-400 shadow-green-950/40',
          ]"
        >
          <svg v-if="!isEn" class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          {{ t.finalCta.cta }}
          <svg v-if="isEn" class="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7M3 12h18"/></svg>
        </a>
      </div>
    </section>

    <!-- ─── FOOTER ─────────────────────────────────────────────────────── -->
    <footer class="border-t border-white/5 py-8">
      <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-5">
        <div class="font-display text-xl tracking-[0.25em] text-white/50">
          RM<span class="text-[#e81414]">.</span>
        </div>
        <div class="flex flex-col items-center gap-1.5">
          <div class="text-white/20 text-xs text-center tracking-wide">
            © {{ new Date().getFullYear() }} {{ t.footer.rights }}
          </div>
          <a
            href="https://landing48.com.br"
            target="_blank"
            rel="noopener"
            class="text-white/15 hover:text-white/35 transition-colors duration-200 text-[10px] tracking-widest uppercase"
          >
            {{ t.footer.madeBy }}
          </a>
        </div>
        <div class="flex items-center gap-6">
          <a :href="IG_URL" target="_blank" rel="noopener" class="text-white/25 hover:text-white transition-colors text-[11px] font-bold uppercase tracking-[0.25em]">Instagram</a>
          <a :href="WA_URL" target="_blank" rel="noopener" class="text-white/25 hover:text-[#25d366] transition-colors text-[11px] font-bold uppercase tracking-[0.25em]">WhatsApp</a>
        </div>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ── Scroll reveal ─────────────────────────────────── */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
[data-reveal].is-revealed {
  opacity: 1;
  transform: translateY(0);
}

/* ── Main ticker (red strip) ───────────────────────── */
.ticker-wrap {
  overflow: hidden;
}
.ticker-track {
  display: flex;
  width: max-content;
  animation: ticker-move 28s linear infinite;
  will-change: transform;
}
.ticker-item {
  display: inline-flex;
  align-items: center;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 0.18em;
  color: rgba(255,255,255,0.92);
  white-space: nowrap;
  padding-right: 0;
}
@keyframes ticker-move {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}

</style>
