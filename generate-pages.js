'use strict';

const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'src');

// ── SITE CONSTANTS (every outbound link lives here) ───────────────────────────

const SITE = {
  editor: 'https://editor.pix3.dev',
  github: 'https://github.com/pix3dev/pix3',
  // Star count is rendered statically (no external badge request, no CLS).
  // Bump it when it drifts: gh api repos/pix3dev/pix3 --jq .stargazers_count
  githubStars: 8,
  demoVideoId: 'apBppZ5j36o',
  metrikaId: 108302071,
  ogImage: 'https://pix3.dev/media/editor-interface.jpg',
};

// ── LOCALE STRINGS ────────────────────────────────────────────────────────────
// `en` is the complete reference dictionary. Every other locale holds overrides
// and is deep-merged onto `en`, so a missing or not-yet-translated key falls
// back to English rather than rendering empty. Keep the key shape identical.

const strings = {
  en: {
    meta: {
      title: 'Pix3 | The Ultimate Editor for 2D &amp; 3D Playable Ads',
      description:
        'Workstation-grade WebGL editor for 2D and 3D playable ads and mini-games — AI-driven workflows, real-time collaboration, one unified pipeline.',
      ogImageAlt: 'Pix3 editor interface preview',
    },
    a11y: {
      skip: 'Skip to content',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      watchDemo: 'Watch demo video',
      mainNav: 'Main navigation',
      videoTitle: 'Pix3 demo',
      stars: 'GitHub stars',
    },
    nav: {
      product: 'Product',
      features: 'Features',
      developers: 'Developers',
      pricing: 'Pricing',
      openEditor: 'Open Editor',
      github: 'GitHub',
    },
    hero: {
      eyebrow: 'Beta Access Now Open',
      h1Before: 'The Ultimate Editor for',
      h1Highlight: '2D &amp; 3D Playable Ads',
      h1After: 'and Mini-Games',
      p: 'Zero-install WebGL editor with a unified 2D &amp; 3D pipeline. Build playable ads and mini-games directly in your browser — no downloads, no setup, no wait.',
      cta1: 'Open Editor in Browser',
      cta2: 'Watch Demo',
      trust: ['Zero install', 'Works in any browser', 'Start in 3 seconds', 'No credit card'],
      frameTitle: 'editor.pix3.dev — main-scene.pix3scene',
      playLabel: 'Watch demo',
      editorAlt:
        'Professional Pix3 editor interface showing a 3D scene with textured blocks, scene tree hierarchy, asset browser with model previews, and detailed asset inspector.',
      chips: {
        fps: 'FPS',
        drawCalls: 'Draw calls',
        buildSize: 'Build size',
      },
    },
    techStrip: ['ThreeJS Engine', 'AI Agent Integrated', 'Web-Based PWA', 'Client-side WebGL 2.0'],
    workflow: {
      eyebrow: 'Workflow',
      h2Line1: 'Brief to network-ready build,',
      h2Line2: 'in one browser tab',
      p: 'No local toolchain, no export dance between DCC, engine and SDK wrapper. Three steps from an empty scene to a validated creative.',
      steps: [
        {
          num: '01 / Compose',
          title: 'Open the editor and drop in assets',
          p: 'Start from 10k+ pre-optimized 3D models and 2D sprite packs, or compose a scene with natural language. 2D layouts and 3D scenes live in the same project.',
          meta: 'Start in 3 seconds',
        },
        {
          num: '02 / Build logic',
          title: 'Write TypeScript you already know',
          p: 'Unity- and Godot-style lifecycle hooks, components and autoloads — with full type safety and IDE autocomplete. No proprietary scripting.',
          meta: 'Familiar patterns',
        },
        {
          num: '03 / Ship',
          title: 'Publish with one click',
          p: 'The AI agent cuts creative weight by up to 90%, then Pix3 validates the build for AppLovin, IronSource, Unity LevelPlay and Mintegral. No manual SDK wrapping.',
          meta: 'Validated output',
        },
      ],
    },
    pipeline: {
      eyebrow: 'Architecture',
      h2: 'Unified 2D/3D',
      h2Highlight: 'Rendering Pipeline',
      p: 'Unlike Unity or Godot where UI and 3D live in separate rendering contexts, Pix3 uses a single Three.js pipeline for everything. No complex transitions, no context switching — just seamless hybrid rendering.',
      card1Title: 'Single Rendering Context',
      card1p:
        '2D UI components (built with Lit) and 3D scenes share the same WebGL context — no iframes, no portals, no compromises.',
      card2Title: 'Zero-Overhead Interoperability',
      card2p:
        'UI elements can be projected into 3D space or wrap 3D objects. Blur effects, transforms, and animations apply uniformly.',
      codeTitle: 'player-controller.ts',
    },
    features: {
      eyebrow: 'Capabilities',
      h2: 'Precision Engineering for',
      h2Highlight: 'Playable Ads',
      p: "Every pixel counts when you have 5 seconds to capture a user's attention. Pix3 is built for the technical alchemy of conversion — for both 2D sprite creatives and full 3D scenes.",
      f1Title: 'AI-Powered Asset Creation &amp; Optimization',
      f1p: 'Cut creative weight by up to 90% without losing visual fidelity. Our AI agent handles mesh decimation and Draco compression for 3D, plus sprite atlas packing and adaptive texture compression for 2D — automatically.',
      f1Tags: ['Draco 2.0', 'Auto-Retopo', 'LOD Gen', 'Sprite Atlas'],
      f1ImageAlt:
        'Technical schematic showing a 3D robot model being optimized from high poly to low poly mesh with statistics overlays',
      f2Title: 'One-Click Network Publishing',
      f2p: 'Instant validation for AppLovin, IronSource, Unity LevelPlay, and Mintegral. No more manual SDK wrapping.',
      f2Validated: 'Validated',
      f2Rows: ['Unity LevelPlay', 'AppLovin MREC', 'IronSource'],
      f3Title: 'Figma for 2D &amp; 3D Games',
      f3p: 'Collaborate in real-time across 2D layouts and 3D scenes. Designers edit materials and sprites while developers debug logic in the same project. Version control and branching built directly into the viewport.',
      f4Title: 'AI Compositor &amp; Library',
      f4p: 'Access 10k+ pre-optimized assets — low-poly 3D models and 2D sprite packs. Use natural language to compose scenes: “Add a cyberpunk street with neon signs and rainy floor reflections.”',
      f4ImageAlt:
        'Grid view of 3D assets library including icons for stylized trees, characters, and UI elements in a dark mode interface',
    },
    band: {
      eyebrow: 'Why teams switch',
      quote:
        '“A playable used to mean a Unity build, a manual SDK wrap, and a day of round-trips. In Pix3 the designer and I work in the same scene and the validated build is out the same afternoon.”',
      avatar: 'LOGO',
      whoName: 'Placeholder testimonial',
      whoText: 'Swap for a real beta studio quote — drop the name, role and logo here.',
      stats: [
        { v: '−90%', k: 'Creative weight, without losing fidelity' },
        { v: '4', k: 'Ad networks validated on export' },
        { v: '10k+', k: 'Pre-optimized 2D &amp; 3D assets' },
        { v: '3s', k: 'From link click to editing a scene' },
      ],
    },
    dx: {
      eyebrow: 'Developer Experience',
      h2: 'Familiar Patterns,',
      h2Highlight: 'Web-Native Speed',
      p: "If you've worked with Unity, Godot, or Three.js — you already know Pix3. No black boxes, no proprietary scripting.",
      card1Title: 'TypeScript First',
      card1p:
        'Full type safety with IDE autocomplete. Your game logic is just TypeScript classes with decorators.',
      card2Title: 'Autoload Singletons',
      card2p:
        "Just add @autoload() — your services are available everywhere instantly, like Godot's autoloads.",
      card3Title: 'Component System',
      card3p:
        'ECS-inspired component model. Each entity is a collection of behaviors you can compose.',
    },
    future: {
      eyebrow: 'Coming Soon',
      h2: 'The Future of',
      h2Highlight: 'Pix3',
      p: 'We are expanding beyond ads. Pix3 is evolving into a comprehensive engine for the web gaming renaissance.',
      item1Title: 'Instant Web Portals',
      item1p:
        'Publish directly to Poki, CrazyGames, and Yandex Games with automated ranking optimization.',
      item2Title: 'Native Store Wrappers',
      item2p: 'Export to iOS, Android, and Steam via high-performance native bridges.',
      imageAlt:
        'Abstract visualization of a digital bridge connecting a web browser to multiple app store icons in a futuristic tech aesthetic',
    },
    cta: {
      h2: 'Ready to ascend?',
      p: 'Join the beta today and join the top 1% of creative studios building the next generation of interactive 2D &amp; 3D content.',
      btn1: 'Join the Beta',
      btn2: 'Contact Sales',
      fine: 'Free during beta · No install · Cancel anytime',
    },
    footer: {
      tagline:
        'The technical editor for high-performance 2D &amp; 3D creatives. Engineered for the alchemist developer.',
      platformHeading: 'Platform',
      platformLinks: ['Documentation', 'Showcase', 'Pricing'],
      communityHeading: 'Community',
      communityLinks: ['Discord', 'GitHub', 'Twitter'],
      companyHeading: 'Company',
      companyLinks: ['Careers', 'Privacy'],
      copyright: '&copy; 2026 Pix3 Technologies. Built for the Technical Alchemist.',
    },
  },

  ru: {
    meta: {
      title: 'Pix3 | Редактор игровой рекламы 2D и 3D на WebGL',
      description:
        'Профессиональный WebGL-редактор для 2D и 3D игровой рекламы и мини-игр — ИИ-сценарии, совместная работа в реальном времени, единый конвейер рендеринга.',
      ogImageAlt: 'Превью интерфейса редактора Pix3',
    },
    a11y: {
      skip: 'Перейти к содержимому',
      openMenu: 'Открыть меню',
      closeMenu: 'Закрыть меню',
      watchDemo: 'Смотреть демо-видео',
      mainNav: 'Основная навигация',
      videoTitle: 'Демо Pix3',
      stars: 'Звёзды на GitHub',
    },
    nav: {
      product: 'Продукт',
      features: 'Возможности',
      developers: 'Разработчикам',
      pricing: 'Цены',
      openEditor: 'Открыть редактор',
      github: 'GitHub',
    },
    hero: {
      eyebrow: 'Бета-доступ открыт',
      h1Before: 'Главный редактор для',
      h1Highlight: '2D &amp; 3D игровой рекламы',
      h1After: 'и мини-игр',
      p: 'WebGL-редактор без установки с единым конвейером 2D &amp; 3D. Создавайте игровую рекламу и мини-игры прямо в браузере — без скачивания, без настройки, без ожидания.',
      cta1: 'Открыть редактор',
      cta2: 'Смотреть демо',
      trust: [
        'Без установки',
        'Работает в любом браузере',
        'Старт за 3 секунды',
        'Без банковской карты',
      ],
      playLabel: 'Смотреть демо',
      editorAlt:
        'Профессиональный интерфейс редактора Pix3: 3D-сцена с текстурированными блоками, иерархия объектов, браузер ассетов с превью моделей и детальный инспектор.',
      chips: {
        drawCalls: 'Вызовы отрисовки',
        buildSize: 'Вес сборки',
      },
    },
    techStrip: [
      'Движок ThreeJS',
      'Встроенный ИИ-агент',
      'Веб-приложение PWA',
      'WebGL 2.0 на стороне клиента',
    ],
    workflow: {
      eyebrow: 'Процесс',
      h2Line1: 'От брифа до билда, готового к сети,',
      h2Line2: 'в одной вкладке браузера',
      p: 'Никакого локального тулчейна, никакой пляски с экспортом между DCC, движком и обёрткой SDK. Три шага от пустой сцены до проверенного креатива.',
      steps: [
        {
          num: '01 / Компоновка',
          title: 'Откройте редактор и добавьте ассеты',
          p: 'Начните с 10 000+ предоптимизированных 3D-моделей и 2D-спрайт-паков или скомпонуйте сцену на естественном языке. 2D-макеты и 3D-сцены живут в одном проекте.',
          meta: 'Старт за 3 секунды',
        },
        {
          num: '02 / Логика',
          title: 'Пишите на TypeScript, который уже знаете',
          p: 'Хуки жизненного цикла, компоненты и автозагрузки в духе Unity и Godot — с полной типобезопасностью и автодополнением в IDE. Никаких проприетарных скриптов.',
          meta: 'Знакомые паттерны',
        },
        {
          num: '03 / Публикация',
          title: 'Публикуйте одним кликом',
          p: 'ИИ-агент сокращает вес креатива до 90%, затем Pix3 валидирует билд для AppLovin, IronSource, Unity LevelPlay и Mintegral. Никакой ручной обёртки SDK.',
          meta: 'Проверенный результат',
        },
      ],
    },
    pipeline: {
      eyebrow: 'Архитектура',
      h2: 'Единый конвейер',
      h2Highlight: 'рендеринга 2D/3D',
      p: 'В отличие от Unity или Godot, где UI и 3D работают в разных контекстах рендеринга, Pix3 использует единый конвейер Three.js для всего. Без сложных переходов, без переключения контекста — только бесшовный гибридный рендеринг.',
      card1Title: 'Единый контекст рендеринга',
      card1p:
        'Компоненты 2D UI (на базе Lit) и 3D-сцены используют один WebGL-контекст — без iframe, без порталов, без компромиссов.',
      card2Title: 'Нулевые накладные расходы',
      card2p:
        'UI-элементы можно проецировать в 3D-пространство или оборачивать 3D-объекты. Blur-эффекты, трансформации и анимации применяются единообразно.',
    },
    features: {
      eyebrow: 'Возможности',
      h2: 'Точная инженерия для',
      h2Highlight: 'игровой рекламы',
      p: 'Каждый пиксель важен, когда у вас есть 5 секунд на захват внимания пользователя. Pix3 создан для технической алхимии конверсии — как для 2D-спрайтов, так и для полноценных 3D-сцен.',
      f1Title: 'ИИ-создание и оптимизация ассетов',
      f1p: 'Сократите вес креативов до 90% без потери качества. ИИ-агент выполняет децимацию полигонов и Draco-компрессию для 3D, а также упаковку спрайт-атласов и адаптивное сжатие текстур для 2D — автоматически.',
      f1ImageAlt:
        'Техническая схема оптимизации 3D-модели робота от высокополигональной до низкополигональной сетки с отображением статистики',
      f2Title: 'Публикация в сеть одним кликом',
      f2p: 'Мгновенная валидация для AppLovin, IronSource, Unity LevelPlay и Mintegral. Больше никакой ручной обёртки SDK.',
      f2Validated: 'Проверено',
      f3Title: 'Figma для 2D &amp; 3D-игр',
      f3p: 'Совместная работа в реальном времени над 2D-макетами и 3D-сценами. Дизайнеры редактируют материалы и спрайты, разработчики отлаживают логику — в одном проекте. Контроль версий и ветвление прямо во вьюпорте.',
      f4Title: 'ИИ-компоновщик и библиотека',
      f4p: 'Доступ к 10 000+ предоптимизированных ассетов — низкополигональные 3D-модели и 2D-спрайт-паки. Компонуйте сцены на естественном языке: «Добавь киберпанк-улицу с неоновыми вывесками и отражениями на мокром полу».',
      f4ImageAlt:
        'Сеточный вид библиотеки 3D-ассетов с иконками стилизованных деревьев, персонажей и UI-элементов в тёмном интерфейсе',
    },
    band: {
      eyebrow: 'Почему команды переходят',
      quote:
        '«Раньше плейбл означал билд в Unity, ручную обёртку SDK и день переписки. В Pix3 дизайнер и я работаем в одной сцене, и проверенный билд выходит в тот же день.»',
      avatar: 'ЛОГО',
      whoName: 'Место для отзыва',
      whoText: 'Замените на реальную цитату студии из беты — имя, роль и логотип сюда.',
      stats: [
        { v: '−90%', k: 'Вес креатива — без потери качества' },
        { v: '4', k: 'Рекламные сети, проверяемые при экспорте' },
        { v: '10k+', k: 'Предоптимизированных 2D- и 3D-ассетов' },
        { v: '3 с', k: 'От клика по ссылке до работы со сценой' },
      ],
    },
    dx: {
      eyebrow: 'Опыт разработчика',
      h2: 'Знакомые паттерны,',
      h2Highlight: 'скорость веб-платформы',
      p: 'Если вы работали с Unity, Godot или Three.js — вы уже знаете Pix3. Никаких чёрных ящиков, никаких проприетарных скриптов.',
      card1Title: 'TypeScript прежде всего',
      card1p:
        'Полная типобезопасность с автодополнением в IDE. Логика игры — это просто TypeScript-классы с декораторами.',
      card2Title: 'Автозагружаемые синглтоны',
      card2p:
        'Просто добавьте @autoload() — ваши сервисы доступны везде мгновенно, как автозагрузки в Godot.',
      card3Title: 'Система компонентов',
      card3p:
        'Компонентная модель в духе ECS. Каждая сущность — это набор поведений, которые можно компоновать.',
    },
    future: {
      eyebrow: 'Скоро',
      h2: 'Будущее',
      h2Highlight: 'Pix3',
      p: 'Мы выходим за рамки рекламы. Pix3 превращается в комплексный движок для эпохи возрождения веб-игр.',
      item1Title: 'Мгновенные веб-порталы',
      item1p:
        'Публикуйте напрямую на Poki, CrazyGames и Яндекс Игры с автоматической оптимизацией ранжирования.',
      item2Title: 'Нативные оболочки для магазинов',
      item2p: 'Экспорт в iOS, Android и Steam через высокопроизводительные нативные мосты.',
      imageAlt:
        'Абстрактная визуализация цифрового моста, соединяющего браузер с иконками магазинов приложений в футуристическом технологическом стиле',
    },
    cta: {
      h2: 'Готовы к подъёму?',
      p: 'Вступайте в бету сегодня и присоединяйтесь к топ-1% творческих студий, строящих интерактивный 2D &amp; 3D-контент следующего поколения.',
      btn1: 'Вступить в бету',
      btn2: 'Связаться с продажами',
      fine: 'Бесплатно в бете · Без установки · Отмена в любой момент',
    },
    footer: {
      tagline:
        'Технический редактор для высокопроизводительных 2D &amp; 3D-креативов. Создан для разработчика-алхимика.',
      platformHeading: 'Платформа',
      platformLinks: ['Документация', 'Витрина', 'Цены'],
      communityHeading: 'Сообщество',
      communityLinks: ['Discord', 'GitHub', 'Twitter'],
      companyHeading: 'Компания',
      companyLinks: ['Вакансии', 'Конфиденциальность'],
      copyright: '&copy; 2026 Pix3 Technologies. Создано для технического алхимика.',
    },
  },
};

