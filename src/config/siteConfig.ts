/**
 * Fitness City Site Configuration
 * 
 * All contact information, links, and content placeholders are centralized here
 * for easy replacement. Simply update the values below to customize the site.
 */

export const siteConfig = {
  // Basic site info
  name: "Fitness City",
  tagline: "Фитнес и реабилитация / ЛФК",
  description: "Безопасные тренировки, восстановление и укрепление здоровья",
  
  // Contact information
  contact: {
    phone: "+7 (938) 313-77-17",
    phoneLink: "tel:+79383137717",
    whatsapp: "https://wa.me/79383137717",
    telegram: "https://t.me/fitnesscity",
    email: "info@fitnesscity.ru",
    emailLink: "mailto:info@fitnesscity.ru",
    address: "г. Пятигорск, ул. Коллективная, д. 3Б, стр. 2, 2 этаж",
  },
  
  // Map links
  maps: {
    yandex: "https://yandex.ru/maps/org/fitness_city/1563493270/?ll=43.044686%2C44.031876&z=15",
    google: "https://goo.gl/maps/XXXXX",
    // Placeholder image for map
    placeholder: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=600&fit=crop",
  },
  
  // Social media
  social: {
    instagram: "https://www.instagram.com/fitness__city26/",
    vk: "https://vk.com/fitnesscity",
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
    { text: "Бережные методики", icon: "Heart" },
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
    "Fitness City — это современный фитнес-центр, специализирующийся на восстановительных тренировках и лечебной физкультуре. Мы создали пространство, где каждый может заниматься безопасно и эффективно, независимо от уровня подготовки и состояния здоровья.",
    "Наш подход основан на индивидуальной работе с каждым клиентом. Мы внимательно изучаем ваши цели, особенности организма и возможные ограничения, чтобы разработать программу, которая подходит именно вам.",
    "Мы работаем с людьми, которым важно восстановиться после травм или операций, укрепить спину, улучшить подвижность суставов или просто поддерживать тело в тонусе бережными методами.",
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
      description: "Тренеры с профильным образованием и опытом работы в реабилитации",
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
export const services = [
  {
    id: "gym",
    title: "Тренажерный зал",
    description: "Современное оборудование для силовых и кардио тренировок. Безлимитное посещение по абонементу или разовые посещения.",
    forWhom: "Для всех, кто хочет заниматься фитнесом",
    icon: "Activity",
  },
  {
    id: "lfk",
    title: "ЛФК / Лечебная физкультура",
    description: "Специальные упражнения для поддержания и укрепления здоровья. Занятия проводятся под контролем специалистов с учётом рекомендаций врачей.",
    forWhom: "Для тех, кому рекомендованы занятия лечебной физкультурой",
    icon: "HeartPulse",
  },
  {
    id: "kinesiotherapy",
    title: "Кинезиотерапия",
    description: "Лечение движением. Специализированные программы для восстановления и укрепления опорно-двигательного аппарата.",
    forWhom: "Для восстановления после травм и операций",
    icon: "Activity",
  },
  {
    id: "personal",
    title: "Персональные тренировки",
    description: "Индивидуальные занятия с тренером по программе, разработанной специально для вас. Максимум внимания и контроля техники.",
    forWhom: "Для тех, кто ценит персональный подход и эффективность",
    icon: "UserCheck",
  },
  {
    id: "group",
    title: "Групповые занятия",
    description: "Йога, пилатес, силовая аэробика, функциональный тренинг. Занятия в группах для поддержания формы и хорошего настроения.",
    forWhom: "Для тех, кто любит заниматься в компании",
    icon: "Users",
  },
  {
    id: "martial",
    title: "Боевые искусства (КУДО)",
    description: "Смешанные единоборства КУДО. Тренировки для развития силы, выносливости и навыков самообороны.",
    forWhom: "Для всех, кто интересуется боевыми искусствами",
    icon: "Activity",
  },
  {
    id: "massage",
    title: "Массаж",
    description: "Профессиональный массаж для расслабления, восстановления и улучшения самочувствия.",
    forWhom: "Для всех, кто хочет расслабиться и восстановиться",
    icon: "Heart",
  },
  {
    id: "cosmetology",
    title: "Косметологические услуги",
    description: "Прессотерапия, кавитация и другие процедуры для коррекции фигуры и улучшения состояния кожи.",
    forWhom: "Для тех, кто заботится о внешности",
    icon: "Flower2",
  },
  {
    id: "nutrition",
    title: "Консультация по питанию",
    description: "Индивидуальные консультации диетолога. Программы здорового питания для достижения ваших целей.",
    forWhom: "Для тех, кто хочет правильно питаться",
    icon: "HeartPulse",
  },
  {
    id: "body-analysis",
    title: "Анализ состава тела",
    description: "Биоимпедансометрия — точный анализ состава тела: процент жира, мышц, воды. Контроль прогресса.",
    forWhom: "Для отслеживания результатов тренировок",
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
    id: "women-gym",
    title: "Женский зал",
    description: "Отдельный зал для женщин с комфортной атмосферой и всем необходимым оборудованием.",
    forWhom: "Для женщин, которые предпочитают заниматься отдельно",
    icon: "Users",
  },
];

// Trainers data
export const trainers = [
  {
    id: 1,
    name: "Александр Петров",
    specialization: "Реабилитация, ЛФК",
    experience: "12 лет опыта",
    certifications: ["Сертифицированный реабилитолог", "Специалист по ЛФК"],
    photo: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400&h=500&fit=crop",
    tags: ["ЛФК", "Реабилитация"],
  },
  {
    id: 2,
    name: "Елена Соколова",
    specialization: "Лечебная гимнастика, Здоровая спина",
    experience: "8 лет опыта",
    certifications: ["Инструктор ЛФК", "Кинезиолог"],
    photo: "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop",
    tags: ["ЛФК", "Здоровая спина"],
  },
  {
    id: 3,
    name: "Дмитрий Волков",
    specialization: "Силовой тренинг, Персональные тренировки",
    experience: "10 лет опыта",
    certifications: ["Персональный тренер", "Специалист по силовой подготовке"],
    photo: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=500&fit=crop",
    tags: ["Силовой", "Персональный"],
  },
  {
    id: 4,
    name: "Мария Козлова",
    specialization: "Mobility, Растяжка, Йога",
    experience: "6 лет опыта",
    certifications: ["Инструктор по йоге", "Специалист по растяжке"],
    photo: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop",
    tags: ["Растяжка", "Mobility"],
  },
  {
    id: 5,
    name: "Андрей Новиков",
    specialization: "Реабилитация, Коррекция осанки",
    experience: "15 лет опыта",
    certifications: ["Мастер спорта", "Реабилитолог"],
    photo: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=500&fit=crop",
    tags: ["Реабилитация", "Осанка"],
  },
  {
    id: 6,
    name: "Ольга Смирнова",
    specialization: "Групповые занятия, ЛФК",
    experience: "7 лет опыта",
    certifications: ["Фитнес-инструктор", "Специалист ЛФК"],
    photo: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=500&fit=crop",
    tags: ["Групповые", "ЛФК"],
  },
  {
    id: 7,
    name: "Игорь Федоров",
    specialization: "Силовой тренинг, Здоровая спина",
    experience: "9 лет опыта",
    certifications: ["Персональный тренер", "Кинезиотерапевт"],
    photo: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=400&h=500&fit=crop",
    tags: ["Силовой", "Здоровая спина"],
  },
  {
    id: 8,
    name: "Наталья Белова",
    specialization: "Программа 55+, Лечебная гимнастика",
    experience: "11 лет опыта",
    certifications: ["Геронтолог", "Инструктор ЛФК"],
    photo: "https://images.unsplash.com/photo-1609899517237-7f97c24ea8e2?w=400&h=500&fit=crop",
    tags: ["55+", "ЛФК"],
  },
];

// Pricing data
export const pricing = [
  {
    category: "Разовые посещения и услуги",
    items: [
      { name: "Разовое посещение тренажерного зала", price: "500 ₽", duration: "1 раз" },
      { name: "Анализ состава тела (биоимпедансометрия)", price: "1 500 ₽", duration: "1 раз" },
      { name: "Консультация по питанию", price: "1 500 ₽", duration: "1 раз" },
      { name: "Прессотерапия", price: "1 000 ₽", duration: "1 сеанс" },
      { name: "Кавитация", price: "1 000 ₽", duration: "1 сеанс" },
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
