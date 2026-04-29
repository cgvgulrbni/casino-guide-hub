import { Link, useLocation } from "react-router-dom";
import { PLAY_URL } from "@/config/site";

const Header = () => {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-gold/10">
      <div className="container flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="text-3xl text-gold transition-elegant group-hover:rotate-12">♠</span>
          <span className="font-display text-xl md:text-2xl text-gold leading-none">
            Casino<span className="text-foreground">-pro.online</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm uppercase tracking-widest">
          <Link
            to="/"
            className={`transition-elegant hover:text-gold ${isHome ? "text-gold" : "text-foreground/70"}`}
          >
            Игры
          </Link>
          <a href="#about" className="text-foreground/70 hover:text-gold transition-elegant">
            О сайте
          </a>
        </nav>

        <a
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[var(--gradient-gold)] text-primary-foreground font-semibold uppercase tracking-wider text-xs rounded shadow-gold hover:scale-105 transition-elegant"
        >
          Играть
        </a>
      </div>
    </header>
  );
};

export default Header;
