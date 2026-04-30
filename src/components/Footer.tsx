import { Link } from "react-router-dom";
import { GAMES } from "@/data/games";

const Footer = () => {
  return (
    <footer className="mt-24 border-t border-gold/10 bg-card/30">
      <div className="container py-16 grid gap-12 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl text-gold">♠</span>
            <span className="font-display text-xl text-gold">Casino-pro.online</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Энциклопедия казино-игр: история, правила, стратегии и советы для игроков всех уровней.
          </p>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold mb-4">Игры</h3>
          <ul className="space-y-2 text-sm">
            {GAMES.map((g) => (
              <li key={g.slug}>
                <Link
                  to={`/igra/${g.slug}`}
                  className="text-foreground/70 hover:text-gold transition-elegant"
                >
                  {g.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-lg text-gold mb-4">Ответственная игра</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Азартные игры предназначены для лиц старше 18 лет. Играйте ответственно.
            Если азартные игры стали проблемой — обратитесь за помощью.
          </p>
          <p className="text-xs text-muted-foreground mt-4">
            18+ · Играйте ответственно
          </p>
        </div>
      </div>
      <div className="border-t border-gold/10 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Casino-pro.online · Все права защищены
      </div>
    </footer>
  );
};

export default Footer;
