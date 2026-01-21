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
    "Fitness City — это современный фитнес-центр, специализирующийся на восстановительных тренировках и лечебной физкультуре. Мы создали пространство, где каждый может заниматься эффективно и с комфортом, независимо от уровня подготовки и состояния здоровья.",
    "Наш подход основан на индивидуальной работе с каждым клиентом. Мы внимательно изучаем ваши цели, особенности организма и возможные ограничения, чтобы разработать программу, которая подходит именно вам.",
    "Мы работаем с людьми, которым важно восстановиться после травм или операций, укрепить спину, улучшить подвижность суставов или просто поддерживать тело в тонусе эффективными методами.",
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
  title: string;
  /** Optional description (e.g., "Сертификат", "Диплом", "Удостоверение") */
  kind?: string;
  /** Optional file URL/path to open/download */
  url?: string;
};

export type Trainer = {
  id: number;
  name: string;
  specialization: string;
  experience: string;
  certifications: string[];
  photo: string;
  tags: string[];
  /** Per-trainer phone; will be filled later */
  phone?: string;
  /** tel: link for call button */
  phoneLink?: string;
  /** Documents/certificates to show in modal */
  documents?: TrainerDocument[];
};

export const trainers: Trainer[] = [
  {
    id: 1,
    name: "Александр Петров",
    specialization: "Восстановительный фитнес, ЛФК",
    experience: "12 лет опыта",
    certifications: ["Специалист по восстановительному фитнесу", "Специалист по ЛФК"],
    photo: "/images/photo-1567013127542-490d757e51fc.jpg",
    tags: ["ЛФК", "Восстановительный фитнес"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
  },
  {
    id: 2,
    name: "Елена Соколова",
    specialization: "Лечебная гимнастика, Здоровая спина",
    experience: "8 лет опыта",
    certifications: ["Инструктор ЛФК", "Кинезиолог"],
    photo: "/images/photo-1594381898411-846e7d193883.jpg",
    tags: ["ЛФК", "Здоровая спина"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
  },
  {
    id: 3,
    name: "Дмитрий Волков",
    specialization: "Силовой тренинг, Персональные тренировки",
    experience: "10 лет опыта",
    certifications: ["Персональный тренер", "Специалист по силовой подготовке"],
    photo: "/images/photo-1571019614242-c5c5dee9f50b.jpg",
    tags: ["Силовой", "Персональный"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
  },
  {
    id: 4,
    name: "Мария Козлова",
    specialization: "Mobility, Растяжка, Йога",
    experience: "6 лет опыта",
    certifications: ["Инструктор по йоге", "Специалист по растяжке"],
    photo: "/images/photo-1518611012118-696072aa579a.jpg",
    tags: ["Растяжка", "Mobility"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
  },
  {
    id: 5,
    name: "Андрей Новиков",
    specialization: "Восстановительный фитнес, Коррекция осанки",
    experience: "15 лет опыта",
    certifications: ["Мастер спорта", "Специалист по восстановительному фитнесу"],
    photo: "/images/photo-1567013127542-490d757e51fc.jpg",
    tags: ["Восстановительный фитнес", "Осанка"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
  },
  {
    id: 6,
    name: "Ольга Смирнова",
    specialization: "Групповые занятия, ЛФК",
    experience: "7 лет опыта",
    certifications: ["Фитнес-инструктор", "Специалист ЛФК"],
    photo: "/images/photo-1594381898411-846e7d193883.jpg",
    tags: ["Групповые", "ЛФК"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
  },
  {
    id: 7,
    name: "Игорь Федоров",
    specialization: "Силовой тренинг, Здоровая спина",
    experience: "9 лет опыта",
    certifications: ["Персональный тренер", "Кинезиотерапевт"],
    photo: "/images/photo-1571019614242-c5c5dee9f50b.jpg",
    tags: ["Силовой", "Здоровая спина"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
  },
  {
    id: 8,
    name: "Наталья Белова",
    specialization: "Программа 55+, Лечебная гимнастика",
    experience: "11 лет опыта",
    certifications: ["Геронтолог", "Инструктор ЛФК"],
    photo: "/images/photo-1518611012118-696072aa579a.jpg",
    tags: ["55+", "ЛФК"],
    phone: siteConfig.contact.phone,
    phoneLink: siteConfig.contact.phoneLink,
    documents: [],
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
      { name: "Массаж", price: "Уточняйте", duration: "по запросу" },
      { name: "Кинезиотерапия", price: "Уточняйте", duration: "по запросу" },
      { name: "Кинезиотейпирование", price: "Уточняйте", duration: "по запросу" },
      { name: "Подарочный сертификат", price: "Любая сумма", duration: "на выбор" },
    ],
  },
];