// Hrefs for the footer link columns, positionally paired with the label arrays
// above so translated labels never carry URLs.
const FOOTER_HREFS = {
  platformLinks: ['#', '#', '#pricing'],
  communityLinks: ['#', SITE.github, '#'],
  companyLinks: ['#', '#'],
};

// ── LOCALE ROUTING / SEO ──────────────────────────────────────────────────────

const locales = {
  en: {
    outDir: SRC,
    lang: 'en',
    ogLocale: 'en_US',
    cssPath: './style.css',
    canonical: 'https://pix3.dev/',
    ogUrl: 'https://pix3.dev/',
    preloadCyrillic: false,
    alternates: [
      { lang: 'x-default', href: 'https://pix3.dev/' },
      { lang: 'en', href: 'https://pix3.dev/' },
      { lang: 'ru', href: 'https://pix3.dev/ru/' },
    ],
    switcher: {
      en: { href: '/', active: true },
      ru: { href: '/ru/', active: false },
    },
  },

  ru: {
    outDir: path.join(SRC, 'ru'),
    lang: 'ru',
    ogLocale: 'ru_RU',
    cssPath: '../style.css',
    canonical: 'https://pix3.dev/ru/',
    ogUrl: 'https://pix3.dev/ru/',
    // /ru/ copy is Cyrillic — preload that subset too, or the first paint of
    // every heading and label swaps late.
    preloadCyrillic: true,
    alternates: [
      { lang: 'x-default', href: 'https://pix3.dev/' },
      { lang: 'en', href: 'https://pix3.dev/' },
      { lang: 'ru', href: 'https://pix3.dev/ru/' },
    ],
    switcher: {
      en: { href: '/', active: false },
      ru: { href: '/ru/', active: true },
    },
  },
};

