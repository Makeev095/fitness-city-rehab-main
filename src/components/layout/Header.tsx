import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/siteConfig";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "glass py-2 shadow-lg"
            : "bg-transparent py-4"
        )}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center group"
          >
            <img 
              src="/logo.png" 
              alt={siteConfig.name}
              className="h-28 md:h-32 w-auto object-contain group-hover:scale-105 transition-transform"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "font-medium transition-colors hover:text-primary",
                  isScrolled ? "text-foreground" : "text-white/90 hover:text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <Button
              asChild
              size="sm"
              className="hidden md:flex bg-primary hover:bg-primary/90"
            >
              <a href={siteConfig.contact.phoneLink}>
                <Phone className="w-4 h-4 mr-2" />
                {siteConfig.contact.phone}
              </a>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Открыть меню"
            >
              <Menu className={cn("h-6 w-6", isScrolled ? "text-foreground" : "text-white")} />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-background/80 backdrop-blur-sm lg:hidden transition-opacity duration-300",
          isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      {/* Mobile Menu Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-80 max-w-[85vw] z-50 bg-card shadow-xl lg:hidden transition-transform duration-300 ease-out",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <span className="font-bold text-lg">{siteConfig.name}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Закрыть меню"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="block py-3 px-4 rounded-lg font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact buttons */}
          <div className="p-4 border-t space-y-3">
            <Button asChild className="w-full bg-primary hover:bg-primary/90">
              <a href={siteConfig.contact.phoneLink}>
                <Phone className="w-4 h-4 mr-2" />
                Позвонить
              </a>
            </Button>
            <div className="flex gap-2">
              <Button asChild variant="outline" className="flex-1">
                <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={siteConfig.contact.telegram} target="_blank" rel="noopener noreferrer">
                  Telegram
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
