import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/config/siteConfig";

const Documents = () => {
  useEffect(() => {
    document.title = `Документы — ${siteConfig.name}`;
  }, []);

  return (
    <div className="min-h-screen text-foreground">
      <Header />
      <main className="pt-24">
        <section className="section-container bg-transparent">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Вернуться на главную
              </Link>
            </AnimatedSection>

            <AnimatedSection delay={100}>
              <div className="text-center mb-12">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Документы
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Вся необходимая документация
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="bg-card rounded-xl p-8 border">
                <p className="text-center text-muted-foreground">
                  Документы будут добавлены позже
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Documents;

