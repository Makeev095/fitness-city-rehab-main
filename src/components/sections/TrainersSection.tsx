import { useMemo, useState } from "react";
import { FileText, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SafeImage } from "@/components/SafeImage";
import { trainers } from "@/config/siteConfig";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

type FilterType = "all" | "gym" | "group" | "lfk" | "rehab";

const filters: { label: string; value: FilterType }[] = [
  { label: "Все", value: "all" },
  { label: "Тренажерный зал", value: "gym" },
  { label: "Групповой зал", value: "group" },
  { label: "ЛФК", value: "lfk" },
  { label: "Восстановительный фитнес", value: "rehab" },
];

export function TrainersSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");
  const [docsOpen, setDocsOpen] = useState(false);
  const [selectedTrainerId, setSelectedTrainerId] = useState<number | null>(null);

  const selectedTrainer = useMemo(
    () => trainers.find((t) => t.id === selectedTrainerId) ?? null,
    [selectedTrainerId],
  );

  const matchesFilter = (trainer: (typeof trainers)[number], filter: FilterType) => {
    if (filter === "all") return true;

    const tags = trainer.tags ?? [];
    const specialization = (trainer.specialization ?? "").toLowerCase();

    switch (filter) {
      case "gym":
        return (
          tags.some((t) => t.includes("Силовой")) ||
          specialization.includes("силов") ||
          specialization.includes("тренаж")
        );
      case "group":
        return (
          tags.some((t) => t.includes("Групповые") || t.includes("Пилатес") || t.includes("Стретчинг")) ||
          specialization.includes("групп") ||
          specialization.includes("пилатес") ||
          specialization.includes("стретч")
        );
      case "lfk":
        return tags.some((t) => t.includes("ЛФК")) || specialization.includes("лфк") || specialization.includes("лечеб");
      case "rehab":
        return (
          tags.some((t) => t.includes("Восстановительный") || t.includes("Коррекция") || t.includes("Здоровая спина") || t.includes("Дыханием") || t.includes("45+")) ||
          specialization.includes("восстанов") ||
          specialization.includes("коррек") ||
          specialization.includes("здоров")
        );
      default:
        return true;
    }
  };

  const filteredTrainers = trainers.filter(
    (trainer) => matchesFilter(trainer, activeFilter)
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
                    className={cn(
                      "w-full h-full object-cover transition-transform duration-500",
                      trainer.photoClassName,
                      trainer.photoHoverClassName ?? "group-hover:scale-105"
                    )}
                  />
                  {/* Overlay with contact buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="bg-secondary hover:bg-secondary/90"
                      >
                        <a href={trainer.phoneLink ?? siteConfig.contact.phoneLink}>
                          <Phone className="w-4 h-4 mr-1" />
                          Позвонить
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                        onClick={() => {
                          setSelectedTrainerId(trainer.id);
                          setDocsOpen(true);
                        }}
                      >
                        <FileText className="w-4 h-4 mr-1" />
                        Документы
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

      <Dialog
        open={docsOpen}
        onOpenChange={(open) => {
          setDocsOpen(open);
          if (!open) setSelectedTrainerId(null);
        }}
      >
        <DialogContent
          className="bg-popover/95 backdrop-blur-xl border-border shadow-2xl"
          overlayClassName="bg-gradient-to-br from-fitness-blue/35 via-black/70 to-fitness-red/35 backdrop-blur-sm"
          badgeClassName="-top-72 sm:-top-[21rem]"
          badge={
            <SafeImage
              src="/logo.png"
              alt="Fitness City"
              className="h-40 sm:h-48 w-auto drop-shadow-[0_18px_45px_rgba(0,0,0,0.60)]"
            />
          }
        >
          <DialogHeader className="text-center">
            <DialogTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {selectedTrainer?.name ?? "Тренер"}
            </DialogTitle>
          </DialogHeader>

          {selectedTrainer?.documents && selectedTrainer.documents.length > 0 ? (
            <div className="space-y-3">
              {selectedTrainer.documents.map((doc, idx) => (
                <div key={`${doc.title}-${idx}`} className="rounded-lg border p-3">
                  <div className="font-medium">{doc.title}</div>
                  {doc.kind && (
                    <div className="text-sm text-muted-foreground">{doc.kind}</div>
                  )}
                  {doc.url && (
                    <a
                      className="mt-2 inline-flex text-sm text-secondary underline underline-offset-4"
                      href={doc.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Открыть
                    </a>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">
              Документы пока не добавлены.
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
