import { Phone, MessageCircle, Send, User, Heart, Award, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { SafeImage } from "@/components/SafeImage";

const iconMap: Record<string, React.ElementType> = {
  User,
  Heart,
  Award,
  Home,
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <SafeImage
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
          alt="Фитнес-центр Fitness City"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 text-center text-white">
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-up">
          <span className="block">{siteConfig.name}</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-normal mt-2 opacity-90">
            {siteConfig.tagline}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
          {siteConfig.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-8 py-6"
          >
            <a href={siteConfig.contact.phoneLink}>
              <Phone className="w-5 h-5 mr-2" />
              Позвонить
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-white/10"
          >
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6 bg-white/10"
          >
            <a href={siteConfig.contact.telegram} target="_blank" rel="noopener noreferrer">
              <Send className="w-5 h-5 mr-2" />
              Telegram
            </a>
          </Button>
        </div>

        {/* Benefits badges */}
        <div className="flex flex-wrap justify-center gap-3 animate-fade-up" style={{ animationDelay: "300ms" }}>
          {siteConfig.benefits.map((benefit, index) => {
            const IconComponent = iconMap[benefit.icon];
            return (
              <div
                key={index}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm"
              >
                {IconComponent && <IconComponent className="w-4 h-4 text-primary" />}
                <span>{benefit.text}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/70 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
