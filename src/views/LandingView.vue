<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

// ─── Assets (dynamic binding evita resolução estática pelo Vite) ─────────────
const HERO_PHOTO = '/renan.png'

// ─── Links ──────────────────────────────────────────────────────────────────
const WA_URL =
  'https://api.whatsapp.com/send?phone=5521976336934&text=Opa%2C%20e%20ai%20blz%20Renan%2C%20quero%20um%20or%C3%A7amento'
const IG_URL  = 'https://www.instagram.com/renanmuniz.tattoo/'
const MAP_URL = 'https://maps.google.com/?q=Av.+L%C3%BAcio+Meira%2C+210%2C+Teresópolis+RJ'

// ─── Navbar scroll state ─────────────────────────────────────────────────────
const scrolled = ref(false)
function onScroll() { scrolled.value = window.scrollY > 40 }
onMounted(() => window.addEventListener('scroll', onScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', onScroll))

// ─── Scroll reveal ────────────────────────────────────────────────────────────
onMounted(() => {
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible')
          obs.unobserve(e.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  document.querySelectorAll('[data-reveal]').forEach((el) => obs.observe(el))
})

// ─── Portfolio items (swap src for real photos) ───────────────────────────────
const portfolio = [
  { id: 1, src: 'https://placehold.co/600x750/111111/333333?text=Blackwork', alt: 'Tatuagem Blackwork' },
  { id: 2, src: 'https://placehold.co/600x750/111111/333333?text=Realismo', alt: 'Tatuagem Realismo' },
  { id: 3, src: 'https://placehold.co/600x750/111111/333333?text=Old+School', alt: 'Tatuagem Old School' },
  { id: 4, src: 'https://placehold.co/600x750/111111/333333?text=Fineline', alt: 'Tatuagem Fineline' },
  { id: 5, src: 'https://placehold.co/600x750/111111/333333?text=Neo+Trad', alt: 'Tatuagem Neo Traditional' },
  { id: 6, src: 'https://placehold.co/600x750/111111/333333?text=Tribal', alt: 'Tatuagem Tribal' },
]

// ─── Differentials ────────────────────────────────────────────────────────────
const differentials = [
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" /></svg>`,
    title: 'Atendimento Personalizado',
    body:  'Cada cliente é único. Ouço sua ideia com atenção e trabalho para criar uma peça que represente exatamente o que você imaginou.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>`,
    title: 'Criação 100% Exclusiva',
    body:  'Nada de copiar arte de outra pessoa. Cada desenho é criado do zero, feito especialmente para você. Sua tatuagem é única no mundo.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" /></svg>`,
    title: 'Higiene e Segurança',
    body:  'Materiais descartáveis, equipamentos esterilizados e ambiente profissional. Sua saúde é tão importante quanto a qualidade da arte.',
  },
  {
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0" /></svg>`,
    title: 'Experiência Premiada',
    body:  '+4 anos de estrada, 3 prêmios conquistados e centenas de clientes satisfeitos. Trabalho com dedicação em cada milímetro da sua pele.',
  },
]

// ─── Process steps ────────────────────────────────────────────────────────────
const steps = [
  { n: '01', title: 'Manda mensagem',   body: 'Chama no WhatsApp com sua ideia — referências, estilo, tamanho, onde quer colocar.' },
  { n: '02', title: 'Enviamos proposta', body: 'Analiso sua ideia e te envio uma proposta personalizada com valor e disponibilidade.' },
  { n: '03', title: 'Confirmamos sessão', body: 'Com tudo alinhado, agendamos sua sessão e finalizamos os detalhes do desenho.' },
  { n: '04', title: 'Vira arte',         body: 'Você sai do estúdio com uma obra de arte permanente na pele. Simples assim.' },
]

// ─── Stats ────────────────────────────────────────────────────────────────────
const stats = [
  { value: '+4',    label: 'Anos de experiência',       sub: 'Aperfeiçoando cada traço' },
  { value: '3',     label: 'Prêmios conquistados',       sub: 'Reconhecimento da arte' },
  { value: '100%',  label: 'Criação exclusiva',          sub: 'Nenhuma arte repetida' },
]
</script>

<template>
  <div class="bg-ink-950 text-white min-h-screen font-sans antialiased overflow-x-hidden">

    <!-- ═══════════════════════════════════════════════════════════
         FLOATING WHATSAPP BUTTON — desktop only
    ════════════════════════════════════════════════════════════════ -->
    <a
      :href="WA_URL"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      class="hidden md:flex fixed bottom-7 right-7 z-50 items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold text-sm px-5 py-3 rounded-full shadow-xl shadow-green-950/60 transition-all duration-200 hover:scale-105 hover:shadow-green-900/70"
    >
      <!-- WhatsApp SVG -->
      <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
      Falar no WhatsApp
    </a>

    <!-- ═══════════════════════════════════════════════════════════
         STICKY MOBILE BOTTOM CTA
    ════════════════════════════════════════════════════════════════ -->
    <div class="md:hidden fixed bottom-0 inset-x-0 z-50 px-4 pb-4 pt-2 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none">
      <a
        :href="WA_URL"
        target="_blank"
        rel="noopener noreferrer"
        class="pointer-events-auto flex items-center justify-center gap-3 w-full bg-green-500 hover:bg-green-400 active:bg-green-600 text-white font-bold text-base py-4 rounded-2xl shadow-2xl shadow-green-950/70 transition-colors"
      >
        <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        Agendar pelo WhatsApp
      </a>
    </div>

    <!-- ═══════════════════════════════════════════════════════════
         NAVBAR
    ════════════════════════════════════════════════════════════════ -->
    <header
      class="fixed top-0 inset-x-0 z-40 transition-all duration-300"
      :class="scrolled ? 'bg-ink-950/90 backdrop-blur-md border-b border-ink-800/60 py-3' : 'bg-transparent py-5'"
    >
      <div class="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <!-- Logo / Wordmark -->
        <a href="#" class="flex items-center gap-2 group">
          <span class="w-2 h-2 rounded-full bg-red-600 group-hover:bg-red-500 transition-colors animate-pulse-slow" />
          <span class="font-display text-xl tracking-wider text-white">RENAN MUNIZ</span>
          <span class="text-red-600 font-display text-xl tracking-wider">TATTOO</span>
        </a>

        <!-- Nav links — hidden on mobile -->
        <nav class="hidden md:flex items-center gap-8 text-sm font-medium text-ink-400">
          <a href="#portfolio" class="hover:text-white transition-colors">Portfólio</a>
          <a href="#processo"  class="hover:text-white transition-colors">Como funciona</a>
          <a href="#localizacao" class="hover:text-white transition-colors">Localização</a>
          <a
            :href="WA_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-lg transition-colors text-sm font-semibold"
          >
            Orçamento grátis
          </a>
        </nav>
      </div>
    </header>

    <!-- ═══════════════════════════════════════════════════════════
         HERO
    ════════════════════════════════════════════════════════════════ -->
    <section class="relative min-h-screen flex items-center overflow-hidden">

      <!-- Background layers -->
      <div class="absolute inset-0 bg-ink-950" />
      <!-- Red glow anchored to the right (behind the photo) -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_55%_70%_at_80%_50%,rgba(220,38,38,0.13),transparent)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_30%_40%_at_80%_50%,rgba(220,38,38,0.07),transparent)]" />
      <!-- Grid texture -->
      <div
        class="absolute inset-0 opacity-[0.025]"
        style="background-image: linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px); background-size: 60px 60px;"
      />

      <div class="relative max-w-6xl mx-auto px-6 pt-28 pb-28 w-full">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          <!-- ── Left col: copy ── -->
          <div class="text-center lg:text-left order-2 lg:order-1">

            <!-- Eyebrow -->
            <div
              data-reveal
              class="inline-flex items-center gap-2 border border-ink-800 bg-ink-900/60 rounded-full px-4 py-1.5 text-xs font-semibold text-ink-400 uppercase tracking-widest mb-8"
            >
              <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              Teresópolis, RJ — Agendamentos abertos
            </div>

            <!-- Headline -->
            <h1
              data-reveal
              data-delay="100"
              class="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-none uppercase tracking-tight mb-6"
            >
              Transformando<br />
              ideias em<br />
              tatuagens que<br />
              são <span class="text-red-600">obras de arte.</span>
            </h1>

            <!-- Sub-headline -->
            <p
              data-reveal
              data-delay="200"
              class="text-ink-400 text-base md:text-lg max-w-sm mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              +4 anos de experiência &nbsp;·&nbsp; 3 prêmios<br />
              Estúdio profissional em Teresópolis RJ
            </p>

            <!-- CTAs -->
            <div
              data-reveal
              data-delay="300"
              class="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pb-24 lg:pb-0"
            >
              <a
                :href="WA_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 shadow-xl shadow-green-950/50 w-full sm:w-auto justify-center"
              >
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Quero meu orçamento
              </a>

              <a
                :href="IG_URL"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-2.5 border border-ink-700 hover:border-ink-500 bg-ink-900/40 hover:bg-ink-900 text-white font-semibold px-7 py-4 rounded-xl text-base transition-all duration-200 w-full sm:w-auto justify-center"
              >
                <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
                Instagram
              </a>
            </div>
          </div>

          <!-- ── Right col: artist photo ── -->
          <div
            data-reveal
            data-delay="150"
            class="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div class="relative">
              <!-- Decorative red glow blob behind photo -->
              <div class="absolute -inset-4 rounded-[2.5rem] bg-red-700/20 blur-2xl" />
              <!-- Thin red border ring -->
              <div class="absolute -inset-px rounded-[2rem] bg-gradient-to-br from-red-800/40 via-transparent to-transparent" />

              <!-- Photo -->
              <img
                :src="HERO_PHOTO"
                alt="Renan Muniz — Tatuador em Teresópolis RJ"
                class="relative w-[260px] sm:w-[320px] lg:w-[420px] xl:w-[460px] object-cover rounded-[2rem] shadow-2xl shadow-black/70"
                style="aspect-ratio: 1181/1331;"
              />

              <!-- Gradient fade to background at bottom (seamless blend) -->
              <div class="absolute bottom-0 inset-x-0 h-24 rounded-b-[2rem] bg-gradient-to-t from-ink-950/60 to-transparent pointer-events-none" />

              <!-- Name badge overlaid at bottom of photo -->
              <div class="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2.5 bg-ink-950/80 backdrop-blur-md border border-ink-800/60 rounded-full px-4 py-2 whitespace-nowrap">
                <span class="w-2 h-2 rounded-full bg-red-600 animate-pulse-slow shrink-0" />
                <span class="text-white text-xs font-semibold">Renan Muniz</span>
                <span class="text-ink-500 text-xs">· Tatuador</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-1.5 text-ink-600 text-xs animate-bounce">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="m19 9-7 7-7-7" />
        </svg>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         SOCIAL PROOF — Stats
    ════════════════════════════════════════════════════════════════ -->
    <section class="border-y border-ink-800/60 bg-ink-900/30 py-20">
      <div class="max-w-6xl mx-auto px-6">

        <div class="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-800/40 rounded-2xl overflow-hidden">
          <div
            v-for="(stat, i) in stats"
            :key="i"
            data-reveal
            :data-delay="i * 100"
            class="bg-ink-950 px-8 py-10 text-center hover:bg-ink-900 transition-colors group"
          >
            <div class="font-display text-6xl md:text-7xl text-white group-hover:text-red-500 transition-colors mb-2">
              {{ stat.value }}
            </div>
            <div class="text-white font-semibold text-lg mb-1">{{ stat.label }}</div>
            <div class="text-ink-500 text-sm">{{ stat.sub }}</div>
          </div>
        </div>

        <!-- Certifications badge row -->
        <div data-reveal class="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span
            v-for="cert in ['Certificado em Biossegurança', 'Premiado na Convenção RJ', 'Membro da ABRATS', 'Arte Autoral']"
            :key="cert"
            class="inline-flex items-center gap-1.5 border border-ink-800 bg-ink-900/50 text-ink-400 text-xs font-medium px-3 py-1.5 rounded-full"
          >
            <svg class="w-3 h-3 text-red-600 shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4-5.5Z" clip-rule="evenodd"/>
            </svg>
            {{ cert }}
          </span>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         PORTFOLIO
    ════════════════════════════════════════════════════════════════ -->
    <section id="portfolio" class="py-24">
      <div class="max-w-6xl mx-auto px-6">

        <!-- Section header -->
        <div data-reveal class="text-center mb-16">
          <p class="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">Portfólio</p>
          <h2 class="font-display text-4xl md:text-6xl uppercase">
            Arte que fica<br /><span class="text-ink-500">para sempre.</span>
          </h2>
          <p class="text-ink-400 mt-4 max-w-md mx-auto">
            Cada peça tem uma história. Veja alguns trabalhos selecionados e imagine a sua na pele.
          </p>
        </div>

        <!-- Portfolio grid -->
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          <div
            v-for="(item, i) in portfolio"
            :key="item.id"
            data-reveal
            :data-delay="(i % 3) * 100"
            class="portfolio-card relative rounded-xl overflow-hidden bg-ink-900 aspect-[3/4] cursor-pointer group"
          >
            <img
              :src="item.src"
              :alt="item.alt"
              class="portfolio-img w-full h-full object-cover transition-transform duration-500"
              loading="lazy"
            />
            <!-- Hover overlay -->
            <div class="portfolio-overlay absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-4">
              <div>
                <p class="text-white font-semibold text-sm">{{ item.alt }}</p>
                <p class="text-ink-400 text-xs mt-0.5">Renan Muniz Tattoo</p>
              </div>
            </div>
          </div>
        </div>

        <!-- CTA below grid -->
        <div data-reveal class="text-center mt-12">
          <a
            :href="IG_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 border border-ink-700 hover:border-ink-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:bg-ink-900 text-sm"
          >
            Ver mais no Instagram
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         DIFFERENTIALS
    ════════════════════════════════════════════════════════════════ -->
    <section class="py-24 bg-ink-900/20 border-y border-ink-800/40">
      <div class="max-w-6xl mx-auto px-6">

        <div data-reveal class="text-center mb-16">
          <p class="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">Por que a Renan Muniz Tattoo?</p>
          <h2 class="font-display text-4xl md:text-6xl uppercase">
            Sua pele merece<br /><span class="text-red-600">o melhor.</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <div
            v-for="(d, i) in differentials"
            :key="i"
            data-reveal
            :data-delay="i * 100"
            class="group relative border border-ink-800/60 bg-ink-950 hover:bg-ink-900 hover:border-red-900/50 rounded-2xl p-7 transition-all duration-300"
          >
            <!-- Top accent line -->
            <div class="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-red-700/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

            <!-- Icon -->
            <div
              class="w-11 h-11 rounded-xl bg-red-950/50 flex items-center justify-center text-red-500 mb-5 group-hover:bg-red-900/40 transition-colors"
              v-html="d.icon"
            />

            <h3 class="text-white font-semibold text-lg mb-2">{{ d.title }}</h3>
            <p class="text-ink-400 text-sm leading-relaxed">{{ d.body }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         PROCESS
    ════════════════════════════════════════════════════════════════ -->
    <section id="processo" class="py-24">
      <div class="max-w-6xl mx-auto px-6">

        <div data-reveal class="text-center mb-16">
          <p class="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">Simples assim</p>
          <h2 class="font-display text-4xl md:text-6xl uppercase">
            Como funciona
          </h2>
          <p class="text-ink-400 mt-4 max-w-sm mx-auto text-sm">
            Da ideia na cabeça à arte na pele — o processo é tranquilo e transparente.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div
            v-for="(step, i) in steps"
            :key="i"
            data-reveal
            :data-delay="i * 100"
            class="process-step relative text-center md:text-left"
          >
            <!-- Step number -->
            <div class="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-red-950/60 border border-red-900/40 text-red-500 font-display text-2xl mb-5 md:mb-4">
              {{ step.n }}
            </div>
            <h3 class="text-white font-semibold text-base mb-2">{{ step.title }}</h3>
            <p class="text-ink-400 text-sm leading-relaxed">{{ step.body }}</p>
          </div>
        </div>

        <!-- CTA after process -->
        <div data-reveal class="mt-14 text-center">
          <a
            :href="WA_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2.5 bg-green-500 hover:bg-green-400 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-105 shadow-xl shadow-green-950/40"
          >
            <svg class="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Começar agora — é grátis
          </a>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         LOCATION
    ════════════════════════════════════════════════════════════════ -->
    <section id="localizacao" class="py-24 border-t border-ink-800/40 bg-ink-900/20">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <!-- Text side -->
          <div data-reveal>
            <p class="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">Onde estamos</p>
            <h2 class="font-display text-4xl md:text-5xl uppercase mb-6">
              Venha nos visitar
            </h2>
            <p class="text-ink-400 leading-relaxed mb-8">
              Nosso estúdio está localizado no coração de Teresópolis, em um ambiente acolhedor, limpo e preparado para transformar sua ideia em realidade.
            </p>

            <!-- Address card -->
            <div class="border border-ink-800 bg-ink-950 rounded-2xl p-6 mb-6">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-xl bg-red-950/60 flex items-center justify-center text-red-500 shrink-0 mt-0.5">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <p class="text-white font-semibold mb-1">Renan Muniz Tattoo</p>
                  <p class="text-ink-400 text-sm">Av. Lúcio Meira, 210</p>
                  <p class="text-ink-400 text-sm">Teresópolis — RJ</p>
                </div>
              </div>
            </div>

            <a
              :href="MAP_URL"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 border border-ink-700 hover:border-ink-500 bg-ink-900/40 hover:bg-ink-900 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
              Abrir no Google Maps
            </a>
          </div>

          <!-- Map placeholder / decorative side -->
          <div data-reveal data-delay="200">
            <div class="relative rounded-2xl overflow-hidden border border-ink-800 bg-ink-900 aspect-square md:aspect-[4/3] flex items-center justify-center">
              <!-- Decorative map-like grid -->
              <div
                class="absolute inset-0 opacity-5"
                style="background-image: linear-gradient(rgba(255,255,255,.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.8) 1px, transparent 1px); background-size: 40px 40px;"
              />
              <!-- Center pin -->
              <div class="relative flex flex-col items-center gap-3 text-center px-8">
                <div class="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-xl shadow-red-950/60">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-2.003 3.5-4.697 3.5-8.326a8.25 8.25 0 0 0-16.5 0c0 3.629 1.556 6.326 3.5 8.326a19.579 19.579 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.144.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p class="text-white font-semibold">Renan Muniz Tattoo</p>
                  <p class="text-ink-500 text-sm">Av. Lúcio Meira, 210</p>
                  <p class="text-ink-500 text-sm">Teresópolis — RJ</p>
                </div>
                <a
                  :href="MAP_URL"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-xs text-red-500 hover:text-red-400 underline underline-offset-2 transition-colors mt-1"
                >
                  Ver no mapa →
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         FINAL CTA
    ════════════════════════════════════════════════════════════════ -->
    <section class="py-32 relative overflow-hidden">
      <!-- Red glow background -->
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,rgba(220,38,38,0.10),transparent)]" />
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_50%_50%,rgba(220,38,38,0.06),transparent)]" />

      <div class="relative max-w-3xl mx-auto px-6 text-center">
        <div data-reveal>
          <p class="text-red-600 text-xs font-bold uppercase tracking-widest mb-4">Pronto para dar o próximo passo?</p>
          <h2 class="font-display text-5xl md:text-7xl uppercase leading-none mb-6">
            Sua ideia merece<br />
            <span class="text-red-600">virar arte.</span>
          </h2>
          <p class="text-ink-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Orçamento gratuito, sem compromisso. Manda a ideia no WhatsApp e vamos criar juntos.
          </p>

          <!-- Main CTA -->
          <a
            :href="WA_URL"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-5 rounded-2xl text-lg transition-all duration-200 hover:scale-105 shadow-2xl shadow-green-950/60 mb-6"
          >
            <svg class="w-6 h-6 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Quero meu orçamento agora
          </a>

          <p class="text-ink-600 text-xs">
            Respondemos em até 1 hora · Sem compromisso
          </p>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════════════════════════════
         FOOTER
    ════════════════════════════════════════════════════════════════ -->
    <footer class="border-t border-ink-800/60 bg-ink-950 pb-28 md:pb-0">
      <div class="max-w-6xl mx-auto px-6 py-12">

        <div class="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          <!-- Brand -->
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="w-2 h-2 rounded-full bg-red-600" />
              <span class="font-display text-xl tracking-wider">RENAN MUNIZ</span>
              <span class="text-red-600 font-display text-xl tracking-wider">TATTOO</span>
            </div>
            <p class="text-ink-500 text-sm max-w-xs">
              Transformando ideias em arte permanente.<br />
              Teresópolis, RJ.
            </p>
          </div>

          <!-- Links -->
          <div class="flex flex-col sm:flex-row gap-8 text-sm text-ink-400">
            <div>
              <p class="text-ink-600 text-xs uppercase tracking-widest font-semibold mb-3">Contato</p>
              <a :href="WA_URL" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-white transition-colors mb-2">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                WhatsApp
              </a>
              <a :href="IG_URL" target="_blank" rel="noopener noreferrer" class="flex items-center gap-2 hover:text-white transition-colors">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                @renanmuniz.tattoo
              </a>
            </div>

            <div>
              <p class="text-ink-600 text-xs uppercase tracking-widest font-semibold mb-3">Localização</p>
              <a :href="MAP_URL" target="_blank" rel="noopener noreferrer" class="flex items-start gap-2 hover:text-white transition-colors">
                <svg class="w-4 h-4 mt-0.5 shrink-0" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span>Av. Lúcio Meira, 210<br />Teresópolis — RJ</span>
              </a>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="mt-10 pt-6 border-t border-ink-900 flex flex-col sm:flex-row items-center justify-between gap-2 text-ink-600 text-xs">
          <p>© {{ new Date().getFullYear() }} Renan Muniz Tattoo. Todos os direitos reservados.</p>
          <p>Feito com arte · Teresópolis RJ</p>
        </div>
      </div>
    </footer>

  </div>
</template>
