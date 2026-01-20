import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, Shield } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/siteConfig";

const PrivacyPolicy = () => {
  useEffect(() => {
    document.title = `Политика конфиденциальности — ${siteConfig.name}`;
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="pt-24">
        <section className="section-container bg-transparent">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Вернуться на главную
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Политика конфиденциальности
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  В соответствии с Федеральным законом № 152-ФЗ «О персональных данных»
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card rounded-xl p-8 border space-y-8">
                {/* Общие положения */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">1. Общие положения</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Настоящая Политика конфиденциальности (далее — «Политика») определяет порядок обработки 
                      и защиты персональных данных в фитнес-центре «{siteConfig.name}» (далее — «Оператор»).
                    </p>
                    <p>
                      Политика разработана в соответствии с Федеральным законом от 27.07.2006 № 152-ФЗ 
                      «О персональных данных» и иными нормативными правовыми актами Российской Федерации.
                    </p>
                    <p>
                      Оператор обязуется соблюдать конфиденциальность персональных данных и обеспечивать 
                      их безопасность при обработке.
                    </p>
                  </div>
                </div>

                {/* Оператор */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">2. Оператор персональных данных</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p><strong className="text-foreground">Наименование:</strong> {siteConfig.name}</p>
                    <p><strong className="text-foreground">Адрес:</strong> {siteConfig.contact.address}</p>
                    <p><strong className="text-foreground">Телефон:</strong> {siteConfig.contact.phone}</p>
                    <p><strong className="text-foreground">Email:</strong> {siteConfig.contact.email}</p>
                  </div>
                </div>

                {/* Обрабатываемые данные */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">3. Обрабатываемые персональные данные</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Оператор обрабатывает следующие категории персональных данных:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        <strong className="text-foreground">Публичная информация о сотрудниках:</strong> 
                        ФИО тренеров, специализация, опыт работы, сертификаты и квалификация. 
                        Данная информация размещается на сайте с согласия сотрудников в целях 
                        информирования посетителей о составе персонала фитнес-центра.
                      </li>
                      <li>
                        <strong className="text-foreground">Контактные данные организации:</strong> 
                        адрес фитнес-центра, телефон, email, ссылки на социальные сети. 
                        Данная информация является публичной и размещается в целях информирования 
                        о деятельности организации.
                      </li>
                      <li>
                        <strong className="text-foreground">Информация о ценах и услугах:</strong> 
                        стоимость абонементов, разовых посещений и дополнительных услуг. 
                        Данная информация является публичной и не содержит персональных данных.
                      </li>
                    </ul>
                    <p className="mt-4">
                      <strong className="text-foreground">Важно:</strong> На сайте не осуществляется 
                      автоматизированный сбор персональных данных посетителей. Сайт не содержит форм 
                      для ввода персональных данных пользователей.
                    </p>
                  </div>
                </div>

                {/* Цели обработки */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">4. Цели обработки персональных данных</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>Обработка персональных данных осуществляется в следующих целях:</p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Информирование посетителей сайта о деятельности фитнес-центра</li>
                      <li>Предоставление информации о составе персонала и квалификации тренеров</li>
                      <li>Обеспечение возможности связи с организацией</li>
                      <li>Информирование о ценах и услугах</li>
                    </ul>
                  </div>
                </div>

                {/* Правовые основания */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">5. Правовые основания обработки</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      Обработка персональных данных осуществляется на основании:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>
                        Согласия субъекта персональных данных (для данных сотрудников, размещенных на сайте)
                      </li>
                      <li>
                        Публичности информации (для контактных данных организации)
                      </li>
                      <li>
                        Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных»
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Сроки обработки */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">6. Сроки обработки персональных данных</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      Персональные данные обрабатываются в течение срока, необходимого для достижения 
                      целей обработки, или до отзыва согласия субъектом персональных данных.
                    </p>
                    <p>
                      После достижения целей обработки или отзыва согласия персональные данные подлежат 
                      уничтожению, если иное не предусмотрено законодательством Российской Федерации.
                    </p>
                  </div>
                </div>

                {/* Меры защиты */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">7. Меры по защите персональных данных</h2>
                  <div className="space-y-2 text-muted-foreground">
                    <p>
                      Оператор принимает необходимые правовые, организационные и технические меры для 
                      защиты персональных данных от неправомерного доступа, уничтожения, изменения, 
                      блокирования, копирования, предоставления, распространения, а также от иных 
                      неправомерных действий.
                    </p>
                  </div>
                </div>

                {/* Права субъектов */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">8. Права субъектов персональных данных</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      В соответствии с Федеральным законом № 152-ФЗ «О персональных данных», 
                      субъект персональных данных имеет право:
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>Получать информацию, касающуюся обработки его персональных данных</li>
                      <li>Требовать уточнения, блокирования или уничтожения персональных данных</li>
                      <li>Отозвать согласие на обработку персональных данных</li>
                      <li>Обжаловать действия или бездействие Оператора в уполномоченный орган 
                      по защите прав субъектов персональных данных или в судебном порядке</li>
                    </ul>
                    <p className="mt-4">
                      Для реализации указанных прав необходимо направить письменный запрос Оператору 
                      по адресу: {siteConfig.contact.address} или на email: {siteConfig.contact.email}
                    </p>
                  </div>
                </div>

                {/* Финальные положения */}
                <div>
                  <h2 className="text-2xl font-bold mb-4">9. Заключительные положения</h2>
                  <div className="space-y-3 text-muted-foreground">
                    <p>
                      Оператор вправе вносить изменения в настоящую Политику конфиденциальности. 
                      Новая редакция Политики вступает в силу с момента её размещения на сайте, 
                      если иное не предусмотрено новой редакцией Политики.
                    </p>
                    <p>
                      Действующая редакция Политики конфиденциальности размещена на странице: 
                      <Link to="/privacy-policy" className="text-primary hover:underline ml-1">
                        /privacy-policy
                      </Link>
                    </p>
                    <p className="mt-4">
                      <strong className="text-foreground">Дата последнего обновления:</strong> {new Date().toLocaleDateString('ru-RU', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                </div>

                {/* Контакты */}
                <div className="bg-muted/50 rounded-lg p-6 mt-8">
                  <h3 className="font-semibold text-lg mb-3">Контакты для обращений</h3>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p><strong className="text-foreground">Телефон:</strong> {siteConfig.contact.phone}</p>
                    <p><strong className="text-foreground">Email:</strong> {siteConfig.contact.email}</p>
                    <p><strong className="text-foreground">Адрес:</strong> {siteConfig.contact.address}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

