import { Link } from "react-router-dom";
import type { Game } from "@/data/games";

interface GameCardProps {
  game: Game;
  index: number;
}

const GameCard = ({ game, index }: GameCardProps) => {
  return (
    <Link
      to={`/igra/${game.slug}`}
      className="group relative block overflow-hidden rounded border border-gold/20 bg-card p-8 transition-elegant hover:border-gold hover:shadow-gold hover:-translate-y-2 opacity-0 animate-fade-in-up"
      style={{ animationDelay: `${index * 80}ms` }}
      aria-label={`Читать обзор: ${game.name}`}
    >
      <div className="absolute inset-0 bg-radial-gold opacity-0 group-hover:opacity-100 transition-elegant pointer-events-none" />

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-6">
          <span className="text-5xl md:text-6xl" aria-hidden>
            {game.icon}
          </span>
          <span className="text-xs uppercase tracking-widest text-gold/70 border border-gold/30 px-2 py-1 rounded">
            {game.difficulty}
          </span>
        </div>

        <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">{game.tagline}</p>
        <h3 className="font-display text-3xl md:text-4xl text-foreground mb-3 group-hover:text-gold transition-elegant">
          {game.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6 line-clamp-3">
          {game.shortDescription}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gold/10">
          <div className="text-xs text-muted-foreground">
            <span className="text-gold">RTP:</span> {game.rtp}
          </div>
          <span className="text-gold text-sm uppercase tracking-wider group-hover:translate-x-1 transition-elegant">
            Читать →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default GameCard;
