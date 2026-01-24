/**
 * Fitness City Site Configuration
 * 
 * All contact information, links, and content placeholders are centralized here
 * for easy replacement. Simply update the values below to customize the site.
 */

export const siteConfig = {
  // Basic site info
  name: "Fitness City",
  tagline: "Спорт и медицина",
  description: "Эффективные тренировки, восстановление и укрепление здоровья",
  
  // Contact information
  contact: {
    phone: "+7 (938) 313-77-17",
    phoneLink: "tel:+79383137717",
    whatsapp: "https://wa.me/79383137717",
    // Telegram link to open chat by phone number
    telegram: "https://t.me/+79282621048",
    email: "nbereznitskaya@mail.ru",
    emailLink: "mailto:nbereznitskaya@mail.ru",
    address: "г. Пятигорск, ул. Коллективная, д. 3Б, стр. 2, 2 этаж",
  },
  
  // Map links
  maps: {
    yandex: "https://yandex.ru/maps/org/fitness_city/1563493270/?ll=43.044686%2C44.031876&z=15",
    // Google Maps uses lat,lng (Yandex widget above uses lng,lat)
    google: "https://www.google.com/maps/search/?api=1&query=44.031876%2C43.044686",
    // Placeholder image for map (локальный файл)
    placeholder: "/images/photo-1569336415962-a4bd9f69cd83.jpg",
  },
  
  // Social media
  social: {
    instagram: "https://www.instagram.com/fitness__city26/reels/?__d=1utm_sourceig_embed",
    vk: "https://vk.com/club58209085",
    youtube: "https://youtube.com/@fitnesscity",
  },
  
  // Working hours
  schedule: {
    weekdays: "08:00 – 22:00",
    saturday: "08:00 – 22:00",
    sunday: "08:00 – 20:00",
  },
  
  // Hero section badges
  benefits: [
    { text: "Индивидуальный подход", icon: "User" },
    { text: "Эффективные методики", icon: "Heart" },
    { text: "Опытные специалисты", icon: "Award" },
    { text: "Комфортный зал", icon: "Home" },
  ],
  
  // Navigation items
  navigation: [
    { label: "О нас", href: "#about" },
    { label: "Услуги", href: "#services" },
    { label: "Тренеры", href: "#trainers" },
    { label: "Цены", href: "#pricing" },
    { label: "Контакты", href: "#contacts" },
  ],
  
  // Pricing PDF link (placeholder)
  pricingPdf: "/price-list.pdf",
};

// About section content
export const aboutContent = {
  title: "О нас",
  subtitle: "Ваш путь к здоровью и хорошему самочувствию",
  paragraphs: [
    "Fitness City — это современный семейный фитнес-центр с интегративным, т. е. целостным подходом к здоровью, специализирующийся на восстановительных тренировках и лечебной физкультуре. Мы создали пространство, где каждый член семьи может заниматься эффективно и с комфортом, независимо от уровня подготовки и состояния здоровья.",
    "Наш подход основан на индивидуальной работе с каждым клиентом. Мы внимательно изучаем ваши цели, особенности организма и возможные ограничения, чтобы разработать программы физической активности и питания, которые подходят именно вам.",
    "Мы работаем с людьми, которым важно восстановиться после травм или операций, укрепить спину, улучшить подвижность суставов или просто поддерживать тело в тонусе эффективными методами, с людьми, для которых ЗДОРОВЬЕ — ОСНОВНАЯ ЦЕННОСТЬ И ИНВЕСТИЦИЯ.",
  ],
  trustPoints: [
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Все программы разрабатываются с учётом индивидуальных особенностей и ограничений",
    },
    {
      icon: "GraduationCap",
      title: "Квалификация",
      description: "Тренеры с профильным образованием и опытом работы в восстановительных программах",
    },
    {
      icon: "Target",
      title: "Результат",
      description: "Программы под конкретные цели: восстановление, укрепление, поддержание формы",
    },
    {
      icon: "Users",
      title: "Индивидуальный подход",
      description: "Персональное внимание и адаптация нагрузок под ваши потребности",
    },
  ],
  // Удобства и особенности центра
  amenities: [
    "Wi-Fi",
    "Детский фитнес",
    "Велопарковка",
    "Оплата картой",
    "Предварительная запись",
    "Бесплатная парковка",
    "Подарочный сертификат",
    "Женский зал",
    "Солярий",
    "Кинезиотейпирование",
  ],
};

