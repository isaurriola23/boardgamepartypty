import { Gamepad2, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 font-fredoka text-xl font-bold">
            <Gamepad2 className="w-7 h-7 text-game-yellow" />
            <span>Board Game</span>
            <span className="text-game-yellow">Party</span>
          </div>

          {/* Copyright */}
          <p className="text-sm text-background/70 text-center">
            © {new Date().getFullYear()} Board Game Party. Todos los derechos reservados.
          </p>

          {/* Made with love */}
          <p className="flex items-center gap-1 text-sm text-background/70">
            Hecho con <Heart className="w-4 h-4 text-game-red fill-game-red" /> en Panamá
          </p>
        </div>
      </div>
    </footer>
  );
};