// Deep-merge locale overrides onto the English reference dictionary. Arrays are
// replaced wholesale (a partially translated list would read worse than an
// English one); missing keys inherit English.
function withFallback(base, override) {
  if (Array.isArray(base)) return Array.isArray(override) ? override : base;
  if (base && typeof base === 'object') {
    const out = {};
    for (const key of Object.keys(base)) {
      const o = override && typeof override === 'object' ? override[key] : undefined;
      out[key] = o === undefined ? base[key] : withFallback(base[key], o);
    }
    return out;
  }
  return override === undefined ? base : override;
}

// ── ICONS ─────────────────────────────────────────────────────────────────────
// One stroke set, all currentColor, no colour literals inside the markup.

const stroke = (size, d, extra = '') =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${d}${extra}</svg>`;

const solid = (size, d) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">${d}</svg>`;

const ICONS = {
  external: (s = 15) => stroke(s, '<path d="M14 4h6v6M20 4l-8.5 8.5M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>'),
  play: (s = 14) => solid(s, '<path d="M8 5.5v13l11-6.5z"/>'),
  bolt: (s = 13) => solid(s, '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>'),
  star: (s = 12) => solid(s, '<path d="M12 2.6l2.7 5.9 6.3.7-4.7 4.3 1.3 6.3L12 16.6l-5.6 3.2 1.3-6.3L3 9.2l6.3-.7z"/>'),
  cube: (s = 17) => stroke(s, '<path d="M12 2 3 7v10l9 5 9-5V7z"/><path d="M12 22V12L3 7M12 12l9-5"/>'),
  robot: (s = 17) => stroke(s, '<path d="M12 3v3M5 9h14v9H5zM9 22h6"/><circle cx="9.5" cy="13.5" r="1.2"/><circle cx="14.5" cy="13.5" r="1.2"/>'),
  device: (s = 17) => stroke(s, '<rect x="7" y="2" width="10" height="20" rx="2"/><path d="M11 18h2"/>'),
  brackets: (s = 17) => stroke(s, '<path d="m9 8-4 4 4 4M15 8l4 4-4 4"/>'),
  window: (s = 17) => stroke(s, '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/>'),
  contrast: (s = 17) => stroke(s, '<circle cx="12" cy="12" r="9"/><path d="M12 3a9 9 0 0 0 0 18"/>'),
  sparkle: (s = 18) => solid(s, '<path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8z"/><path d="M18.5 14.5l.9 2.6 2.6.9-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9z"/>'),
  upload: (s = 18) => stroke(s, '<path d="M12 16V4m0 0L8 8m4-4 4 4M4 16v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3"/>', ''),
  users: (s = 18) => stroke(s, '<circle cx="9" cy="8" r="3"/><circle cx="16.5" cy="9.5" r="2.3"/><path d="M3 19c0-3 2.7-5 6-5s6 2 6 5M15.5 14c2.6.3 5.5 1.6 5.5 5"/>'),
  grid: (s = 18) => stroke(s, '<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>'),
  globe: (s = 18) => stroke(s, '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.4 4 5.6 4 9s-1.5 6.6-4 9c-2.5-2.4-4-5.6-4-9s1.5-6.6 4-9z"/>'),
  check: (s = 12) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 13l4 4L19 7"/></svg>`,
  burger: (s = 18) => stroke(s, '<path d="M4 7h16M4 12h16M4 17h16"/>'),
  close: (s = 18) => stroke(s, '<path d="M6 6l12 12M18 6 6 18"/>'),
};