// Services data
export type ServiceContact = {
  phone: string;
  phoneLink: string;
  whatsapp: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  forWhom: string;
  icon: string;
  contact?: ServiceContact;
};

export const services: Service[] = [
  {
    id: "gym",
    title: "Тренажерный зал",
    description: "Современное оборудование для силовых и кардио тренировок. Безлимитное посещение по абонементу или разовые посещения.",
    forWhom: "Для всех, кто хочет заниматься фитнесом",
    icon: "Activity",
  },
  {
    id: "group",
    title: "Групповые занятия (Женский зал)",
    description: "Йога, пилатес, силовая аэробика, функциональный тренинг. Комфортные групповые занятия в женском зале для поддержания формы и хорошего настроения.",
    forWhom: "Для женщин, которые любят заниматься в компании",
    icon: "Users",
  },
  {
    id: "personal",
    title: "Персональные тренировки",
    description: "Индивидуальные занятия с тренером по программе, разработанной специально для вас. Максимум внимания и контроля техники.",
    forWhom: "Для тех, кто ценит персональный подход и эффективность",
    icon: "UserCheck",
  },
  {
    id: "lfk",
    title: "ЛФК",
    description: "Специальные упражнения для поддержания и укрепления здоровья. Занятия проводятся под контролем специалистов с учётом рекомендаций врачей.",
    forWhom: "Для тех, кому рекомендованы занятия лечебной физкультурой",
    icon: "HeartPulse",
  },
  {
    id: "martial",
    title: "Боевые искусства",
    description: "Тренировки по единоборствам (в т.ч. КУДО) для развития силы, выносливости и навыков самообороны.",
    forWhom: "Для всех, кто интересуется боевыми искусствами",
    icon: "Activity",
  },
  {
    id: "body-analysis",
    title: "Анализ состава тела",
    description: "Биоимпедансометрия — точный анализ состава тела: процент жира, мышц, воды. Контроль прогресса.",
    forWhom: "Для отслеживания результатов тренировок",
    contact: {
      phone: "+7 (928) 262-10-48",
      phoneLink: "tel:+79282621048",
      whatsapp: "https://wa.me/79282621048",
    },
    icon: "Activity",
  },
  {
    id: "nutrition",
    title: "Консультация по питанию и антивозрастной медицине",
    description: "Индивидуальные консультации по питанию и поддержанию здоровья. Рекомендации и программы для достижения ваших целей и улучшения самочувствия.",
    forWhom: "Для тех, кто хочет выстроить питание и заботиться о здоровье",
    contact: {
      phone: "+7 (928) 262-10-48",
      phoneLink: "tel:+79282621048",
      whatsapp: "https://wa.me/79282621048",
    },
    icon: "HeartPulse",
  },
  {
    id: "cosmetology",
    title: "Косметические услуги",
    description: "Прессотерапия, кавитация и другие процедуры для коррекции фигуры и улучшения состояния кожи.",
    forWhom: "Для тех, кто заботится о внешности",
    contact: {
      phone: "+7 (928) 262-10-48",
      phoneLink: "tel:+79282621048",
      whatsapp: "https://wa.me/79282621048",
    },
    icon: "Flower2",
  },
  {
    id: "massage",
    title: "Массаж",
    description: "Профессиональный массаж для расслабления, восстановления и улучшения самочувствия.",
    forWhom: "Для всех, кто хочет расслабиться и восстановиться",
    contact: {
      phone: "+7 (902) 607-93-56",
      phoneLink: "tel:+79026079356",
      whatsapp: "https://wa.me/79026079356",
    },
    icon: "Heart",
  },
  {
    id: "kinesiotherapy",
    title: "Кинезиотерапия",
    description: "Лечение движением. Специализированные программы для восстановления и укрепления опорно-двигательного аппарата.",
    forWhom: "Для восстановления после травм и операций",
    icon: "Activity",
  },
  {
    id: "solarium",
    title: "Солярий",
    description: "Вертикальный солярий для красивого загара в любое время года.",
    forWhom: "Для всех, кто хочет иметь красивый загар",
    icon: "Heart",
  },
  {
    id: "dna-tests",
    title: "ДНК тесты",
    description: "Генетические тесты для оценки индивидуальных особенностей организма и рекомендаций по образу жизни.",
    forWhom: "Для тех, кто хочет лучше понять особенности своего организма",
    contact: {
      phone: "+7 (928) 262-10-48",
      phoneLink: "tel:+79282621048",
      whatsapp: "https://wa.me/79282621048",
    },
    icon: "Activity",
  },
];

