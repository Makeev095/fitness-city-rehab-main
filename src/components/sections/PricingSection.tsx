import { Check, Star, Download, MessageCircle } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { pricing } from "@/config/siteConfig";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section id="pricing" className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Цены
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Прозрачное ценообразование без скрытых платежей
            </p>
          </div>
        </AnimatedSection>

        {/* Pricing categories */}
        <div className="space-y-10">
          {pricing.map((category, catIndex) => (
            <AnimatedSection key={category.category} delay={100 + catIndex * 100}>
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className={cn(
                        "bg-card rounded-xl p-5 border card-hover relative overflow-hidden",
                        item.popular && "border-secondary ring-2 ring-secondary/20"
                      )}
                    >
                      {/* Popular badge */}
                      {item.popular && (
                        <div className="absolute top-0 right-0 bg-secondary text-secondary-foreground text-xs font-medium px-3 py-1 rounded-bl-lg flex items-center gap-1">
                          <Star className="w-3 h-3" />
                          Популярный
                        </div>
                      )}

                      {/* Name */}
                      <h4 className="font-medium mb-2 pr-16">{item.name}</h4>

                      {/* Price */}
                      <p className="text-2xl font-bold text-primary mb-1">
                        {item.price}
                      </p>

                      {/* Duration */}
                      <p className="text-sm text-muted-foreground mb-2">
                        {item.duration}
                      </p>

                      {/* Description */}
                      {item.description && (
                        <p className="text-xs text-muted-foreground mb-2">
                          {item.description}
                        </p>
                      )}

                      {/* Savings */}
                      {item.savings && (
                        <div className="flex items-center gap-1.5 text-secondary text-sm mb-3">
                          <Check className="w-4 h-4" />
                          {item.savings}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Note & CTA */}
        <AnimatedSection delay={400}>
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-6">
              * Актуальные цены уточняйте по телефону или в мессенджерах
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90">
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Получить прайс в WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href={siteConfig.pricingPdf} download>
                  <Download className="w-5 h-5 mr-2" />
                  Скачать PDF
                </a>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
