import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArrowLeft, FileText } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { SafeImage } from "@/components/SafeImage";
import { siteConfig, siteDocuments } from "@/config/siteConfig";

function extractFirstNumber(input: string): number {
  // Works for filenames like "01.png", "page-2.jpg", "file_003.jpeg"
  const match = input.match(/\d+/);
  return match ? Number(match[0]) : Number.POSITIVE_INFINITY;
}

function sortPagesByFilenameNumber(pages: string[]): string[] {
  return [...pages].sort((a, b) => extractFirstNumber(a) - extractFirstNumber(b));
}

const Documents = () => {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedDoc = useMemo(
    () => siteDocuments.find((d) => d.id === selectedId) ?? null,
    [selectedId]
  );

  const selectedPages = useMemo(
    () => (selectedDoc?.pages ? sortPagesByFilenameNumber(selectedDoc.pages) : []),
    [selectedDoc]
  );

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
              {siteDocuments.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {siteDocuments.map((doc) => {
                    const sortedPages = doc.pages ? sortPagesByFilenameNumber(doc.pages) : [];
                    const cover = sortedPages[0];

                    return (
                      <button
                        key={doc.id}
                        type="button"
                        onClick={() => {
                          setSelectedId(doc.id);
                          setOpen(true);
                        }}
                        className="block focus:outline-none focus:ring-2 focus:ring-ring rounded-xl"
                        aria-label="Открыть документ"
                      >
                        <div className="rounded-xl border bg-card/40 overflow-hidden hover:border-secondary/60 transition-colors">
                          {cover ? (
                            <div className="relative aspect-[3/4] overflow-hidden">
                              <SafeImage
                                src={cover}
                                alt=""
                                className="w-full h-full object-cover"
                                loading="lazy"
                              />
                            </div>
                          ) : (
                            <div className="aspect-[3/4] grid place-items-center text-muted-foreground">
                              <FileText className="w-10 h-10" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-card rounded-xl p-8 border">
                  <p className="text-center text-muted-foreground">
                    Документы будут добавлены позже
                  </p>
                </div>
              )}
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />

      <Dialog
        open={open}
        onOpenChange={(next) => {
          setOpen(next);
          if (!next) setSelectedId(null);
        }}
      >
        <DialogContent className="bg-popover/95 backdrop-blur-xl border-border shadow-2xl">
          {selectedPages.length > 0 ? (
            <div className="max-h-[70vh] overflow-y-auto pr-1">
              <div className="space-y-4">
                {selectedPages.map((src, idx) => (
                  <div
                    key={`${selectedDoc.id}-${idx}-${src}`}
                    className="rounded-xl border bg-card/30 overflow-hidden"
                  >
                    <SafeImage
                      src={src}
                      alt=""
                      className="w-full h-auto"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-sm text-muted-foreground">
              Страницы документа пока не добавлены.
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Documents;


