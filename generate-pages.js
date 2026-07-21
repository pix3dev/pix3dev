'use strict';

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');

// ── LOCALE DATA ───────────────────────────────────────────────────────────────

const locales = {
  en: {
    outDir: SRC,
    lang: 'en',
    ogLocale: 'en_US',
    cssPath: './style.css',
    canonical: 'https://pix3.dev/',
    ogUrl: 'https://pix3.dev/',
    alternates: [
      { lang: 'x-default', href: 'https://pix3.dev/' },
      { lang: 'en',        href: 'https://pix3.dev/' },
      { lang: 'ru',        href: 'https://pix3.dev/ru/' },
    ],
    switcher: {
      en: { href: '/',    active: true  },
      ru: { href: '/ru/', active: false },
    },
    meta: {
      title:      'Pix3 | The Technical Alchemist for 2D & 3D Playable Ads',
      description:'Workstation-grade WebGL editor for 2D and 3D playable ads and mini-games — AI-driven workflows, real-time collaboration, one unified pipeline.',
      ogImageAlt: 'Pix3 editor interface preview',
    },
    nav: {
      product:    'Product',
      features:   'Features',
      showcase:   'Showcase',
      pricing:    'Pricing',
      openEditor: 'Open Editor',
    },
    hero: {
      badge:      'Beta Access Now Open',
      h1Before:   'The Ultimate Editor for',
      h1Highlight:'2D &amp; 3D Playable Ads',
      h1After:    'and Mini-Games',
      p:          'Zero-install WebGL editor with a unified 2D &amp; 3D pipeline. Build playable ads and mini-games directly in your browser — no downloads, no setup, no wait.',
      cta1:       'Open Editor in Browser',
      cta2:       'Watch Demo',
      subline:    'Zero install • Works in any browser • Start in 3 seconds',
      editorAlt:  'Professional Pix3 editor interface showing a 3D scene with textured blocks, scene tree hierarchy, asset browser with model previews, and detailed asset inspector.',
    },
    techStrip: [
      'ThreeJS Engine',
      'AI Agent Integrated',
      'Web-Based PWA',
      'Client-side WebGL 2.0',
    ],
    pipeline: {
      badge:      'Architecture',
      h2:         'Unified 2D/3D',
      h2Highlight:'Rendering Pipeline',
      p:          'Unlike Unity or Godot where UI and 3D live in separate rendering contexts, Pix3 uses a single Three.js pipeline for everything. No complex transitions, no context switching — just seamless hybrid rendering.',
      card1Title: 'Single Rendering Context',
      card1p:     '2D UI components (built with Lit) and 3D scenes share the same WebGL context — no iframes, no portals, no compromises.',
      card2Title: 'Zero-Overhead Interoperability',
      card2p:     'UI elements can be projected into 3D space or wrap 3D objects. Blur effects, transforms, and animations apply uniformly.',
    },
    features: {
      h2:         'Precision Engineering for',
      h2Highlight:'Playable Ads',
      p:          "Every pixel counts when you have 5 seconds to capture a user's attention. Pix3 is built for the technical alchemy of conversion — for both 2D sprite creatives and full 3D scenes.",
      f1Title:    'AI-Powered Asset Creation &amp; Optimization',
      f1p:        'Cut creative weight by up to 90% without losing visual fidelity. Our AI agent handles mesh decimation and Draco compression for 3D, plus sprite atlas packing and adaptive texture compression for 2D — automatically.',
      f1Tags:     ['Draco 2.0', 'Auto-Retopo', 'LOD Gen', 'Sprite Atlas'],
      f1ImageAlt: 'Technical schematic showing a 3D robot model being optimized from high poly to low poly mesh with statistics overlays',
      f2Title:    'One-Click Network Publishing',
      f2p:        'Instant validation for AppLovin, IronSource, Unity LevelPlay, and Mintegral. No more manual SDK wrapping.',
      f3Title:    'Figma for 2D &amp; 3D Games',
      f3p:        'Collaborate in real-time across 2D layouts and 3D scenes. Designers edit materials and sprites while developers debug logic in the same project. Version control and branching built directly into the viewport.',
      f4Title:    'AI Compositor &amp; Library',
      f4p:        'Access 10k+ pre-optimized assets — low-poly 3D models and 2D sprite packs. Use natural language to compose scenes: "Add a cyberpunk street with neon signs and rainy floor reflections."',
      f4ImageAlt: 'Grid view of 3D assets library including icons for stylized trees, characters, and UI elements in a dark mode interface',
    },
    dx: {
      badge:      'Developer Experience',
      h2:         'Familiar Patterns,',
      h2Highlight:'Web-Native Speed',
      p:          "If you've worked with Unity, Godot, or Three.js — you already know Pix3. No black boxes, no proprietary scripting.",
      card1Title: 'TypeScript First',
      card1p:     'Full type safety with IDE autocomplete. Your game logic is just TypeScript classes with decorators.',
      card2Title: 'Autoload Singletons',
      card2p:     "Just add @autoload() — your services are available everywhere instantly, like Godot's autoloads.",
      card3Title: 'Component System',
      card3p:     'ECS-inspired component model. Each entity is a collection of behaviors you can compose.',
    },
    future: {
      badge:      'Coming Soon',
      h2:         'The Future of',
      h2Highlight:'Pix3',
      p:          'We are expanding beyond ads. Pix3 is evolving into a comprehensive engine for the web gaming renaissance.',
      item1Title: 'Instant Web Portals',
      item1p:     'Publish directly to Poki, CrazyGames, and Yandex Games with automated ranking optimization.',
      item2Title: 'Native Store Wrappers',
      item2p:     'Export to iOS, Android, and Steam via high-performance native bridges.',
      imageAlt:   'Abstract visualization of a digital bridge connecting a web browser to multiple app store icons in a futuristic tech aesthetic',
    },
    cta: {
      h2:   'READY TO ASCEND?',
      p:    'Join the beta today and join the top 1% of creative studios building the next generation of interactive 2D &amp; 3D content.',
      btn1: 'Join the Beta',
      btn2: 'Contact Sales',
    },
    footer: {
      tagline:          'The technical editor for high-performance 2D &amp; 3D creatives. Engineered for the alchemist developer.',
      platformHeading:  'Platform',
      platformLinks:    ['Documentation', 'Showcase', 'Pricing'],
      communityHeading: 'Community',
      communityLinks:   ['Discord', 'GitHub', 'Twitter'],
      companyHeading:   'Company',
      companyLinks:     ['Careers', 'Privacy'],
      copyright:        '&copy; 2026 Pix3 Technologies. Built for the Technical Alchemist.',
    },
  },

  ru: {
    outDir: path.join(SRC, 'ru'),
    lang: 'ru',
    ogLocale: 'ru_RU',
    cssPath: '../style.css',
    canonical: 'https://pix3.dev/ru/',
    ogUrl: 'https://pix3.dev/ru/',
    alternates: [
      { lang: 'x-default', href: 'https://pix3.dev/' },
      { lang: 'en',        href: 'https://pix3.dev/' },
      { lang: 'ru',        href: 'https://pix3.dev/ru/' },
    ],
    switcher: {
      en: { href: '/',    active: false },
      ru: { href: '/ru/', active: true  },
    },
    meta: {
      title:      'Pix3 | Редактор игровой рекламы 2D и 3D на WebGL',
      description:'Профессиональный WebGL-редактор для 2D и 3D игровой рекламы и мини-игр — ИИ-сценарии, совместная работа в реальном времени, единый конвейер рендеринга.',
      ogImageAlt: 'Превью интерфейса редактора Pix3',
    },
    nav: {
      product:    'Продукт',
      features:   'Возможности',
      showcase:   'Витрина',
      pricing:    'Цены',
      openEditor: 'Открыть редактор',
    },
    hero: {
      badge:      'Бета-доступ открыт',
      h1Before:   'Главный редактор для',
      h1Highlight:'2D &amp; 3D игровой рекламы',
      h1After:    'и мини-игр',
      p:          'WebGL-редактор без установки с единым конвейером 2D &amp; 3D. Создавайте игровую рекламу и мини-игры прямо в браузере — без скачивания, без настройки, без ожидания.',
      cta1:       'Открыть редактор',
      cta2:       'Смотреть демо',
      subline:    'Без установки • Работает в любом браузере • Старт за 3 секунды',
      editorAlt:  'Профессиональный интерфейс редактора Pix3: 3D-сцена с текстурированными блоками, иерархия объектов, браузер ассетов с превью моделей и детальный инспектор.',
    },
    techStrip: [
      'Движок ThreeJS',
      'Встроенный ИИ-агент',
      'Веб-приложение PWA',
      'WebGL 2.0 на стороне клиента',
    ],
    pipeline: {
      badge:      'Архитектура',
      h2:         'Единый конвейер',
      h2Highlight:'рендеринга 2D/3D',
      p:          'В отличие от Unity или Godot, где UI и 3D работают в разных контекстах рендеринга, Pix3 использует единый конвейер Three.js для всего. Без сложных переходов, без переключения контекста — только бесшовный гибридный рендеринг.',
      card1Title: 'Единый контекст рендеринга',
      card1p:     'Компоненты 2D UI (на базе Lit) и 3D-сцены используют один WebGL-контекст — без iframe, без порталов, без компромиссов.',
      card2Title: 'Нулевые накладные расходы',
      card2p:     'UI-элементы можно проецировать в 3D-пространство или оборачивать 3D-объекты. Blur-эффекты, трансформации и анимации применяются единообразно.',
    },
    features: {
      h2:         'Точная инженерия для',
      h2Highlight:'игровой рекламы',
      p:          'Каждый пиксель важен, когда у вас есть 5 секунд на захват внимания пользователя. Pix3 создан для технической алхимии конверсии — как для 2D-спрайтов, так и для полноценных 3D-сцен.',
      f1Title:    'ИИ-создание и оптимизация ассетов',
      f1p:        'Сократите вес креативов до 90% без потери качества. ИИ-агент выполняет децимацию полигонов и Draco-компрессию для 3D, а также упаковку спрайт-атласов и адаптивное сжатие текстур для 2D — автоматически.',
      f1Tags:     ['Draco 2.0', 'Auto-Retopo', 'LOD Gen', 'Sprite Atlas'],
      f1ImageAlt: 'Техническая схема оптимизации 3D-модели робота от высокополигональной до низкополигональной сетки с отображением статистики',
      f2Title:    'Публикация в сеть одним кликом',
      f2p:        'Мгновенная валидация для AppLovin, IronSource, Unity LevelPlay и Mintegral. Больше никакой ручной обёртки SDK.',
      f3Title:    'Figma для 2D &amp; 3D-игр',
      f3p:        'Совместная работа в реальном времени над 2D-макетами и 3D-сценами. Дизайнеры редактируют материалы и спрайты, разработчики отлаживают логику — в одном проекте. Контроль версий и ветвление прямо во вьюпорте.',
      f4Title:    'ИИ-компоновщик и библиотека',
      f4p:        'Доступ к 10 000+ предоптимизированных ассетов — низкополигональные 3D-модели и 2D-спрайт-паки. Компонуйте сцены на естественном языке: «Добавь киберпанк-улицу с неоновыми вывесками и отражениями на мокром полу».',
      f4ImageAlt: 'Сеточный вид библиотеки 3D-ассетов с иконками стилизованных деревьев, персонажей и UI-элементов в тёмном интерфейсе',
    },
    dx: {
      badge:      'Опыт разработчика',
      h2:         'Знакомые паттерны,',
      h2Highlight:'скорость веб-платформы',
      p:          'Если вы работали с Unity, Godot или Three.js — вы уже знаете Pix3. Никаких чёрных ящиков, никаких проприетарных скриптов.',
      card1Title: 'TypeScript прежде всего',
      card1p:     'Полная типобезопасность с автодополнением в IDE. Логика игры — это просто TypeScript-классы с декораторами.',
      card2Title: 'Автозагружаемые синглтоны',
      card2p:     'Просто добавьте @autoload() — ваши сервисы доступны везде мгновенно, как автозагрузки в Godot.',
      card3Title: 'Система компонентов',
      card3p:     'Компонентная модель в духе ECS. Каждая сущность — это набор поведений, которые можно компоновать.',
    },
    future: {
      badge:      'Скоро',
      h2:         'Будущее',
      h2Highlight:'Pix3',
      p:          'Мы выходим за рамки рекламы. Pix3 превращается в комплексный движок для эпохи возрождения веб-игр.',
      item1Title: 'Мгновенные веб-порталы',
      item1p:     'Публикуйте напрямую на Poki, CrazyGames и Яндекс Игры с автоматической оптимизацией ранжирования.',
      item2Title: 'Нативные оболочки для магазинов',
      item2p:     'Экспорт в iOS, Android и Steam через высокопроизводительные нативные мосты.',
      imageAlt:   'Абстрактная визуализация цифрового моста, соединяющего браузер с иконками магазинов приложений в футуристическом технологическом стиле',
    },
    cta: {
      h2:   'ГОТОВЫ К ПОДЪЁМУ?',
      p:    'Вступайте в бету сегодня и присоединяйтесь к топ-1% творческих студий, строящих интерактивный 2D &amp; 3D-контент следующего поколения.',
      btn1: 'Вступить в бету',
      btn2: 'Связаться с продажами',
    },
    footer: {
      tagline:          'Технический редактор для высокопроизводительных 2D &amp; 3D-креативов. Создан для разработчика-алхимика.',
      platformHeading:  'Платформа',
      platformLinks:    ['Документация', 'Витрина', 'Цены'],
      communityHeading: 'Сообщество',
      communityLinks:   ['Discord', 'GitHub', 'Twitter'],
      companyHeading:   'Компания',
      companyLinks:     ['Вакансии', 'Конфиденциальность'],
      copyright:        '&copy; 2026 Pix3 Technologies. Создано для технического алхимика.',
    },
  },
};