// Trainers data
export type TrainerDocument = {
  title?: string;
  /** Optional description (e.g., "Сертификат", "Диплом", "Удостоверение") */
  kind?: string;
  /** Optional file URL/path to open/download */
  url?: string;
  /** Optional preview image URL/path */
  previewUrl?: string;
};

export type Trainer = {
  id: number;
  name: string;
  specialization: string;
  certifications: string[];
  photo: string;
  /** Optional per-trainer photo tweaks (e.g. to crop black bars) */
  photoClassName?: string;
  photoHoverClassName?: string;
  tags: string[];
  /** Per-trainer phone; will be filled later */
  phone?: string;
  /** tel: link for call button */
  phoneLink?: string;
  /** Documents/certificates to show in modal */
  documents?: TrainerDocument[];
};

// Documents page data (each document can consist of multiple images/pages)
export type SiteDocument = {
  id: string;
  /** Ordered list of images (pages) for the scrollable viewer */
  pages: string[];
};

export const siteDocuments: SiteDocument[] = [
  {
    id: "contract",
    pages: [
      "/documents/contract/01.png",
      "/documents/contract/02.png",
      "/documents/contract/03.png",
      "/documents/contract/04.png",
    ],
  },
  {
    id: "inn",
    pages: ["/documents/inn/01.png"],
  },
  {
    id: "ip",
    pages: ["/documents/ip/01.png"],
  },
  {
    id: "ses",
    pages: ["/documents/ses/01.png"],
  },
];

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Наталья Березницкая",
    specialization: "Функциональный тренинг, ЛФК",
    certifications: [],
    photo: "/trainers/natalya-bereznitskaya.png",
    tags: [
      "Функциональный тренинг",
      "Восстановительный фитнес",
      "ЛФК",
      "Программа 45+",
    ],
    phone: "+7 (928) 262-10-48",
    phoneLink: "tel:+79282621048",
    documents: [
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-001.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-001.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-002.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-002.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-003.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-003.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-004.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-004.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-005.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-005.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-006.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-006.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-007.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-007.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-008.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-008.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-009.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-009.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-010.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-010.png",
      },
      {
        kind: "Свидетельство",
        url: "/trainer-docs/natalya-bereznitskaya/pages/file-011.png",
        previewUrl: "/trainer-docs/natalya-bereznitskaya/pages/file-011.png",
      },
    ],
  },
  {
    id: 2,
    name: "Александр Морозов",
    specialization: "Силовой тренинг, Функциональный тренинг",
    certifications: [],
    photo: "/trainers/alexandr-morozov.png",
    tags: [
      "Силовой тренинг",
      "Функциональный тренинг",
      "Восстановительный фитнес",
      "ЛФК",
      "Здоровая спина",
    ],
    phone: "+7 (988) 736-37-19",
    phoneLink: "tel:+79887363719",
    documents: [
      {
        url: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142153.jpg",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142153.jpg",
      },
      {
        url: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142156.jpg",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142156.jpg",
      },
      {
        url: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142158.jpg",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142158.jpg",
      },
      {
        url: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142200.jpg",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142200.jpg",
      },
      {
        url: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142202.jpg",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142202.jpg",
      },
      {
        url: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142206.jpg",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142206.jpg",
      },
      {
        url: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142208.jpg",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/IMG_20260123_142208.jpg",
      },
      {
        url: "/trainer-docs/alexandr-morozov/pages/file-001.png",
        previewUrl: "/trainer-docs/alexandr-morozov/pages/file-001.png",
      },
    ],
  },
  {
    id: 3,
    name: "Игорь Перепелицын",
    specialization: "Восстановительный фитнес, Коррекция осанки",
    certifications: [],
    photo: "/trainers/igor-perepelitsyn.png",
    tags: [
      "Восстановительный фитнес",
      "Коррекция осанки",
      "Силовой тренинг",
      "Функциональный тренинг",
      "Коррекция сколиоза",
      "Работа с дыханием",
    ],
    phone: "+7 (988) 101-57-00",
    phoneLink: "tel:+79881015700",
    documents: [
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144508.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144508.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144907.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144907.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144909.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144909.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144911.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144911.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144912.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144912.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144914.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144914.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144916.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144916.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144918.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144918.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144920.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144920.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144922.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144922.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144924.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144924.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144926.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144926.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144928.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144928.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144936.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144936.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144941.jpg",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/IMG_20260123_144941.jpg",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-001.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-001.png",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-002.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-002.png",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-003.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-003.png",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-004.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-004.png",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-005.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-005.png",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-006.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-006.png",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-007.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-007.png",
      },
      {
        url: "/trainer-docs/igor-perepelitsyn/pages/file-008.png",
        previewUrl: "/trainer-docs/igor-perepelitsyn/pages/file-008.png",
      },
    ],
  },
  {
    id: 4,
    name: "Анна Филатова",
    specialization: "Силовой тренинг, Стретчинг",
    certifications: [],
    photo: "/trainers/anna-filatova.png",
    tags: [
      "Силовой тренинг",
      "Функциональный тренинг",
      "Восстановительный фитнес",
      "Стретчинг",
      "Коррекция осанки",
    ],
    phone: "+7 (928) 319-39-65",
    phoneLink: "tel:+79283193965",
    documents: [
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144154.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144154.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144155.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144155.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144158.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144158.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144200.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144200.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144203.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144203.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144205.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144205.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144208.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144208.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144210.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144210.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144212.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144212.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144214.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144214.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144216.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144216.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144219.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144219.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144222.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144222.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144224.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144224.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144226.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144226.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144228.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144228.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144230.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144230.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144232.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144232.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144234.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144234.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144236.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144236.jpg",
      },
      {
        url: "/trainer-docs/anna-filatova/pages/IMG_20260123_144238.jpg",
        previewUrl: "/trainer-docs/anna-filatova/pages/IMG_20260123_144238.jpg",
      },
    ],
  },
  {
    id: 5,
    name: "Людмила Балабойко",
    specialization: "Функциональный тренинг, ЛФК",
    certifications: [],
    photo: "/trainers/lyudmila-balaboyko.png",
    tags: [
      "Функциональный тренинг",
      "Восстановительный фитнес",
      "Коррекция осанки",
      "ЛФК",
    ],
    phone: "+7 (962) 412-36-50",
    phoneLink: "tel:+79624123650",
    documents: [
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-001.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-001.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-002.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-002.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-003.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-003.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-004.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-004.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-005.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-005.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-006.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-006.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-007.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-007.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-008.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-008.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-009.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-009.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-010.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-010.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-011.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-011.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-012.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-012.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-013.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-013.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-014.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-014.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-015.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-015.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-016.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-016.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-017.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-017.png",
      },
      {
        url: "/trainer-docs/lyudmila-balaboyko/pages/file-018.png",
        previewUrl: "/trainer-docs/lyudmila-balaboyko/pages/file-018.png",
      },
    ],
  },
  {
    id: 6,
    name: "Анастасия Абросимова",
    specialization: "Групповые занятия, Пилатес",
    certifications: [],
    photo: "/trainers/anastasia-abrosimova.png",
    tags: [
      "Групповые занятия",
      "Силовой тренинг",
      "Функциональный тренинг",
      "Пилатес",
    ],
    phone: "+7 (961) 472-20-59",
    phoneLink: "tel:+79614722059",
    documents: [],
  },
  {
    id: 7,
    name: "Андрей Каневец",
    specialization: "Силовой тренинг, Функциональный тренинг",
    certifications: [],
    photo: "/trainers/andrey-kanevets.png",
    tags: ["Силовой тренинг", "Функциональный тренинг", "Восстановительный фитнес"],
    phone: "+7 (928) 320-49-03",
    phoneLink: "tel:+79283204903",
    documents: [],
  },
  {
    id: 8,
    name: "Дарья Панкратова",
    specialization: "Групповые занятия, Стретчинг",
    certifications: [],
    photo: "/trainers/darya-pankratova.png",
    tags: ["Групповые занятия", "Силовой тренинг", "Функциональный тренинг", "Стретчинг"],
    phone: "+7 (962) 008-19-91",
    phoneLink: "tel:+79620081991",
    documents: [],
  },
  {
    id: 9,
    name: "Алина Кузьменко",
    specialization: "Силовой тренинг, Стретчинг",
    certifications: [],
    photo: "/trainers/alina-kuzmenko.png",
    tags: ["Силовой тренинг", "Функциональный тренинг", "Восстановительный фитнес", "Стретчинг"],
    phone: "+7 (962) 007-20-05",
    phoneLink: "tel:+79620072005",
    documents: [],
  },
  {
    id: 10,
    name: "Богдан Заславский",
    specialization: "Силовой тренинг, Функциональный тренинг",
    certifications: [],
    photo: "/trainers/bogdan-zaslavskiy.png",
    photoClassName: "scale-110",
    photoHoverClassName: "group-hover:scale-[1.15]",
    tags: ["Силовой тренинг", "Функциональный тренинг"],
    phone: "+7 (918) 884-19-72",
    phoneLink: "tel:+79188841972",
    documents: [],
  },
  {
    id: 11,
    name: "Бениамин Баяндурян",
    specialization: "Групповые занятия, КУДО",
    certifications: [],
    photo: "/trainers/beniamin-bayanduryan.png",
    tags: ["Групповые занятия", "КУДО"],
    phone: "+7 (909) 766-74-99",
    phoneLink: "tel:+79097667499",
    documents: [],
  },
  {
    id: 12,
    name: "Давид Газаров",
    specialization: "Восстановительный фитнес, Коррекция осанки",
    certifications: [],
    photo: "/trainers/david-gazarov.png",
    tags: [
      "Восстановительный фитнес",
      "Коррекция осанки",
      "Силовой тренинг",
      "Функциональный тренинг",
      "Коррекция сколиоза",
      "Работа с дыханием",
    ],
    phone: "+7 (984) 777-33-31",
    phoneLink: "tel:+79847773331",
    documents: [
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141740.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141740.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141742.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141742.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141744.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141744.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141746.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141746.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141748.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141748.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141750.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141750.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141753.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141753.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141755.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141755.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141757.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141757.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141759.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141759.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141801.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141801.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141803.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141803.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141805.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141805.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141807.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141807.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141809.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141809.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141811.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141811.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141813.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141813.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141815.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141815.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141817.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141817.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141819.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141819.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141821.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141821.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141824.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141824.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141826.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141826.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141829.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141829.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141832.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141832.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141835.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141835.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141838.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141838.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141841.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141841.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141843.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141843.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141846.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141846.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141849.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141849.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141852.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141852.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141855.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141855.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141857.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141857.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141900.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141900.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141902.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141902.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141905.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141905.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141907.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141907.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141910.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141910.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141913.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141913.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141915.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141915.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141918.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141918.jpg",
      },
      {
        url: "/trainer-docs/david-gazarov/pages/IMG_20260123_141920.jpg",
        previewUrl: "/trainer-docs/david-gazarov/pages/IMG_20260123_141920.jpg",
      },
    ],
  },
  {
    id: 13,
    name: "Александра Строкун",
    specialization: "Массаж",
    certifications: [],
    photo: "/trainers/alexandra-strokun.png",
    tags: ["Массаж"],
    phone: "+7 (902) 607-93-56",
    phoneLink: "tel:+79026079356",
    documents: [
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145527.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145527.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145529.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145529.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145530.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145530.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145532.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145532.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145534.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145534.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145535.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145535.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145538.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145538.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145540.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145540.jpg",
      },
      {
        url: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145543.jpg",
        previewUrl: "/trainer-docs/alexandra-strokun/pages/IMG_20260123_145543.jpg",
      },
    ],
  },
];

