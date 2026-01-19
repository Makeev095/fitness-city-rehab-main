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
  
  // Contact information (REPLACE WITH YOUR DATA)
  contact: {
    phone: "+7 (999) 123-45-67",
    phoneLink: "tel:+79991234567",
    whatsapp: "https://wa.me/79991234567",
    telegram: "https://t.me/fitnesscity",
    email: "info@fitnesscity.ru",
    emailLink: "mailto:info@fitnesscity.ru",
    address: "г. Москва, ул. Спортивная, д. 15",
  },
  
  // Map links
  maps: {
    yandex: "https://yandex.ru/maps/-/CCUMqKXXXX",
    google: "https://goo.gl/maps/XXXXX",
    // Placeholder image for map
    placeholder: "https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?w=1200&h=600&fit=crop",
  },
  
  // Social media
  social: {
    instagram: "https://instagram.com/fitnesscity",
    vk: "https://vk.com/fitnesscity",
    youtube: "https://youtube.com/@fitnesscity",
  },
  
  // Working hours
  schedule: {
    weekdays: "07:00 – 23:00",
    saturday: "08:00 – 22:00",
    sunday: "09:00 – 21:00",
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
};

// Services data
export const services = [
  {
    id: "rehabilitation",
    title: "Восстановительные тренировки",
    description: "Программы для тех, кто восстанавливается после травм или операций. Бережный подход к восстановлению двигательных функций и укреплению ослабленных мышц.",
    forWhom: "Для тех, кто прошёл лечение и готов к постепенному возвращению к активности",
    icon: "Activity",
  },
  {
    id: "lfk",
    title: "ЛФК / Лечебная гимнастика",
    description: "Специальные упражнения для поддержания и укрепления здоровья. Занятия проводятся под контролем специалистов с учётом рекомендаций врачей.",
    forWhom: "Для тех, кому рекомендованы занятия лечебной физкультурой",
    icon: "HeartPulse",
  },
  {
    id: "spine",
    title: "Здоровая спина",
    description: "Комплекс упражнений для укрепления мышечного корсета, улучшения осанки и снятия напряжения. Профилактика болей в спине и шее.",
    forWhom: "Для офисных работников и всех, кто много сидит",
    icon: "Spine",
  },
  {
    id: "personal",
    title: "Персональные тренировки",
    description: "Индивидуальные занятия с тренером по программе, разработанной специально для вас. Максимум внимания и контроля техники.",
    forWhom: "Для тех, кто ценит персональный подход и эффективность",
    icon: "UserCheck",
  },
  {
    id: "mobility",
    title: "Мягкая растяжка / Mobility",
    description: "Бережные занятия для улучшения подвижности суставов, гибкости и расслабления. Подходит для любого уровня подготовки.",
    forWhom: "Для тех, кто хочет улучшить гибкость и подвижность",
    icon: "Flower2",
  },
  {
    id: "group",
    title: "Групповые занятия",
    description: "Занятия в малых группах до 8 человек. Комфортная атмосфера, индивидуальный контроль и поддержка единомышленников.",
    forWhom: "Для тех, кто любит заниматься в компании",
    icon: "Users",
  },
  {
    id: "senior",
    title: "Программа 55+",
    description: "Специальные занятия для старшего возраста с акцентом на безопасность, укрепление суставов и поддержание активности.",
    forWhom: "Для людей старше 55 лет",
    icon: "Heart",
  },
  {
    id: "posture",
    title: "Коррекция осанки",
    description: "Программа для формирования правильной осанки, укрепления мышц спины и груди. Работа над балансом и координацией.",
    forWhom: "Для тех, кто хочет улучшить осанку",
    icon: "AlignVerticalSpaceAround",
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
    category: "Разовые занятия",
    items: [
      { name: "Персональная тренировка", price: "3 500 ₽", duration: "60 мин" },
      { name: "ЛФК индивидуально", price: "3 000 ₽", duration: "45 мин" },
      { name: "Групповое занятие", price: "800 ₽", duration: "60 мин" },
      { name: "Растяжка / Mobility", price: "1 200 ₽", duration: "60 мин" },
    ],
  },
  {
    category: "Абонементы",
    items: [
      { name: "4 персональные тренировки", price: "12 000 ₽", duration: "1 месяц", savings: "Экономия 2 000 ₽" },
      { name: "8 персональных тренировок", price: "22 000 ₽", duration: "1 месяц", savings: "Экономия 6 000 ₽" },
      { name: "12 групповых занятий", price: "7 200 ₽", duration: "1 месяц", savings: "Экономия 2 400 ₽" },
      { name: "Безлимит групповые", price: "9 000 ₽", duration: "1 месяц", popular: true },
    ],
  },
  {
    category: "Специальные программы",
    items: [
      { name: "Восстановление (10 занятий)", price: "28 000 ₽", duration: "индивидуально" },
      { name: "Здоровая спина (8 занятий)", price: "18 000 ₽", duration: "1 месяц" },
      { name: "Первичная консультация", price: "Бесплатно", duration: "30 мин" },
    ],
  },
];
