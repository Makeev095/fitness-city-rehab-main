import { MapPin, Navigation } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";

export function LocationSection() {
  return (
    <section id="location" className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Как добраться
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Мы находимся в удобном месте с хорошей транспортной доступностью
            </p>
          </div>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Яндекс.Карта */}
          <AnimatedSection delay={100}>
            <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden border shadow-lg">
              <iframe
                src="https://yandex.ru/map-widget/v1/?ll=43.044686%2C44.031876&z=15&pt=43.044686%2C44.031876&l=map"
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ border: 0 }}
                title="Карта расположения Fitness City"
                className="w-full h-full"
              />
            </div>
          </AnimatedSection>

          {/* Info & buttons */}
          <AnimatedSection delay={200}>
            <div className="space-y-6">
              {/* Address */}
              <div className="bg-card rounded-xl p-6 border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">
                      {siteConfig.contact.address}
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Удобная парковка, доступная транспортная развязка
                    </p>
                  </div>
                </div>
              </div>

              {/* Map buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="flex-1 bg-primary hover:bg-primary/90"
                >
                  <a
                    href={siteConfig.maps.yandex}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Открыть в Яндекс.Картах
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="flex-1"
                >
                  <a
                    href={siteConfig.maps.google}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Navigation className="w-5 h-5 mr-2" />
                    Открыть в Google Maps
                  </a>
                </Button>
              </div>

              {/* Parking info */}
              <div className="text-sm text-muted-foreground bg-muted/50 rounded-lg p-4">
                <p className="font-medium text-foreground mb-2">Как добраться:</p>
                <ul className="space-y-1">
                  <li>• Общественный транспорт: автобусы и маршрутки до остановки «Коллективная»</li>
                  <li>• На машине: удобная парковка рядом со зданием</li>
                  <li>• Пешком: в центре города, легко найти</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