// ── ICONS (shared SVG strings) ────────────────────────────────────────────────

const ICONS = {
  techThreejs:  `<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>`,
  techAI:       `<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>`,
  techPWA:      `<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>`,
  techWebGL:    `<svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
  pipeCard1:    `<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>`,
  pipeCard2:    `<svg class="w-6 h-6 text-tertiary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>`,
  featureAI:    `<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path></svg>`,
  featurePublish:`<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>`,
  featureCollab: `<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`,
  featureLib:   `<svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>`,
  dxTS:         `<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>`,
  dxAutoload:   `<svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  dxComponent:  `<svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`,
  futureCheck:  `<svg class="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>`,
  futureLink:   `<svg class="w-24 h-24 text-primary opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.585 15.585a6.215 6.215 0 001.353-1.353L21 10.322a3.522 3.522 0 10-4.981-4.981l-3.91 3.91a6.215 6.215 0 00-1.353 1.353m5.829 5.829a6.215 6.215 0 01-1.353 1.353L10.322 21a3.522 3.522 0 11-4.981-4.981l3.91-3.91a6.215 6.215 0 011.353-1.353m5.829 5.829a6.215 6.215 0 11-5.83-5.83"></path></svg>`,
  heroFlash:    `<svg class="w-5 h-5 text-tertiary" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
  heroExternal: `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>`,
  footerGlobe:  `<svg class="w-5 h-5 text-zinc-700 hover:text-primary transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>`,
  footerSettings:`<svg class="w-5 h-5 text-zinc-700 hover:text-primary transition-colors cursor-pointer" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>`,
};

