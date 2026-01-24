#!/bin/bash

# Скрипт для автоматического деплоя Fitness City
# Использование: ./deploy.sh

echo "🚀 Начинаем деплой Fitness City..."

# Проверка наличия node_modules
if [ ! -d "node_modules" ]; then
    echo "📦 Устанавливаем зависимости..."
    npm install
fi

# Очистка предыдущей сборки
echo "🧹 Очищаем предыдущую сборку..."
rm -rf dist

# Сборка production версии
echo "🔨 Собираем production версию..."
npm run build

# Проверка успешности сборки
if [ ! -d "dist" ]; then
    echo "❌ Ошибка: сборка не удалась!"
    exit 1
fi

# Копирование .htaccess в dist
if [ -f ".htaccess" ]; then
    echo "📋 Копируем .htaccess..."
    cp .htaccess dist/
fi

echo "✅ Сборка завершена!"
echo ""
echo "📁 Готовые файлы находятся в папке: dist/"
echo ""
echo "📤 Следующие шаги:"
echo "   1. Загрузите содержимое папки dist/ на ваш хостинг"
echo "   2. Убедитесь, что .htaccess загружен"
echo "   3. Проверьте работу сайта"
echo ""
echo "💡 Для проверки локально выполните: npm run preview"



