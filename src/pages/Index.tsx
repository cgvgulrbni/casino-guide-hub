import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import PlayCTA from "@/components/PlayCTA";
import { GAMES } from "@/data/games";
import { useSEO } from "@/hooks/useSEO";
import { PLAY_URL } from "@/config/site";

const Index = () => {
  useSEO({
    title: "CasinoCompendium — Обзоры казино-игр: правила, история и стратегии",
    description:
      "Подробные обзоры главных казино-игр: слоты, рулетка, блэкджек, покер, баккара и крэпс. Правила, стратегии, RTP и советы для игроков.",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "CasinoCompendium",
      description:
        "Энциклопедия казино-игр с обзорами правил, историей и стратегиями игры.",
      inLanguage: "ru",
    },
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
          <div className="container relative z-10 py-24 md:py-36 text-center">
            <p className="text-gold text-xs md:text-sm uppercase tracking-[0.4em] mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: "0ms" }}>
              · Энциклопедия игр казино ·
            </p>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-8 animate-fade-in-up opacity-0" style={{ animationDelay: "120ms" }}>
              Где математика<br />
              встречает <span className="text-gold">удачу</span>
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/75 leading-relaxed mb-10 animate-fade-in-up opacity-0" style={{ animationDelay: "240ms" }}>
              Шесть классических казино-игр. История, правила, стратегии и секреты —
              всё, что нужно знать, прежде чем сесть за стол.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up opacity-0" style={{ animationDelay: "360ms" }}>
              <a
                href={PLAY_URL}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--gradient-gold)] text-primary-foreground font-semibold uppercase tracking-wider rounded shadow-gold hover:scale-105 transition-elegant"
              >
                Играть в казино →
              </a>
              <a
                href="#games"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-gold/40 text-foreground font-semibold uppercase tracking-wider rounded hover:bg-gold/10 hover:border-gold transition-elegant"
              >
                Смотреть игры
              </a>
            </div>
          </div>
        </section>

        {/* GAMES GRID */}
        <section id="games" className="container py-16 md:py-24">
          <div className="ornamental-divider mb-6">
            <span className="text-2xl">♠ ♥ ♦ ♣</span>
          </div>
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">Шесть столпов казино</h2>
            <p className="max-w-xl mx-auto text-foreground/70">
              От простоты слотов до глубины покера — выберите игру и погрузитесь в её мир.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {GAMES.map((game, i) => (
              <GameCard key={game.slug} game={game} index={i} />
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="container">
          <PlayCTA />
        </div>

        {/* ABOUT */}
        <section id="about" className="container py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">О проекте</p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Знание <span className="text-gold">— ваше преимущество</span>
            </h2>
            <p className="text-lg text-foreground/75 leading-relaxed mb-4">
              CasinoCompendium создан для тех, кто хочет понимать, во что играет.
              Мы собрали историю, правила и проверенные стратегии каждой игры —
              чтобы каждый ваш визит в казино был осознанным.
            </p>
            <p className="text-foreground/60">
              Помните: казино всегда имеет математическое преимущество.
              Играйте на сумму, которую готовы потерять.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