const TECH_ICONS = [ICONS.cube(), ICONS.robot(), ICONS.device(), ICONS.brackets()];

// ── COMPONENTS ────────────────────────────────────────────────────────────────

/** Button. variant: 'p' (primary, the page's only accent fill) | 's' | 'sm'. */
function btn({ href, label, variant = 'p', small = false, icon = '', attrs = '' }) {
  const cls = `btn ${variant}${small ? ' sm' : ''}`;
  return `<a class="${cls}" href="${href}"${attrs}>${icon}${label}</a>`;
}

/** Bordered, uppercase mono link — used for the GitHub link in the header. */
function ghost({ href, label, note = '', attrs = '' }) {
  return `<a class="ghost" href="${href}"${attrs}>${label}${note ? ` <span class="n">${note}</span>` : ''}</a>`;
}

/** Pill label with an indicator dot. `mint` marks the secondary accent. */
function eyebrow(text, mint = false) {
  return `<span class="eyebrow mono"><span class="dot${mint ? ' m' : ''}"></span>${text}</span>`;
}

/** Eyebrow + h2 (with optional accented tail) + lead. */
function sectionHead({ eyebrow: eb, mint = false, h2, highlight = '', lead, center = false }) {
  const tail = highlight ? ` <span class="em">${highlight}</span>` : '';
  return `<div class="head${center ? ' center' : ''}">${eyebrow(eb, mint)}
                <h2>${h2}${tail}</h2>
                <p class="lead">${lead}</p>
            </div>`;
}

