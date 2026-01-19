import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/SafeImage";
import { trainers } from "@/config/siteConfig";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

type FilterType = "all" | "ЛФК" | "Реабилитация" | "Силовой" | "Растяжка";

const filters: { label: string; value: FilterType }[] = [
  { label: "Все", value: "all" },
  { label: "ЛФК", value: "ЛФК" },
  { label: "Реабилитация", value: "Реабилитация" },
  { label: "Силовой", value: "Силовой" },
  { label: "Растяжка", value: "Растяжка" },
];

export function TrainersSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredTrainers = trainers.filter(
    (trainer) =>
      activeFilter === "all" ||
      trainer.tags.some((tag) => tag.includes(activeFilter))
  );

  return (
    <section id="trainers" className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Наши тренеры
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытные специалисты, которые помогут достичь ваших целей
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <Button
                key={filter.value}
                variant={activeFilter === filter.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter.value)}
                className={cn(
                  "rounded-full",
                  activeFilter === filter.value && "bg-secondary hover:bg-secondary/90"
                )}
              >
                {filter.label}
              </Button>
            ))}
          </div>
        </AnimatedSection>

        {/* Trainers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTrainers.map((trainer, index) => (
            <AnimatedSection key={trainer.id} delay={150 + index * 50}>
              <div className="bg-card rounded-xl overflow-hidden border card-hover group">
                {/* Photo */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <SafeImage
                    src={trainer.photo}
                    alt={trainer.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay with contact buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90"
                      >
                        <a
                          href={siteConfig.contact.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <MessageCircle className="w-4 h-4 mr-1" />
                          WhatsApp
                        </a>
                      </Button>
                      <Button
                        asChild
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        <a
                          href={siteConfig.contact.telegram}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Send className="w-4 h-4 mr-1" />
                          Telegram
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{trainer.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {trainer.specialization}
                  </p>
                  <p className="text-xs text-secondary font-medium mb-3">
                    {trainer.experience}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {trainer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-muted px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Certifications */}
                  {trainer.certifications.length > 0 && (
                    <div className="mt-3 pt-3 border-t">
                      <p className="text-xs text-muted-foreground">
                        {trainer.certifications.join(" • ")}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
