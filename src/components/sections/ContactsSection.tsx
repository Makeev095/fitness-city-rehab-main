import { Phone, MessageCircle, Send, Mail, MapPin } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function ContactsSection() {
  return (
    <section id="contacts" className="section-container bg-transparent">
      <div className="max-w-4xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Контакты
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Свяжитесь с нами удобным для вас способом
            </p>
          </div>
        </AnimatedSection>

        {/* Main CTA buttons */}
        <AnimatedSection delay={100}>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <Button
              asChild
              size="lg"
              className="h-auto py-6 flex-col gap-2 bg-primary hover:bg-primary/90"
            >
              <a href={siteConfig.contact.phoneLink}>
                <Phone className="w-8 h-8" />
                <span className="font-semibold">Позвонить</span>
                <span className="text-sm opacity-90">{siteConfig.contact.phone}</span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="h-auto py-6 flex-col gap-2 bg-secondary hover:bg-secondary/90"
            >
              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-8 h-8" />
                <span className="font-semibold">WhatsApp</span>
                <span className="text-sm opacity-90">Написать сообщение</span>
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              className="h-auto py-6 flex-col gap-2 bg-primary hover:bg-primary/90"
            >
              <a
                href={siteConfig.contact.telegram}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send className="w-8 h-8" />
                <span className="font-semibold">Telegram</span>
                <span className="text-sm opacity-90">Написать сообщение</span>
              </a>
            </Button>
          </div>
        </AnimatedSection>

        {/* Additional contacts */}
        <AnimatedSection delay={200}>
          <div className="grid sm:grid-cols-2 gap-4">
            <a
              href={siteConfig.contact.emailLink}
              className="bg-card rounded-xl p-5 border card-hover flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-secondary-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-medium">{siteConfig.contact.email}</p>
              </div>
            </a>

            <a
              href={siteConfig.maps.yandex}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-card rounded-xl p-5 border card-hover flex items-center gap-4 group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="font-medium">{siteConfig.contact.address}</p>
              </div>
            </a>
          </div>
        </AnimatedSection>

        {/* Closing message */}
        <AnimatedSection delay={300}>
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-primary text-white rounded-2xl p-8 max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold mb-2">
                Начните путь к здоровью сегодня
              </h3>
              <p className="text-white/90 mb-4">
                Мы подберём программу специально для вас.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-fitness-dark hover:bg-white/90 hover:text-fitness-dark"
              >
                <a href={siteConfig.contact.phoneLink}>
                  <Phone className="w-5 h-5 mr-2" />
                  Записаться на консультацию
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
