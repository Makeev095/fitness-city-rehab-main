import { 
  Activity, 
  HeartPulse, 
  UserCheck, 
  Flower2, 
  Users, 
  Heart, 
  AlignVerticalSpaceAround,
  Phone,
  MessageCircle
} from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { services } from "@/config/siteConfig";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

// Custom Spine icon since lucide doesn't have one
const SpineIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 2v4M12 18v4M12 10v4" />
    <rect x="8" y="4" width="8" height="4" rx="1" />
    <rect x="8" y="12" width="8" height="4" rx="1" />
  </svg>
);

const iconMap: Record<string, React.ElementType> = {
  Activity,
  HeartPulse,
  Spine: SpineIcon,
  UserCheck,
  Flower2,
  Users,
  Heart,
  AlignVerticalSpaceAround,
};

export function ServicesSection() {
  return (
    <section id="services" className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Наши услуги
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Программы для восстановления, укрепления здоровья и поддержания формы
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon];
            return (
              <AnimatedSection key={service.id} delay={100 + index * 50}>
                <div
                  className={cn(
                    "bg-card rounded-xl p-6 h-full flex flex-col border card-hover",
                    "hover:border-secondary/50"
                  )}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    {IconComponent && (
                      <IconComponent className="w-6 h-6 text-secondary" />
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground mb-3 flex-grow">
                    {service.description}
                  </p>

                  {/* For whom */}
                  <p className="text-xs text-muted-foreground/80 italic mb-4 pb-4 border-b">
                    {service.forWhom}
                  </p>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs"
                    >
                      <a href={siteConfig.contact.phoneLink}>
                        <Phone className="w-3 h-3 mr-1" />
                        Позвонить
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="flex-1 text-xs"
                    >
                      <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-3 h-3 mr-1" />
                        WhatsApp
                      </a>
                    </Button>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
