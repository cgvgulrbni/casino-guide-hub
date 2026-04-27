import { Link, useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PlayCTA from "@/components/PlayCTA";
import { GAMES, getGameBySlug } from "@/data/games";
import { useSEO } from "@/hooks/useSEO";
import NotFound from "./NotFound";

const GamePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = getGameBySlug(slug ?? "");

  // Hooks must run unconditionally — call useSEO with safe defaults if no game
  useSEO({
    title: game
      ? `${game.name} — правила, стратегии и история | CasinoCompendium`
      : "Игра не найдена",
    description: game
      ? `${game.name} в казино: ${game.shortDescription} Полный обзор: правила, стратегии, RTP ${game.rtp}, советы и FAQ.`
      : "",
    canonical: typeof window !== "undefined" ? window.location.href : undefined,
    jsonLd: game
      ? [
          {
            "@context": "https://schema.org",
            "@type": "Article",
            headline: `${game.name} — полный обзор игры в казино`,
            description: game.shortDescription,
            inLanguage: "ru",
            articleSection: "Казино",
            keywords: [game.name, "казино", "правила", "стратегия", game.tagline],
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: game.faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]
      : undefined,
  });

  if (!game) return <NotFound />;

  const otherGames = GAMES.filter((g) => g.slug !== game.slug).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-gold/10">
          <div className="absolute inset-0 bg-radial-gold opacity-50 pointer-events-none" />
          <div className="container relative z-10 py-16 md:py-24">
            <nav className="text-xs uppercase tracking-widest text-muted-foreground mb-8" aria-label="Хлебные крошки">
              <Link to="/" className="hover:text-gold transition-elegant">Главная</Link>
              <span className="mx-2 text-gold">/</span>
              <span className="text-gold">{game.name}</span>
            </nav>

            <div className="grid md:grid-cols-[1fr_auto] gap-8 items-end">
              <div>
                <p className="text-gold text-xs uppercase tracking-[0.3em] mb-4">{game.tagline}</p>
                <h1 className="font-display text-5xl md:text-7xl mb-6">
                  {game.name}
                </h1>
                <p className="text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
                  {game.shortDescription}
                </p>
              </div>
              <div className="text-7xl md:text-9xl text-gold opacity-90" aria-hidden>
                {game.icon}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 max-w-2xl">
              <Stat label="Сложность" value={game.difficulty} />
              <Stat label="RTP" value={game.rtp} />
              <Stat label="Происхождение" value={game.origin} />
            </div>
          </div>
        </section>

        {/* CONTENT */}
        <article className="container max-w-3xl py-16">
          <div className="prose-noir">
            <p className="text-xl text-foreground/85 leading-relaxed first-letter:font-display first-letter:text-6xl first-letter:text-gold first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              {game.intro}
            </p>

            <h2>История</h2>
            <p>{game.history}</p>
          </div>

          <PlayCTA gameName={game.name} />

          <div className="prose-noir">
            <h2>Правила игры</h2>
            <ul>
              {game.rules.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>

            <h2>Стратегия</h2>
            <ul>
              {game.strategy.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>

            <h2>Полезные советы</h2>
            <ul>
              {game.tips.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>

            <h2>Часто задаваемые вопросы</h2>
            {game.faq.map((f, i) => (
              <div key={i} className="mb-6 border-l-2 border-gold/40 pl-4">
                <h3 className="font-display text-xl text-gold mb-2">{f.q}</h3>
                <p className="text-foreground/80">{f.a}</p>
              </div>
            ))}
          </div>

          <PlayCTA gameName={game.name} />
        </article>

        {/* OTHER GAMES */}
        <section className="container py-16 border-t border-gold/10">
          <div className="text-center mb-12">
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3">Продолжить изучение</p>
            <h2 className="font-display text-4xl text-foreground">Другие игры</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {otherGames.map((g) => (
              <Link
                key={g.slug}
                to={`/igra/${g.slug}`}
                className="group block p-6 rounded border border-gold/20 bg-card hover:border-gold hover:shadow-gold transition-elegant"
              >
                <div className="text-4xl mb-3" aria-hidden>{g.icon}</div>
                <h3 className="font-display text-2xl text-foreground group-hover:text-gold transition-elegant mb-2">
                  {g.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">{g.shortDescription}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="border-l-2 border-gold/40 pl-4">
    <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">{label}</div>
    <div className="text-sm md:text-base text-gold-light font-semibold">{value}</div>
  </div>
);

export default GamePage;
