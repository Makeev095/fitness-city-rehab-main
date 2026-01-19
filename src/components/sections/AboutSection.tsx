import { Shield, GraduationCap, Target, Users } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { aboutContent } from "@/config/siteConfig";
import { cn } from "@/lib/utils";
import { SafeImage } from "@/components/SafeImage";

const iconMap: Record<string, React.ElementType> = {
  Shield,
  GraduationCap,
  Target,
  Users,
};

export function AboutSection() {
  return (
    <section id="about" className="section-container bg-transparent">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              {aboutContent.title}
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {aboutContent.subtitle}
            </p>
          </div>
        </AnimatedSection>

        {/* Paragraphs */}
        <AnimatedSection delay={100}>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="space-y-4">
              {aboutContent.paragraphs.slice(0, 2).map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="space-y-4">
              {aboutContent.paragraphs.slice(2).map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
              {/* Image placeholder */}
              <div className="relative aspect-video rounded-xl overflow-hidden mt-4">
                <SafeImage
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=450&fit=crop"
                  alt="Тренировка в Fitness City"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Trust points */}
        <AnimatedSection delay={200}>
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-bold">Почему нам доверяют</h3>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {aboutContent.trustPoints.map((point, index) => {
            const IconComponent = iconMap[point.icon];
            return (
              <AnimatedSection key={index} delay={300 + index * 100}>
                <div
                  className={cn(
                    "bg-card rounded-xl p-6 text-center card-hover border",
                    "hover:border-primary/50"
                  )}
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    {IconComponent && (
                      <IconComponent className="w-7 h-7 text-primary" />
                    )}
                  </div>
                  <h4 className="font-semibold text-lg mb-2">{point.title}</h4>
                  <p className="text-sm text-muted-foreground">
                    {point.description}
                  </p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