/** <picture> with a WebP source. Always sized, to keep CLS at zero. */
function picture({ src, alt, width, height, cls = '', lazy = true, extra = '' }) {
  const webp = src.replace(/\.(png|jpg|jpeg)$/, '.webp');
  const loading = lazy ? ' loading="lazy"' : ' fetchpriority="high"';
  return `<picture>
                            <source srcset="${webp}" type="image/webp">
                            <img src="${src}" alt="${alt}" width="${width}" height="${height}"${cls ? ` class="${cls}"` : ''}${loading} decoding="async"${extra}>
                        </picture>`;
}

function logo() {
  // No aria-label: the link text ("pix3") is the accessible name, and an
  // aria-label that omits the visible text trips label-content-name-mismatch.
  return `<a class="logo" href="#top"><span class="mark" aria-hidden="true">P</span>pix<sup>3</sup></a>`;
}

function langSwitcher(sw, extraClass = '') {
  return `<div class="lang${extraClass ? ` ${extraClass}` : ''}">
                <a href="${sw.en.href}"${sw.en.active ? ' class="on" aria-current="page"' : ''} lang="en">EN</a>
                <span aria-hidden="true">|</span>
                <a href="${sw.ru.href}"${sw.ru.active ? ' class="on" aria-current="page"' : ''} lang="ru">RU</a>
            </div>`;
}

// ── TEMPLATE ──────────────────────────────────────────────────────────────────

