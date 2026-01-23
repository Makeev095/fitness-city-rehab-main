import { useMemo, useState } from "react";
import { FileText, Phone } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
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

  // Display order tweak: move Давид Газаров to 3rd position (without changing IDs/data structure)
  const orderedTrainers = useMemo(() => {
    const david = trainers.find((t) => t.id === 12);
    if (!david) return trainers;
    const rest = trainers.filter((t) => t.id !== 12);
    rest.splice(2, 0, david);
    return rest;
  }, []);

  const selectedTrainer = useMemo(
    () => orderedTrainers.find((t) => t.id === selectedTrainerId) ?? null,
    [selectedTrainerId, orderedTrainers],
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

  const filteredTrainers = orderedTrainers.filter(
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 px-3">
                    <div className="flex flex-wrap justify-center gap-2 w-full">
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
                        Квалификация
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
          {/* Override default DialogHeader behavior (sm:text-left) to keep centered on all breakpoints */}
          <DialogHeader className="text-center sm:text-center">
            <DialogTitle className="text-2xl sm:text-3xl font-semibold tracking-tight">
              {selectedTrainer?.name ?? "Тренер"}
            </DialogTitle>
          </DialogHeader>

          {selectedTrainer?.documents && selectedTrainer.documents.length > 0 ? (
            <div className="max-h-[60vh] overflow-y-auto pr-1">
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {selectedTrainer.documents.map((doc, idx) => {
                  const href = doc.url ?? doc.previewUrl;
                  const preview = doc.previewUrl ?? doc.url;

                  const Card = (
                    <div className="rounded-xl border bg-card/40 overflow-hidden hover:border-secondary/60 transition-colors">
                      {preview ? (
                        <div className="relative aspect-[3/4] overflow-hidden">
                          <SafeImage
                            src={preview}
                            alt=""
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                        </div>
                      ) : (
                        <div className="aspect-[3/4] grid place-items-center text-muted-foreground">
                          <FileText className="w-8 h-8" />
                        </div>
                      )}
                    </div>
                  );

                  return href ? (
                    <a
                      key={`${href}-${idx}`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                      aria-label={`Открыть документ ${idx + 1}`}
                    >
                      {Card}
                    </a>
                  ) : (
                    <div key={`doc-${idx}`}>{Card}</div>
                  );
                })}
              </div>
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
