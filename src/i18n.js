import { computed, ref, watch } from 'vue'

const STORAGE_KEY = 'rm-lang'

/* ── Conteúdo / Content ────────────────────────────────────────────── */
export const messages = {
  pt: {
    htmlLang: 'pt-BR',
    meta: {
      title: 'Renan Muniz Tattoo — Estúdio em Teresópolis RJ',
      description:
        'Tatuagens autorais, blackwork, realismo e mais. +6 anos de experiência, 7 prêmios. Estúdio em Teresópolis RJ. Fale agora pelo WhatsApp.',
    },

    nav: {
      portfolio: 'Portfólio',
      studio: 'Estúdio',
      process: 'Processo',
      location: 'Localização',
      cta: 'Agendar',
      ctaMobile: 'WhatsApp',
    },

    floatingWa: 'Agendar via WhatsApp',

    hero: {
      eyebrow: 'Teresópolis · RJ',
      title1: 'Bora fazer',
      title2: 'a sua',
      title3: 'próxima tatuagem?',
      text:
        'Com <span class="text-white font-semibold">mais de 6 anos</span> dedicados 100% à tatuagem, diversos prêmios e certificados, meu compromisso é transformar a sua próxima tatuagem em uma obra de arte!',
      ctaPrimary: 'Agendar sessão',
      ctaSecondary: 'Ver portfólio',
      stats: [
        { value: '+6', label: 'Anos de exp.' },
        { value: '7', label: 'Premiações' },
        { value: '100%', label: 'Exclusivo' },
      ],
      badge: 'PREMIADO ★',
      photoAlt: 'Renan Muniz — Tatuador em Teresópolis RJ',
      scroll: 'scroll',
    },

    about: {
      eyebrow: 'Quem sou eu',
      title1: 'Gente boa.',
      title2: 'Traço',
      title3: 'que marca.',
      p1:
        'Eu larguei uma carreira em comércio exterior por amor à tatuagem. Hoje já são 6 anos vivendo de arte, <span class="text-white font-semibold">7 premiações</span> e diversos cursos e especializações com apenas um objetivo: fazer a melhor arte possível pra você!',
      p2:
        'Na real eu sou um nerdola viciado em anime e cinema, gosto muito de videogames e futebol. Já viajei mais de <span class="text-white font-semibold">15 países</span> e adoro conversar e passar experiências. Assunto não vai faltar na nossa sessão.',
      cta: 'Agendar com o Renan',
      badge: '★ PREMIADO',
      photoAlt: 'Renan Muniz premiado em competição de tatuagem',
    },

    portfolio: {
      eyebrow: 'Portfólio',
      title1: 'Traços que',
      title2: 'ficam pra sempre.',
      seeMore: 'Ver mais →',
      seeMoreMobile: 'Ver mais no Instagram',
      hover: 'Ver no Instagram',
      alt: 'Tattoo por Renan Muniz',
    },

    studio: {
      eyebrow: 'O Estúdio',
      title: 'Mais que um estúdio.',
      text:
        'O Private Tattoo tem personalidade própria! Nada de espaço escuro e fechado. Aqui, todo mundo é bem vindo ❤',
      amenities: [
        { icon: '🧊', title: 'Geladeira', desc: 'Você pode levar sua bebida geladinha pra curtir a sessão' },
        { icon: '🍽️', title: 'Microondas e utensílios', desc: 'Precisou fazer um lanche durante a sessão? Pode esquentar aqui. Temos todos os talheres e utensílios pra facilitar a nossa vida.' },
        { icon: '☕', title: 'Cafezinho', desc: 'Não pode faltar durante a sessão né' },
        { icon: '📺', title: 'Smart TV completa', desc: 'Todos os streamings e canais disponíveis. De Champions League a séries e filmes, a gente pode assistir tudo!' },
        { icon: '🖼️', title: 'Decoração própria', desc: 'Cada cantinho tem uma história por aqui. Vem conhecer todas!' },
      ],
    },

    process: {
      eyebrow: 'Processo',
      title1: 'Como vai funcionar?',
      title2: 'É curioso, né.',
      steps: [
        { n: '01', title: 'Manda mensagem', desc: 'Me chama no WhatsApp com o que vc pensou em fazer, tamanho e local (não precisa ser exato, somente uma noção já me adianta).' },
        { n: '02', title: 'Orçamento', desc: 'Após confirmar alguns dados (local, tamanho e etc) eu já te passo o orçamento final. Nada de alterações no valor e sem surpresas na hora da sessão!' },
        { n: '03', title: 'Confirmação', desc: 'Orçamento aprovado, é hora de marcar a data! Pedimos um pequeno sinal de confirmação e esse valor é descontado do total da tatuagem!' },
        { n: '04', title: 'Instruções pré sessão', desc: 'Eu te passo todos os cuidados e dicas pra fazer até o dia da sessão! Isso ajuda demais a ter um bom resultado!' },
        { n: '05', title: 'Dia da sessão', desc: 'Chegando o grande dia eu confirmo o horário com você! No dia é só vir e tatuar!' },
      ],
      noteLabel: 'Importante: ',
      noteText: 'A arte é criada antes da sessão e mostrada no dia. Em casos específicos eu envio um dia antes da sessão.',
      cta: 'Começar agora',
    },

    location: {
      eyebrow: 'Localização',
      title1: 'Como',
      title2: 'chegar?',
      items: [
        { title: 'Teresópolis, Rio de Janeiro', desc: 'Av. Lúcio Meira, 210' },
        { title: 'Pontos de referência', desc: 'Em frente ao Curso Centena e Subway, na escada entre a Clínica Sorriso Serrano e a loja "Saldão de Tere"' },
        { title: 'Com hora marcada', desc: 'Atendimento personalizado, sem correria e sem fila' },
      ],
      ctaWa: 'Falar no WhatsApp',
      ctaMap: 'Ver no mapa',
      mapAria: 'Abrir no Google Maps',
      mapAlt: 'Como chegar ao Renan Muniz Tattoo — Teresópolis RJ',
      mapOpen: 'Abrir no Google Maps',
    },

    finalCta: {
      eyebrow: 'Bora?',
      title1: 'Sua próxima',
      title2: 'tattoo',
      title3: 'te espera.',
      text: 'Manda uma mensagem, conta sua ideia e deixa o Renan transformar ela em arte permanente.',
      cta: 'Agendar pelo WhatsApp',
    },

    footer: {
      rights: 'Renan Muniz Tattoo · Teresópolis, RJ',
      madeBy: 'Desenvolvido por Landing48',
    },

    form: {
      eyebrow: 'Agendamento',
      title: 'Conta pra mim sobre você',
      subtitle: 'Preenche rapidinho que eu te retorno pessoalmente.',
      name: 'Seu nome',
      namePlaceholder: 'Como posso te chamar?',
      from: 'De onde você é?',
      fromPlaceholder: 'Cidade / País',
      instagram: 'Instagram',
      instagramPlaceholder: '@seuperfil',
      phone: 'Telefone / WhatsApp',
      phonePlaceholder: '+55 21 90000-0000',
      idea: 'Sua ideia de tatuagem (opcional)',
      ideaPlaceholder: 'Estilo, tamanho, local do corpo, datas...',
      submit: 'Enviar',
      sending: 'Enviando...',
      required: 'Campo obrigatório',
      invalidPhone: 'Digite um telefone válido',
      close: 'Fechar',
      privacy: 'Seus dados são usados apenas para o contato sobre a sua tatuagem.',
      successTitle: 'Recebido!',
      successText: 'Obrigado! Em breve o Renan entra em contato com você.',
      successWa: 'Falar agora no WhatsApp',
      errorText: 'Não consegui enviar agora. Tenta pelo WhatsApp:',
      leadHeader: 'Novo contato pelo site',
    },
  },

  en: {
    htmlLang: 'en',
    meta: {
      title: 'Renan Muniz Tattoo — Tattoo Studio in Teresópolis, Brazil',
      description:
        'Custom tattoos, blackwork, realism and more. 6+ years of experience, 7 awards. Private studio in Teresópolis, Rio de Janeiro. Book your session.',
    },

    nav: {
      portfolio: 'Portfolio',
      studio: 'Studio',
      process: 'Process',
      location: 'Location',
      cta: 'Book now',
      ctaMobile: 'Book now',
    },

    floatingWa: 'Chat on WhatsApp',

    hero: {
      eyebrow: 'Teresópolis · Brazil',
      title1: 'Ready for',
      title2: 'your next',
      title3: 'tattoo?',
      text:
        'With <span class="text-white font-semibold">over 6 years</span> dedicated 100% to tattooing, several awards and certifications, my commitment is to turn your next tattoo into a work of art.',
      ctaPrimary: 'Book a session',
      ctaSecondary: 'See portfolio',
      stats: [
        { value: '6+', label: 'Years of exp.' },
        { value: '7', label: 'Awards' },
        { value: '100%', label: 'Custom work' },
      ],
      badge: 'AWARD WINNING ★',
      photoAlt: 'Renan Muniz — Tattoo artist in Teresópolis, Brazil',
      scroll: 'scroll',
    },

    about: {
      eyebrow: 'Who I am',
      title1: 'Good vibes.',
      title2: 'Lines',
      title3: 'that last.',
      p1:
        'I left a career in foreign trade out of pure love for tattooing. Today it has been 6 years living off art, <span class="text-white font-semibold">7 awards</span> and a lot of courses and specializations with a single goal: to make the best art possible for you.',
      p2:
        'Honestly, I am a nerd addicted to anime and movies, I am into video games and football. I have traveled to more than <span class="text-white font-semibold">15 countries</span> and I love talking and sharing experiences. We will not run out of things to talk about during your session.',
      cta: 'Book with Renan',
      badge: '★ AWARD WINNING',
      photoAlt: 'Renan Muniz winning a tattoo competition',
    },

    portfolio: {
      eyebrow: 'Portfolio',
      title1: 'Lines that',
      title2: 'last forever.',
      seeMore: 'See more →',
      seeMoreMobile: 'See more on Instagram',
      hover: 'View on Instagram',
      alt: 'Tattoo by Renan Muniz',
    },

    studio: {
      eyebrow: 'The Studio',
      title: 'More than a studio.',
      text:
        'Private Tattoo has a personality of its own. No dark, closed-off room here. Everyone is welcome ❤',
      amenities: [
        { icon: '🧊', title: 'Fridge', desc: 'Bring your own cold drink and enjoy the session' },
        { icon: '🍽️', title: 'Microwave and utensils', desc: 'Need a snack during the session? Heat it up here. We have all the cutlery and utensils to make life easier.' },
        { icon: '☕', title: 'Fresh coffee', desc: 'A session would not be the same without it' },
        { icon: '📺', title: 'Full smart TV', desc: 'Every streaming service and channel available. From Champions League to series and movies, we can watch it all.' },
        { icon: '🖼️', title: 'Custom decor', desc: 'Every corner in here has a story. Come see them all.' },
      ],
    },

    process: {
      eyebrow: 'Process',
      title1: 'How does it work?',
      title2: 'Curious, right?',
      steps: [
        { n: '01', title: 'Send your idea', desc: 'Fill in the form with what you have in mind, the size and the placement (it does not have to be exact, a rough idea already helps a lot).' },
        { n: '02', title: 'Quote', desc: 'Once we confirm a few details (placement, size and so on) I send you the final quote. No price changes and no surprises on the session day.' },
        { n: '03', title: 'Confirmation', desc: 'Quote approved, time to pick a date! We ask for a small deposit to confirm, and that amount is deducted from the total.' },
        { n: '04', title: 'Pre-session care', desc: 'I send you every tip and instruction to follow until the session day. It makes a huge difference in the final result.' },
        { n: '05', title: 'Session day', desc: 'When the big day comes I confirm the time with you. Then just show up and get tattooed.' },
      ],
      noteLabel: 'Important: ',
      noteText: 'The artwork is created before the session and shown to you on the day. In specific cases I send it one day earlier.',
      cta: 'Start now',
    },

    location: {
      eyebrow: 'Location',
      title1: 'How to',
      title2: 'get here?',
      items: [
        { title: 'Teresópolis, Rio de Janeiro', desc: 'Av. Lúcio Meira, 210 — Brazil' },
        { title: 'Landmarks', desc: 'Across from Curso Centena and Subway, on the stairway between Clínica Sorriso Serrano and the "Saldão de Tere" store' },
        { title: 'By appointment only', desc: 'Personalized service, no rush and no queues' },
      ],
      ctaWa: 'Book a session',
      ctaMap: 'Open the map',
      mapAria: 'Open in Google Maps',
      mapAlt: 'How to get to Renan Muniz Tattoo — Teresópolis, Brazil',
      mapOpen: 'Open in Google Maps',
    },

    finalCta: {
      eyebrow: 'Shall we?',
      title1: 'Your next',
      title2: 'tattoo',
      title3: 'is waiting.',
      text: 'Send your idea over and let Renan turn it into permanent art.',
      cta: 'Book your session',
    },

    footer: {
      rights: 'Renan Muniz Tattoo · Teresópolis, Brazil',
      madeBy: 'Made by Landing48',
    },

    form: {
      eyebrow: 'Booking',
      title: 'Tell me about you',
      subtitle: 'Fill this in and Renan gets back to you personally.',
      name: 'Your name',
      namePlaceholder: 'What should I call you?',
      from: 'Where are you from?',
      fromPlaceholder: 'City / Country',
      instagram: 'Instagram',
      instagramPlaceholder: '@yourhandle',
      phone: 'Phone / WhatsApp',
      phonePlaceholder: '+1 555 000 0000',
      idea: 'Your tattoo idea (optional)',
      ideaPlaceholder: 'Style, size, body placement, dates...',
      submit: 'Send',
      sending: 'Sending...',
      required: 'Required field',
      invalidPhone: 'Enter a valid phone number',
      close: 'Close',
      privacy: 'Your details are only used to talk to you about your tattoo.',
      successTitle: 'Got it!',
      successText: 'Thank you! Renan will get back to you shortly.',
      successWa: 'Talk on WhatsApp now',
      errorText: 'I could not send it right now. Try WhatsApp instead:',
      leadHeader: 'New lead from the website',
    },
  },
}

/* ── Estado / State ────────────────────────────────────────────────── */
function detectLocale() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'pt' || saved === 'en') return saved
  } catch {
    /* localStorage indisponível */
  }
  const browser = (navigator.language || 'pt').toLowerCase()
  return browser.startsWith('pt') ? 'pt' : 'en'
}

export const locale = ref(detectLocale())
export const t = computed(() => messages[locale.value])
export const isEn = computed(() => locale.value === 'en')

export function setLocale(next) {
  if (next !== 'pt' && next !== 'en') return
  locale.value = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    /* localStorage indisponível */
  }
}

export function toggleLocale() {
  setLocale(locale.value === 'pt' ? 'en' : 'pt')
}

function applyDocumentMeta(loc) {
  const m = messages[loc]
  document.documentElement.lang = m.htmlLang
  document.title = m.meta.title

  const pairs = [
    ['meta[name="description"]', 'content', m.meta.description],
    ['meta[property="og:title"]', 'content', m.meta.title],
    ['meta[property="og:description"]', 'content', m.meta.description],
  ]
  pairs.forEach(([selector, attr, value]) => {
    const el = document.querySelector(selector)
    if (el) el.setAttribute(attr, value)
  })
}

watch(locale, applyDocumentMeta, { immediate: true })