const TECH_ICONS = [ICONS.techThreejs, ICONS.techAI, ICONS.techPWA, ICONS.techWebGL];

// ── TEMPLATE ──────────────────────────────────────────────────────────────────

function renderPage(l) {
  const sw = l.switcher;

  const langSwitcher = `<div class="flex items-center gap-0.5 text-xs font-headline font-bold tracking-wider">
                <a href="${sw.en.href}"${sw.en.active ? ' aria-current="page"' : ''} class="${sw.en.active ? 'text-on-surface' : 'text-zinc-500 hover:text-yellow-400'} transition-colors px-1.5 py-1">EN</a>
                <span class="text-zinc-700 select-none">|</span>
                <a href="${sw.ru.href}"${sw.ru.active ? ' aria-current="page"' : ''} class="${sw.ru.active ? 'text-on-surface' : 'text-zinc-500 hover:text-yellow-400'} transition-colors px-1.5 py-1">RU</a>
            </div>`;

  const alternateTags = l.alternates
    .map(alt => `    <link rel="alternate" hreflang="${alt.lang}" href="${alt.href}">`)
    .join('\n');

  const h = l.hero;
  const pi = l.pipeline;
  const ft = l.features;
  const dx = l.dx;
  const fu = l.future;
  const c = l.cta;
  const fo = l.footer;

  return `<!DOCTYPE html>

<html class="dark" lang="${l.lang}">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>${l.meta.title}</title>
    <meta name="description" content="${l.meta.description}">
    <link rel="canonical" href="${l.canonical}">
${alternateTags}
    <link rel="icon" type="image/webp" href="/media/icon.webp">
    <!-- Open Graph / Social Preview -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${l.meta.title}">
    <meta property="og:description" content="${l.meta.description}">
    <meta property="og:url" content="${l.ogUrl}">
    <meta property="og:site_name" content="Pix3">
    <meta property="og:locale" content="${l.ogLocale}">
    <meta property="og:image" content="https://pix3.dev/media/editor-interface.jpg">
    <meta property="og:image:secure_url" content="https://pix3.dev/media/editor-interface.jpg">
    <meta property="og:image:alt" content="${l.meta.ogImageAlt}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${l.meta.title}">
    <meta name="twitter:description" content="${l.meta.description}">
    <meta name="twitter:image" content="https://pix3.dev/media/editor-interface.jpg">
    <meta name="twitter:image:alt" content="${l.meta.ogImageAlt}">
    <!-- Preload critical resources -->
    <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="/fonts/spacegrotesk.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" as="image" href="/media/editor-interface.jpg"
        imagesrcset="/media/editor-interface.webp" type="image/webp" fetchpriority="high">

    <link rel="stylesheet" href="${l.cssPath}">
</head>

<body class="selection:bg-primary selection:text-on-primary-container overflow-x-hidden">
    <!-- Yandex.Metrika counter -->
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/108302071" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>
    <!-- Top Navigation Bar -->
    <nav class="fixed top-0 w-full z-50 bg-zinc-950/60 backdrop-blur-xl no-line-rule bg-zinc-900/50">
        <div class="flex justify-between items-center px-8 h-16 max-w-screen-2xl mx-auto w-full">
            <div class="flex items-center space-x-4">
                <a href="/" class="flex items-center">
                    <picture>
                        <source srcset="/media/splash-logo.webp" type="image/webp">
                        <img src="/media/splash-logo.png" alt="Pix3" class="h-8 w-auto"
                            width="756" height="300" decoding="async">
                    </picture>
                </a>
                <a href="https://github.com/pix3dev/pix3" target="_blank" rel="noopener noreferrer" class="hidden sm:flex items-center">
                    <img src="https://img.shields.io/github/stars/pix3dev/pix3?style=social" alt="GitHub stars" class="h-6">
                </a>
            </div>
            <div class="hidden md:flex items-center space-x-8 font-['Space_Grotesk'] text-sm tracking-tight">
                <a class="text-zinc-400 font-medium hover:text-yellow-400 transition-colors duration-300"
                    href="#">${l.nav.product}</a>
                <a class="text-zinc-400 font-medium hover:text-yellow-400 transition-colors duration-300"
                    href="#">${l.nav.features}</a>
                <a class="text-zinc-400 font-medium hover:text-yellow-400 transition-colors duration-300"
                    href="#">${l.nav.showcase}</a>
                <a class="text-zinc-400 font-medium hover:text-yellow-400 transition-colors duration-300"
                    href="#">${l.nav.pricing}</a>
            </div>
            ${langSwitcher}
            <a href="https://editor.pix3.dev"
                class="bg-primary text-on-primary px-5 py-2 rounded-sm font-semibold text-sm scale-95 active:scale-90 transition-transform uppercase tracking-wider inline-flex items-center gap-2">
                ${l.nav.openEditor}
            </a>
        </div>
    </nav>
    <!-- Hero Section -->
    <section class="relative pt-32 pb-20 px-8 hero-gradient overflow-hidden">
        <div class="max-w-7xl mx-auto text-center relative z-10">
            <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-highest border border-outline-variant/20 mb-8">
                <span class="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span class="text-[10px] font-bold tracking-[0.2em] text-on-surface-variant uppercase">${h.badge}</span>
            </div>
            <h1
                class="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface max-w-4xl mx-auto mb-6">
                ${h.h1Before} <span class="text-primary italic">${h.h1Highlight}</span> ${h.h1After}
            </h1>
            <p class="font-body text-lg text-on-surface-variant max-w-2xl mx-auto mb-10 leading-relaxed">
                ${h.p}
            </p>
            <div class="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
                <a href="https://editor.pix3.dev"
                    class="w-full md:w-auto px-8 py-4 bg-primary text-on-primary font-bold rounded-sm text-sm uppercase tracking-widest hover:brightness-110 transition-all inline-flex items-center justify-center gap-2">
                    ${ICONS.heroExternal}
                    ${h.cta1}
                </a>
                <button
                    class="w-full md:w-auto px-8 py-4 border border-outline-variant/30 text-on-surface font-bold rounded-sm text-sm uppercase tracking-widest hover:bg-surface-container-highest transition-all">
                    ${h.cta2}
                </button>
            </div>
            <div class="flex items-center justify-center gap-2 text-sm text-on-surface-variant mb-20">
                ${ICONS.heroFlash}
                <span>${h.subline}</span>
            </div>
            <!-- Main Editor Visual -->
            <div class="relative group">
                <div
                    class="absolute -inset-1 bg-gradient-to-r from-primary/20 to-tertiary/20 rounded-xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity">
                </div>
                <div
                    class="relative bg-surface-container-lowest rounded-lg border border-outline-variant/20 overflow-hidden shadow-2xl">
                    <picture>
                        <source srcset="/media/editor-interface.webp" type="image/webp">
                        <img class="w-full h-auto object-cover opacity-90"
                            alt="${h.editorAlt}"
                            src="/media/editor-interface.jpg" width="1469" height="791"
                            fetchpriority="high" decoding="async" />
                    </picture>
                    <!-- Floating Tech Accents -->
                    <div class="absolute top-4 left-4 glass-panel p-3 rounded border border-white/5 hidden md:block">
                        <div class="flex items-center gap-4">
                            <div class="flex flex-col items-start">
                                <span class="text-[10px] text-primary font-bold uppercase tracking-tighter">FPS</span>
                                <span class="text-xl font-headline font-bold">120.0</span>
                            </div>
                            <div class="w-px h-8 bg-outline-variant/30"></div>
                            <div class="flex flex-col items-start">
                                <span class="text-[10px] text-tertiary font-bold uppercase tracking-tighter">Draw
                                    Calls</span>
                                <span class="text-xl font-headline font-bold">42</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Tech Specs Strip -->
    <div class="bg-surface-container-low border-y border-outline-variant/10 py-6">
        <div class="max-w-7xl mx-auto px-8 flex flex-wrap justify-center md:justify-between items-center gap-8">
            ${l.techStrip.map((label, i) => `<div
                class="flex items-center gap-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all">
                ${TECH_ICONS[i]}
                <span class="font-headline font-bold text-sm tracking-widest uppercase">${label}</span>
            </div>`).join('\n            ')}
        </div>
    </div>
    <!-- Unified 2D/3D Rendering Pipeline -->
    <section class="py-24 px-8 bg-surface-container-low">
        <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <div class="inline-block px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                        ${pi.badge}</div>
                    <h2 class="font-headline text-4xl font-bold mb-6 text-on-surface">${pi.h2} <span class="text-primary">${pi.h2Highlight}</span></h2>
                    <p class="text-on-surface-variant text-lg leading-relaxed mb-8">
                        ${pi.p}
                    </p>
                    <div class="space-y-4">
                        <div class="flex items-start gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant/10">
                            <div class="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                                ${ICONS.pipeCard1}
                            </div>
                            <div>
                                <h4 class="font-bold text-on-surface mb-1">${pi.card1Title}</h4>
                                <p class="text-sm text-on-surface-variant">${pi.card1p}</p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4 p-4 bg-surface-container rounded-lg border border-outline-variant/10">
                            <div class="w-10 h-10 rounded-lg bg-tertiary/20 flex items-center justify-center flex-shrink-0">
                                ${ICONS.pipeCard2}
                            </div>
                            <div>
                                <h4 class="font-bold text-on-surface mb-1">${pi.card2Title}</h4>
                                <p class="text-sm text-on-surface-variant">${pi.card2p}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div class="bg-surface-container-lowest rounded-xl border border-outline-variant/20 overflow-hidden p-6">
                        <div class="flex items-center gap-2 mb-4 border-b border-outline-variant/20 pb-3">
                            <div class="w-3 h-3 rounded-full bg-red-500"></div>
                            <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div class="w-3 h-3 rounded-full bg-green-500"></div>
                            <span class="ml-2 text-xs text-zinc-500 font-mono">player-controller.ts</span>
                        </div>
                        <pre class="text-xs md:text-sm font-mono text-zinc-300 overflow-x-auto"><code><span class="text-purple-400">@autoload</span>()
<span class="text-purple-400">export class</span> <span class="text-yellow-300">PlayerController</span> <span class="text-purple-400">extends</span> <span class="text-blue-300">Component</span> {
    
    <span class="text-zinc-500">// Unity/Godot-style lifecycle hooks</span>
    <span class="text-purple-400">onStart</span>() {
        <span class="text-purple-400">this</span>.velocity = <span class="text-blue-300">vec3</span>.zero();
        <span class="text-purple-400">this</span>.speed = <span class="text-orange-300">10</span>;
    }

    <span class="text-purple-400">onUpdate</span>(<span class="text-blue-300">dt</span>: <span class="text-green-300">number</span>) {
        <span class="text-purple-400">const</span> input = <span class="text-blue-300">Input</span>.<span class="text-yellow-300">getAxis</span>(<span class="text-green-300">"Movement"</span>);
        
        <span class="text-purple-400">this</span>.entity.<span class="text-yellow-300">translate</span>(input.<span class="text-yellow-300">mul</span>(<span class="text-purple-400">this</span>.speed * dt));
        
        <span class="text-purple-400">if</span> (<span class="text-blue-300">Input</span>.<span class="text-yellow-300">isJustPressed</span>(<span class="text-green-300">"Jump"</span>)) {
            <span class="text-purple-400">this</span>.<span class="text-yellow-300">jump</span>();
        }
    }

    <span class="text-purple-400">@property</span>({ <span class="text-yellow-300">range</span>: [<span class="text-orange-300">1</span>, <span class="text-orange-300">20</span>] })
    speed: <span class="text-green-300">number</span> = <span class="text-orange-300">10</span>;
}</code></pre>
                    </div>
                    <div class="absolute -bottom-4 -right-4 bg-surface-container-highest px-4 py-2 rounded-lg border border-outline-variant/20 shadow-xl">
                        <span class="text-xs text-on-surface-variant">TypeScript</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Features Bento Grid -->
    <section class="py-24 px-8 bg-surface">
        <div class="max-w-7xl mx-auto">
            <div class="mb-16">
                <h2 class="font-headline text-4xl font-bold mb-4">${ft.h2} <span
                        class="text-primary">${ft.h2Highlight}</span></h2>
                <p class="text-on-surface-variant max-w-xl">${ft.p}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
                <!-- Feature 1: AI Asset Creation -->
                <div
                    class="md:col-span-8 bg-surface-container-low rounded-lg p-8 border border-outline-variant/10 hover:border-primary/30 transition-colors">
                    <div class="flex flex-col md:flex-row gap-8 h-full">
                        <div class="flex-1">
                            ${ICONS.featureAI}
                            <h3 class="font-headline text-2xl font-bold mb-3 text-on-surface mt-4">${ft.f1Title}</h3>
                            <p class="text-on-surface-variant text-sm leading-relaxed mb-6">
                                ${ft.f1p}
                            </p>
                            <div class="flex flex-wrap gap-2">
                                ${ft.f1Tags.map(tag => `<span
                                    class="px-2 py-1 bg-surface-container-highest text-[10px] font-bold text-primary uppercase rounded">${tag}</span>`).join('\n                                ')}
                            </div>
                        </div>
                        <div class="flex-1 bg-surface-container-lowest rounded p-4 border border-outline-variant/10">
                            <picture>
                                <source srcset="/media/ai-asset-schematic.webp" type="image/webp">
                                <img class="w-full h-full object-cover rounded opacity-80"
                                    alt="${ft.f1ImageAlt}"
                                    src="/media/ai-asset-schematic.png" width="512" height="512"
                                    loading="lazy" decoding="async" />
                            </picture>
                        </div>
                    </div>
                </div>
                <!-- Feature 2: One-Click Publishing -->
                <div
                    class="md:col-span-4 bg-surface-container-low rounded-lg p-8 border border-outline-variant/10 hover:border-primary/30 transition-colors">
                    ${ICONS.featurePublish}
                    <h3 class="font-headline text-2xl font-bold mb-3 text-on-surface mt-4">${ft.f2Title}</h3>
                    <p class="text-on-surface-variant text-sm leading-relaxed mb-6">
                        ${ft.f2p}
                    </p>
                    <div class="space-y-3">
                        <div
                            class="flex items-center justify-between p-2 bg-surface-container-highest rounded text-[10px] font-bold text-on-surface-variant">
                            <span>UNITY LEVELPLAY</span>
                            <span class="text-tertiary">VALIDATED</span>
                        </div>
                        <div
                            class="flex items-center justify-between p-2 bg-surface-container-highest rounded text-[10px] font-bold text-on-surface-variant">
                            <span>APPLOVIN MREC</span>
                            <span class="text-tertiary">VALIDATED</span>
                        </div>
                    </div>
                </div>
                <!-- Feature 3: Real-Time Collab -->
                <div
                    class="md:col-span-5 bg-surface-container-low rounded-lg p-8 border border-outline-variant/10 hover:border-primary/30 transition-colors">
                    ${ICONS.featureCollab}
                    <h3 class="font-headline text-2xl font-bold mb-3 text-on-surface mt-4">${ft.f3Title}</h3>
                    <p class="text-on-surface-variant text-sm leading-relaxed">
                        ${ft.f3p}
                    </p>
                </div>
                <!-- Feature 4: Asset Library -->
                <div
                    class="md:col-span-7 bg-surface-container-low rounded-lg p-8 border border-outline-variant/10 hover:border-primary/30 transition-colors">
                    <div class="flex flex-col md:flex-row gap-8 items-center">
                        <div class="flex-1">
                            ${ICONS.featureLib}
                            <h3 class="font-headline text-2xl font-bold mb-3 text-on-surface mt-4">${ft.f4Title}</h3>
                            <p class="text-on-surface-variant text-sm leading-relaxed">
                                ${ft.f4p}
                            </p>
                        </div>
                        <div
                            class="w-full md:w-48 h-32 bg-surface-container-lowest rounded border border-outline-variant/20 overflow-hidden">
                            <picture>
                                <source srcset="/media/asset-library-grid.webp" type="image/webp">
                                <img class="w-full h-full object-cover"
                                    alt="${ft.f4ImageAlt}"
                                    src="/media/asset-library-grid.png" width="512" height="512"
                                    loading="lazy" decoding="async" />
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Developer Experience -->
    <section class="py-24 px-8 bg-surface">
        <div class="max-w-7xl mx-auto">
            <div class="text-center mb-16">
                <div class="inline-block px-3 py-1 bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-bold uppercase tracking-widest mb-6">
                    ${dx.badge}</div>
                <h2 class="font-headline text-4xl font-bold mb-4 text-on-surface">${dx.h2} <span class="text-primary">${dx.h2Highlight}</span></h2>
                <p class="text-on-surface-variant max-w-2xl mx-auto">${dx.p}</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="bg-surface-container-low rounded-lg p-6 border border-outline-variant/10">
                    <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        ${ICONS.dxTS}
                    </div>
                    <h3 class="font-headline text-xl font-bold mb-3 text-on-surface">${dx.card1Title}</h3>
                    <p class="text-sm text-on-surface-variant mb-4">${dx.card1p}</p>
                    <pre class="text-xs font-mono text-zinc-400 bg-surface-container-lowest p-3 rounded border border-outline-variant/10"><code>@property()
speed: number = 10;</code></pre>
                </div>
                <div class="bg-surface-container-low rounded-lg p-6 border border-outline-variant/10">
                    <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        ${ICONS.dxAutoload}
                    </div>
                    <h3 class="font-headline text-xl font-bold mb-3 text-on-surface">${dx.card2Title}</h3>
                    <p class="text-sm text-on-surface-variant mb-4">${dx.card2p}</p>
                    <pre class="text-xs font-mono text-zinc-400 bg-surface-container-lowest p-3 rounded border border-outline-variant/10"><code>@autoload()
class AudioManager {
  playSfx(name: string) {}
}</code></pre>
                </div>
                <div class="bg-surface-container-low rounded-lg p-6 border border-outline-variant/10">
                    <div class="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                        ${ICONS.dxComponent}
                    </div>
                    <h3 class="font-headline text-xl font-bold mb-3 text-on-surface">${dx.card3Title}</h3>
                    <p class="text-sm text-on-surface-variant mb-4">${dx.card3p}</p>
                    <pre class="text-xs font-mono text-zinc-400 bg-surface-container-lowest p-3 rounded border border-outline-variant/10"><code>entity.addComponent(RigidBody);
entity.addComponent(Collider);</code></pre>
                </div>
            </div>
        </div>
    </section>
    <!-- Future Section -->
    <section class="py-24 px-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-tertiary/5 blur-[120px] -z-10 rounded-full"></div>
        <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
            <div class="flex-1">
                <div
                    class="inline-block px-3 py-1 bg-tertiary/10 border border-tertiary/20 text-tertiary text-[10px] font-bold uppercase tracking-widest mb-6">
                    ${fu.badge}</div>
                <h2 class="font-headline text-4xl md:text-5xl font-bold mb-6">${fu.h2} <span
                        class="text-white">${fu.h2Highlight}</span></h2>
                <p class="text-on-surface-variant text-lg leading-relaxed mb-8">
                    ${fu.p}
                </p>
                <ul class="space-y-4">
                    <li class="flex items-start gap-4">
                        <div class="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            ${ICONS.futureCheck}
                        </div>
                        <div>
                            <span class="font-bold text-on-surface block">${fu.item1Title}</span>
                            <p class="text-sm text-on-surface-variant">${fu.item1p}</p>
                        </div>
                    </li>
                    <li class="flex items-start gap-4">
                        <div class="mt-1 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                            ${ICONS.futureCheck}
                        </div>
                        <div>
                            <span class="font-bold text-on-surface block">${fu.item2Title}</span>
                            <p class="text-sm text-on-surface-variant">${fu.item2p}</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="flex-1 relative">
                <div
                    class="aspect-video bg-surface-container rounded-xl border border-outline-variant/20 overflow-hidden">
                    <picture>
                        <source srcset="/media/bridge-visual.webp" type="image/webp">
                        <img class="w-full h-full object-cover grayscale opacity-50"
                            alt="${fu.imageAlt}"
                            src="/media/bridge-visual.png" width="512" height="512"
                            loading="lazy" decoding="async" />
                    </picture>
                    <div class="absolute inset-0 flex items-center justify-center">
                        ${ICONS.futureLink}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Final CTA -->
    <section class="py-24 px-8">
        <div class="max-w-5xl mx-auto bg-primary rounded-lg p-12 text-center relative overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-full opacity-10 bg-[url('/media/carbon-fibre.webp')]">
            </div>
            <h2 class="font-headline text-4xl font-black text-on-primary mb-6 relative z-10">${c.h2}</h2>
            <p class="text-on-primary/80 font-medium mb-10 max-w-xl mx-auto relative z-10">
                ${c.p}
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                <button
                    class="px-10 py-4 bg-surface text-white font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-surface-bright transition-colors">
                    ${c.btn1}
                </button>
                <button
                    class="px-10 py-4 border-2 border-on-primary text-on-primary font-bold rounded-sm uppercase tracking-widest text-sm hover:bg-on-primary/10 transition-colors">
                    ${c.btn2}
                </button>
            </div>
        </div>
    </section>
    <!-- Footer -->
    <footer class="bg-zinc-950 w-full py-12 px-8 border-t border-zinc-900/20 tonal-depth-shift bg-zinc-900/20">
        <div class="max-w-7xl mx-auto w-full">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                <div class="col-span-2 md:col-span-1">
                    <div class="text-lg font-black text-zinc-200 mb-4 font-headline uppercase">Pix3</div>
                    <p class="font-['Inter'] text-xs text-zinc-500 leading-relaxed max-w-[200px]">
                        ${fo.tagline}
                    </p>
                </div>
                <div>
                    <h4 class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">${fo.platformHeading}</h4>
                    <ul class="space-y-2">
                        ${fo.platformLinks.map(link => `<li><a class="font-['Inter'] text-xs text-zinc-500 hover:text-yellow-400 hover:underline decoration-yellow-400 underline-offset-4 transition-all"
                                href="#">${link}</a></li>`).join('\n                        ')}
                    </ul>
                </div>
                <div>
                    <h4 class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">${fo.communityHeading}</h4>
                    <ul class="space-y-2">
                        ${fo.communityLinks.map(link => `<li><a class="font-['Inter'] text-xs text-zinc-500 hover:text-yellow-400 hover:underline decoration-yellow-400 underline-offset-4 transition-all"
                                href="#">${link}</a></li>`).join('\n                        ')}
                    </ul>
                </div>
                <div>
                    <h4 class="text-[10px] font-bold text-zinc-400 uppercase tracking-widest mb-4">${fo.companyHeading}</h4>
                    <ul class="space-y-2">
                        ${fo.companyLinks.map(link => `<li><a class="font-['Inter'] text-xs text-zinc-500 hover:text-yellow-400 hover:underline decoration-yellow-400 underline-offset-4 transition-all"
                                href="#">${link}</a></li>`).join('\n                        ')}
                    </ul>
                </div>
            </div>
            <div class="pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4">
                <span class="font-['Inter'] text-xs text-zinc-500">${fo.copyright}</span>
                <div class="flex gap-4 items-center">
                    <a href="/" class="${sw.en.active ? 'text-primary' : 'text-zinc-600 hover:text-primary'} transition-colors text-xs font-headline font-bold tracking-wider">EN</a>
                    <span class="text-zinc-800 select-none text-xs">|</span>
                    <a href="/ru/" class="${sw.ru.active ? 'text-primary' : 'text-zinc-600 hover:text-primary'} transition-colors text-xs font-headline font-bold tracking-wider">RU</a>
                    <span class="w-px h-4 bg-zinc-800"></span>
                    ${ICONS.footerGlobe}
                    ${ICONS.footerSettings}
                </div>
            </div>
        </div>
    </footer>

    <!-- Yandex.Metrika counter (loaded after first paint) -->
    <script>
        (function () {
            function loadMetrika() {
                (function (m, e, t, r, i, k, a) {
                    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                    m[i].l = 1 * new Date();
                    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
                    k = e.createElement(t); a = e.getElementsByTagName(t)[0]; k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
                })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=108302071', 'ym');
                ym(108302071, 'init', { ssr: true, webvisor: true, clickmap: true, ecommerce: 'dataLayer', referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true });
            }
            if ('requestIdleCallback' in window) {
                requestIdleCallback(loadMetrika, { timeout: 3000 });
            } else {
                window.addEventListener('load', function () { setTimeout(loadMetrika, 1500); });
            }
        })();
    </script>
</body>

</html>`;
}

// ── GENERATE ──────────────────────────────────────────────────────────────────

function generate() {
  for (const [, locale] of Object.entries(locales)) {
    fs.mkdirSync(locale.outDir, { recursive: true });
    const html = renderPage(locale);
    const outFile = path.join(locale.outDir, 'index.html');
    fs.writeFileSync(outFile, html, 'utf8');
    console.log(`Generated: ${path.relative(__dirname, outFile)}`);
  }
}

generate();
