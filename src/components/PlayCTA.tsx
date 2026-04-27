import { PLAY_URL } from "@/config/site";

interface PlayCTAProps {
  variant?: "inline" | "banner";
  gameName?: string;
}

const PlayCTA = ({ variant = "banner", gameName }: PlayCTAProps) => {
  if (variant === "inline") {
    return (
      <a
        href={PLAY_URL}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--gradient-gold)] text-primary-foreground font-semibold uppercase tracking-wider text-sm rounded shadow-gold hover:scale-105 transition-elegant"
      >
        {gameName ? `Играть в ${gameName}` : "Играть в казино"}
        <span aria-hidden>→</span>
      </a>
    );
  }

  return (
    <section
      aria-label="Призыв к игре"
      className="my-16 relative overflow-hidden rounded border border-gold/30 bg-gradient-to-br from-card via-secondary to-card p-10 md:p-14 text-center shadow-card-noir"
    >
      <div className="absolute inset-0 bg-radial-gold opacity-60 pointer-events-none" />
      <div className="relative z-10">
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">Готовы попробовать?</p>
        <h2 className="font-display text-4xl md:text-5xl text-gold mb-4">
          {gameName ? `Сыграйте в ${gameName} прямо сейчас` : "Испытайте удачу в казино"}
        </h2>
        <p className="max-w-xl mx-auto text-foreground/80 mb-8">
          Применяйте знания на практике. Эксклюзивный приветственный бонус ждёт вас.
        </p>
        <a
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-3 px-10 py-4 bg-[var(--gradient-gold)] text-primary-foreground font-semibold uppercase tracking-wider rounded shadow-gold hover:scale-105 hover:shadow-glow transition-elegant animate-glow-pulse"
        >
          Играть сейчас
          <span aria-hidden>→</span>
        </a>
        <p className="text-xs text-muted-foreground mt-4">18+ · Играйте ответственно</p>
      </div>
    </section>
  );
};

export default PlayCTA;
