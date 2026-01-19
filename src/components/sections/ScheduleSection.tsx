import { Clock } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/siteConfig";

const scheduleData = [
  { day: "Понедельник", hours: siteConfig.schedule.weekdays },
  { day: "Вторник", hours: siteConfig.schedule.weekdays },
  { day: "Среда", hours: siteConfig.schedule.weekdays },
  { day: "Четверг", hours: siteConfig.schedule.weekdays },
  { day: "Пятница", hours: siteConfig.schedule.weekdays },
  { day: "Суббота", hours: siteConfig.schedule.saturday },
  { day: "Воскресенье", hours: siteConfig.schedule.sunday },
];

export function ScheduleSection() {
  const today = new Date().getDay();
  // Convert to Monday = 0, Sunday = 6 format
  const todayIndex = today === 0 ? 6 : today - 1;

  return (
    <section id="schedule" className="section-container bg-transparent">
      <div className="max-w-3xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              График работы
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Мы работаем каждый день для вашего удобства
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={100}>
          <div className="bg-card rounded-xl border overflow-hidden">
            {/* Header */}
            <div className="bg-secondary/10 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                <Clock className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <h3 className="font-semibold">Часы работы</h3>
                <p className="text-sm text-muted-foreground">
                  Ждём вас каждый день
                </p>
              </div>
            </div>

            {/* Schedule table */}
            <div className="divide-y">
              {scheduleData.map((item, index) => (
                <div
                  key={item.day}
                  className={`flex justify-between items-center p-4 transition-colors ${
                    index === todayIndex
                      ? "bg-primary/5 border-l-4 border-l-primary"
                      : "hover:bg-muted/50"
                  }`}
                >
                  <span
                    className={`font-medium ${
                      index === todayIndex ? "text-primary" : ""
                    }`}
                  >
                    {item.day}
                    {index === todayIndex && (
                      <span className="ml-2 text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full">
                        сегодня
                      </span>
                    )}
                  </span>
                  <span className="text-muted-foreground font-mono">
                    {item.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <p className="text-center text-sm text-muted-foreground mt-6">
            В праздничные дни график может меняться — уточняйте по телефону
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