function renderPage(locale) {
  const t = withFallback(strings.en, strings[locale.lang]);
  const sw = locale.switcher;
  const { hero: h, workflow: wf, pipeline: pi, features: ft, band: bd, dx, future: fu, cta: c, footer: fo } = t;

  const navLinks = [
    { href: '#pipeline', label: t.nav.product },
    { href: '#features', label: t.nav.features },
    { href: '#dx', label: t.nav.developers },
    { href: '#pricing', label: t.nav.pricing },
  ];

  const alternateTags = locale.alternates
    .map(alt => `    <link rel="alternate" hreflang="${alt.lang}" href="${alt.href}">`)
    .join('\n');

  const cyrillicPreloads = locale.preloadCyrillic
    ? `\n    <link rel="preload" href="/fonts/ibmplexsans-cyrillic.woff2" as="font" type="font/woff2" crossorigin="anonymous">`
    : '';

  const githubGhost = ghost({
    href: SITE.github,
    label: t.nav.github,
    note: `${ICONS.star()} ${SITE.githubStars}`,
    attrs: ` target="_blank" rel="noopener noreferrer" aria-label="${t.nav.github} — ${SITE.githubStars} ${t.a11y.stars}"`,
  });

  const footerColumn = (heading, key) =>
    `<div>
                    <h2>${heading}</h2>
                    <ul>
                        ${fo[key]
                          .map((label, i) => {
                            const href = FOOTER_HREFS[key][i] || '#';
                            const ext = href.startsWith('http')
                              ? ' target="_blank" rel="noopener noreferrer"'
                              : '';
                            return `<li><a href="${href}"${ext}>${label}</a></li>`;
                          })
                          .join('\n                        ')}
                    </ul>
                </div>`;

  return `<!DOCTYPE html>

<html class="dark no-js" lang="${locale.lang}">

<head>
    <meta charset="utf-8" />
    <meta content="width=device-width, initial-scale=1.0" name="viewport" />
    <title>${t.meta.title}</title>
    <meta name="description" content="${t.meta.description}">
    <link rel="canonical" href="${locale.canonical}">
${alternateTags}
    <link rel="icon" type="image/webp" href="/media/icon.webp">
    <!-- Open Graph / Social Preview -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="${t.meta.title}">
    <meta property="og:description" content="${t.meta.description}">
    <meta property="og:url" content="${locale.ogUrl}">
    <meta property="og:site_name" content="Pix3">
    <meta property="og:locale" content="${locale.ogLocale}">
    <meta property="og:image" content="${SITE.ogImage}">
    <meta property="og:image:secure_url" content="${SITE.ogImage}">
    <meta property="og:image:alt" content="${t.meta.ogImageAlt}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${t.meta.title}">
    <meta name="twitter:description" content="${t.meta.description}">
    <meta name="twitter:image" content="${SITE.ogImage}">
    <meta name="twitter:image:alt" content="${t.meta.ogImageAlt}">
    <!-- Preload critical resources -->
    <link rel="preload" href="/fonts/spacegrotesk.woff2" as="font" type="font/woff2" crossorigin="anonymous">
    <link rel="preload" href="/fonts/ibmplexsans-latin.woff2" as="font" type="font/woff2" crossorigin="anonymous">${cyrillicPreloads}
    <link rel="preload" as="image" href="/media/editor-interface.jpg"
        imagesrcset="/media/editor-interface.webp" type="image/webp" fetchpriority="high">

    <link rel="stylesheet" href="${locale.cssPath}">
    <script>document.documentElement.classList.remove('no-js');</script>
</head>

<body>
    <!-- Yandex.Metrika counter -->
    <noscript>
        <div><img src="https://mc.yandex.ru/watch/${SITE.metrikaId}" style="position:absolute; left:-9999px;" alt="" /></div>
    </noscript>

    <a class="skip-link" href="#main">${t.a11y.skip}</a>

    <header id="hdr">
        <div class="wrap nav">
            ${logo()}
            <nav aria-label="${t.a11y.mainNav}">
                ${navLinks.map(n => `<a href="${n.href}">${n.label}</a>`).join('\n                ')}
            </nav>
            <span class="sp"></span>
            ${githubGhost}
            ${langSwitcher(sw)}
            ${btn({ href: SITE.editor, label: t.nav.openEditor, variant: 'p', small: true })}
            <button class="burger" type="button" id="burger" aria-label="${t.a11y.openMenu}" aria-expanded="false" aria-controls="drawer">${ICONS.burger()}</button>
        </div>
    </header>

    <!-- Mobile drawer (below 640px) -->
    <div class="drawer" id="drawer" aria-hidden="true">
        <div class="wrap">
            <div class="dhead">
                ${logo()}
                <span class="sp"></span>
                <button class="burger" type="button" id="drawer-close" aria-label="${t.a11y.closeMenu}">${ICONS.close()}</button>
            </div>
            <nav aria-label="${t.a11y.mainNav}">
                ${navLinks.map(n => `<a href="${n.href}" data-nav-close>${n.label}</a>`).join('\n                ')}
            </nav>
            <div class="dfoot">
                ${btn({ href: SITE.editor, label: t.nav.openEditor, variant: 'p' })}
                ${githubGhost}
                ${langSwitcher(sw)}
            </div>
        </div>
    </div>

    <main id="main" tabindex="-1">
        <!-- Hero -->
        <div class="hero" id="top">
            <div class="grid-bg" aria-hidden="true"></div>
            <div class="wrap">
                ${eyebrow(h.eyebrow)}
                <h1>${h.h1Before} <i>${h.h1Highlight}</i> ${h.h1After}</h1>
                <p class="lead">${h.p}</p>
                <div class="cta">
                    ${btn({ href: SITE.editor, label: h.cta1, variant: 'p', icon: ICONS.external() })}
                    ${btn({ href: '#demo', label: h.cta2, variant: 's', icon: ICONS.play(), attrs: ' id="watch-demo"' })}
                </div>
                <p class="trust">
                    <span><span class="ic">${ICONS.bolt()}</span>${h.trust[0]}</span>
                    ${h.trust.slice(1).map(item => `<span>${item}</span>`).join('\n                    ')}
                </p>

                <!-- Editor shot / demo player -->
                <div class="shot" id="demo">
                    <div class="frame">
                        <div class="bar">
                            <i aria-hidden="true"></i><i aria-hidden="true"></i><i aria-hidden="true"></i>
                            <span class="t">${h.frameTitle}</span>
                        </div>
                        <div class="media" id="heromedia" data-video-id="${SITE.demoVideoId}"
                            data-video-title="${t.a11y.videoTitle}">
                            ${picture({
                              src: '/media/editor-interface.jpg',
                              alt: h.editorAlt,
                              width: 1469,
                              height: 791,
                              lazy: false,
                            })}
                            <button class="play" type="button" id="playbtn" aria-label="${t.a11y.watchDemo}">
                                <span class="pc" aria-hidden="true">${ICONS.play(22)}</span>
                                <span class="pl mono">${h.playLabel}</span>
                            </button>
                        </div>
                    </div>
                    <div class="chip a" aria-hidden="true">
                        <div class="k">${h.chips.fps}</div>
                        <div class="v">120.0</div>
                    </div>
                    <div class="chip b" aria-hidden="true">
                        <div class="k">${h.chips.drawCalls}</div>
                        <div class="v">42</div>
                    </div>
                    <div class="chip c" aria-hidden="true">
                        <div class="k">${h.chips.buildSize}</div>
                        <div class="v g">−90%</div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Tech strip -->
        <div class="strip">
            <div class="wrap">
                ${t.techStrip.map((label, i) => `<div>${TECH_ICONS[i]}${label}</div>`).join('\n                ')}
            </div>
        </div>

        <!-- Workflow -->
        <section class="reveal" id="workflow">
            <div class="wrap">
                ${sectionHead({
                  eyebrow: wf.eyebrow,
                  h2: `${wf.h2Line1}<br>${wf.h2Line2}`,
                  lead: wf.p,
                  center: true,
                })}
                <div class="steps">
                    ${wf.steps
                      .map(
                        s => `<div class="step">
                        <div class="num">${s.num}</div>
                        <h3>${s.title}</h3>
                        <p>${s.p}</p>
                        <div class="meta">${s.meta}</div>
                    </div>`
                      )
                      .join('\n                    ')}
                </div>
            </div>
        </section>

        <!-- Architecture / pipeline -->
        <section class="reveal section-tight" id="pipeline">
            <div class="wrap two">
                <div>
                    ${sectionHead({
                      eyebrow: pi.eyebrow,
                      h2: pi.h2,
                      highlight: pi.h2Highlight,
                      lead: pi.p,
                    })}
                    <div class="feats">
                        <div class="feat">
                            <span class="ic">${ICONS.window()}</span>
                            <div>
                                <h3>${pi.card1Title}</h3>
                                <p>${pi.card1p}</p>
                            </div>
                        </div>
                        <div class="feat">
                            <span class="ic">${ICONS.contrast()}</span>
                            <div>
                                <h3>${pi.card2Title}</h3>
                                <p>${pi.card2p}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="code">
                    <div class="bar">
                        <i class="r" aria-hidden="true"></i><i class="y" aria-hidden="true"></i><i class="g" aria-hidden="true"></i>
                        <span class="t">${pi.codeTitle}</span>
                    </div>
                    <pre><code><span class="dec">@autoload</span>()
<span class="kw">export class</span> <span class="fn">PlayerController</span> <span class="kw">extends</span> Component {

    <span class="cm">// Unity/Godot-style lifecycle hooks</span>
    <span class="fn">onStart</span>() {
        <span class="kw">this</span>.velocity = vec3.<span class="fn">zero</span>();
        <span class="kw">this</span>.speed = <span class="num2">10</span>;
    }

    <span class="fn">onUpdate</span>(dt: <span class="kw">number</span>) {
        <span class="kw">const</span> input = Input.<span class="fn">getAxis</span>(<span class="str">"Movement"</span>);

        <span class="kw">this</span>.entity.<span class="fn">translate</span>(input.<span class="fn">mul</span>(<span class="kw">this</span>.speed * dt));

        <span class="kw">if</span> (Input.<span class="fn">isJustPressed</span>(<span class="str">"Jump"</span>)) {
            <span class="kw">this</span>.<span class="fn">jump</span>();
        }
    }

    <span class="dec">@property</span>({ range: [<span class="num2">1</span>, <span class="num2">20</span>] })
    speed: <span class="kw">number</span> = <span class="num2">10</span>;
}</code></pre>
                </div>
            </div>
        </section>

        <!-- Capabilities bento -->
        <section class="reveal" id="features">
            <div class="wrap">
                ${sectionHead({
                  eyebrow: ft.eyebrow,
                  h2: ft.h2,
                  highlight: ft.h2Highlight,
                  lead: ft.p,
                })}
                <div class="bento">
                    <div class="card wide">
                        <div class="txt">
                            <span class="ic">${ICONS.sparkle()}</span>
                            <h3>${ft.f1Title}</h3>
                            <p>${ft.f1p}</p>
                            <div class="tags">${ft.f1Tags.map(tag => `<span>${tag}</span>`).join('')}</div>
                        </div>
                        <div class="vis">
                            ${picture({
                              src: '/media/ai-asset-schematic.png',
                              alt: ft.f1ImageAlt,
                              width: 512,
                              height: 512,
                            })}
                        </div>
                    </div>
                    <div class="card">
                        <span class="ic">${ICONS.upload()}</span>
                        <h3>${ft.f2Title}</h3>
                        <p>${ft.f2p}</p>
                        <div class="rows">
                            ${ft.f2Rows
                              .map(
                                name =>
                                  `<div class="row">${name} <b><span class="dot m"></span>${ft.f2Validated}</b></div>`
                              )
                              .join('\n                            ')}
                        </div>
                    </div>
                    <div class="card">
                        <span class="ic">${ICONS.users()}</span>
                        <h3>${ft.f3Title}</h3>
                        <p>${ft.f3p}</p>
                    </div>
                    <div class="card wide flip">
                        <div class="txt">
                            <span class="ic">${ICONS.grid()}</span>
                            <h3>${ft.f4Title}</h3>
                            <p>${ft.f4p}</p>
                        </div>
                        <div class="vis">
                            ${picture({
                              src: '/media/asset-library-grid.png',
                              alt: ft.f4ImageAlt,
                              width: 512,
                              height: 512,
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Why teams switch -->
        <div class="band reveal">
            <div class="wrap">
                <div>
                    ${eyebrow(bd.eyebrow)}
                    <blockquote>${bd.quote}</blockquote>
                    <div class="who">
                        <span class="av" aria-hidden="true">${bd.avatar}</span>
                        <div><strong>${bd.whoName}</strong><br>${bd.whoText}</div>
                    </div>
                </div>
                <div class="stats">
                    ${bd.stats
                      .map(
                        s => `<div>
                        <div class="v">${s.v}</div>
                        <div class="k">${s.k}</div>
                    </div>`
                      )
                      .join('\n                    ')}
                </div>
            </div>
        </div>

        <!-- Developer experience -->
        <section class="reveal" id="dx">
            <div class="wrap">
                ${sectionHead({
                  eyebrow: dx.eyebrow,
                  mint: true,
                  h2: dx.h2,
                  highlight: dx.h2Highlight,
                  lead: dx.p,
                  center: true,
                })}
                <div class="dx">
                    <div class="card">
                        <span class="ic">${ICONS.brackets(18)}</span>
                        <h3>${dx.card1Title}</h3>
                        <p>${dx.card1p}</p>
                        <pre><code><span class="dec">@property</span>()
speed: <span class="kw">number</span> = <span class="num2">10</span>;</code></pre>
                    </div>
                    <div class="card">
                        <span class="ic">${ICONS.bolt(18)}</span>
                        <h3>${dx.card2Title}</h3>
                        <p>${dx.card2p}</p>
                        <pre><code><span class="dec">@autoload</span>()
<span class="kw">class</span> <span class="fn">AudioManager</span> {
  <span class="fn">playSfx</span>(name: <span class="kw">string</span>) {}
}</code></pre>
                    </div>
                    <div class="card">
                        <span class="ic">${ICONS.globe()}</span>
                        <h3>${dx.card3Title}</h3>
                        <p>${dx.card3p}</p>
                        <pre><code>entity.<span class="fn">addComponent</span>(RigidBody);
entity.<span class="fn">addComponent</span>(Collider);</code></pre>
                    </div>
                </div>
            </div>
        </section>

        <!-- Coming soon -->
        <section class="reveal section-tight" id="future">
            <div class="wrap two">
                <div>
                    ${sectionHead({
                      eyebrow: fu.eyebrow,
                      mint: true,
                      h2: fu.h2,
                      highlight: fu.h2Highlight,
                      lead: fu.p,
                    })}
                    <div class="checks">
                        <div class="check">
                            <span class="tick" aria-hidden="true">${ICONS.check()}</span>
                            <div>
                                <h3>${fu.item1Title}</h3>
                                <p>${fu.item1p}</p>
                            </div>
                        </div>
                        <div class="check">
                            <span class="tick" aria-hidden="true">${ICONS.check()}</span>
                            <div>
                                <h3>${fu.item2Title}</h3>
                                <p>${fu.item2p}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="vis">
                    ${picture({
                      src: '/media/bridge-visual.png',
                      alt: fu.imageAlt,
                      width: 512,
                      height: 512,
                    })}
                </div>
            </div>
        </section>

        <!-- Final CTA -->
        <div class="final reveal" id="pricing">
            <div class="wrap">
                <div class="box">
                    <h2>${c.h2}</h2>
                    <p>${c.p}</p>
                    <div class="cta">
                        ${btn({ href: SITE.editor, label: c.btn1, variant: 'p' })}
                        ${btn({ href: '#', label: c.btn2, variant: 's' })}
                    </div>
                    <div class="fine">${c.fine}</div>
                </div>
            </div>
        </div>
    </main>

    <!-- Footer -->
    <footer>
        <div class="wrap">
            <div class="fgrid">
                <div>
                    ${logo()}
                    <p>${fo.tagline}</p>
                    <div class="cta">
                        ${btn({ href: SITE.editor, label: t.nav.openEditor, variant: 'p', small: true })}
                    </div>
                </div>
                ${footerColumn(fo.platformHeading, 'platformLinks')}
                ${footerColumn(fo.communityHeading, 'communityLinks')}
                ${footerColumn(fo.companyHeading, 'companyLinks')}
            </div>
            <div class="fbot">
                <span>${fo.copyright}</span>
                ${langSwitcher(sw)}
            </div>
        </div>
    </footer>

    <script>
        (function () {
            var reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

            // Sticky header gets a line + denser background once scrolled.
            var hdr = document.getElementById('hdr');
            addEventListener('scroll', function () {
                hdr.classList.toggle('stuck', scrollY > 8);
            }, { passive: true });

            // Reveal on scroll — once per element, ~15% visible. Elements taller
            // than the viewport can never reach that ratio, so they reveal on
            // first intersection instead.
            var revealables = document.querySelectorAll('.reveal');
            if (reduceMotion || !('IntersectionObserver' in window)) {
                revealables.forEach(function (el) { el.classList.add('in'); });
            } else {
                var io = new IntersectionObserver(function (entries) {
                    entries.forEach(function (e) {
                        var tall = e.boundingClientRect.height > innerHeight * 0.6;
                        if (e.isIntersecting && (tall || e.intersectionRatio >= 0.15)) {
                            e.target.classList.add('in');
                            io.unobserve(e.target);
                        }
                    });
                }, { threshold: [0, 0.15] });
                revealables.forEach(function (el) { io.observe(el); });
            }

            // Demo: swap the still for the embed on demand (no third-party
            // request until the visitor asks for it).
            var media = document.getElementById('heromedia');
            function playDemo() {
                if (!media || media.dataset.on) return;
                media.dataset.on = '1';
                media.closest('.shot').setAttribute('data-playing', '');
                var frame = document.createElement('iframe');
                frame.src = 'https://www.youtube-nocookie.com/embed/' + media.dataset.videoId + '?autoplay=1&rel=0';
                frame.title = media.dataset.videoTitle;
                frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
                frame.allowFullscreen = true;
                media.replaceChildren(frame);
            }
            var playBtn = document.getElementById('playbtn');
            if (playBtn) playBtn.addEventListener('click', playDemo);
            var watchDemo = document.getElementById('watch-demo');
            if (watchDemo) watchDemo.addEventListener('click', function () { playDemo(); });

            // Mobile drawer.
            var burger = document.getElementById('burger');
            var drawer = document.getElementById('drawer');
            var drawerClose = document.getElementById('drawer-close');
            function setNav(open) {
                drawer.toggleAttribute('data-open', open);
                drawer.setAttribute('aria-hidden', String(!open));
                burger.setAttribute('aria-expanded', String(open));
                document.body.toggleAttribute('data-nav-open', open);
                (open ? drawerClose : burger).focus();
            }
            burger.addEventListener('click', function () { setNav(true); });
            drawerClose.addEventListener('click', function () { setNav(false); });
            drawer.querySelectorAll('[data-nav-close]').forEach(function (el) {
                el.addEventListener('click', function () { setNav(false); });
            });
            addEventListener('keydown', function (e) {
                if (e.key === 'Escape' && drawer.hasAttribute('data-open')) setNav(false);
            });
            matchMedia('(min-width: 901px)').addEventListener('change', function (e) {
                if (e.matches && drawer.hasAttribute('data-open')) setNav(false);
            });
        })();
    </script>

    <!-- Yandex.Metrika counter (loaded after first paint) -->
    <script>
        (function () {
            function loadMetrika() {
                (function (m, e, t, r, i, k, a) {
                    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
                    m[i].l = 1 * new Date();
                    for (var j = 0; j < document.scripts.length; j++) { if (document.scripts[j].src === r) { return; } }
                    k = e.createElement(t); a = e.getElementsByTagName(t)[0]; k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
                })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=${SITE.metrikaId}', 'ym');
                ym(${SITE.metrikaId}, 'init', { ssr: true, webvisor: true, clickmap: true, ecommerce: 'dataLayer', referrer: document.referrer, url: location.href, accurateTrackBounce: true, trackLinks: true });
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