// Pricing data
export const pricing = [
  {
    category: "Разовые посещения и услуги",
    items: [
      { name: "Разовое посещение тренажерного зала", price: "600 ₽", duration: "1 посещение" },
      { name: "Разовое посещение группового зала", price: "500 ₽", duration: "1 посещение" },
      { name: "Анализ состава тела (биоимпедансометрия)", price: "1 500 ₽", duration: "1 посещение" },
      { name: "Консультация по питанию", price: "1 500 ₽", duration: "1 посещение" },
      { name: "Прессотерапия", price: "1 000 ₽", duration: "1 сеанс" },
      { name: "Кавитация", price: "1 000 ₽", duration: "1 сеанс" },
      { name: "Консультация по антивозрастной терапии", price: "2000 ₽", duration: "1 посещение" },
    ],
  },
  {
    category: "Абонементы в тренажерный зал",
    items: [
      { name: "Абонемент на 1 месяц", price: "3 000 ₽", duration: "30 дней", description: "Безлимитное посещение", popular: true },
      { name: "Абонемент на 3 месяца", price: "7 000 ₽", duration: "3 месяца", description: "Безлимитное посещение. Продление на 2 недели", savings: "Экономия 2 000 ₽" },
      { name: "Абонемент на 6 месяцев", price: "11 000 ₽", duration: "6 месяцев", description: "Безлимитное посещение. Продление на 1 месяц", savings: "Экономия 7 000 ₽" },
      { name: "Абонемент на 12 месяцев", price: "18 000 ₽", duration: "12 месяцев", description: "Безлимитное посещение. Продление на 2 месяца", savings: "Экономия 18 000 ₽" },
    ],
  },
  {
    category: "Дополнительные услуги",
    items: [
      { name: "Солярий (вертикальный)", price: "25-30 ₽", duration: "за минуту" },
      { name: "Сплит-тренировка", price: "700-1 000 ₽", duration: "1 тренировка" },
      { name: "Индивидуальная тренировка", price: "1 200-1 300 ₽", duration: "1 тренировка" },
      { name: "Массаж", price: "Уточняйте", duration: "по запросу" },
      { name: "Кинезиотерапия", price: "Уточняйте", duration: "по запросу" },
      { name: "Кинезиотейпирование", price: "Уточняйте", duration: "по запросу" },
      { name: "Подарочный сертификат", price: "Любая сумма", duration: "на выбор" },
    ],
  },
];
