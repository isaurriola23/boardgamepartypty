import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Gamepad2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Quiénes Somos", href: "#quienes-somos" },
  { name: "Fiestas Infantiles", href: "#fiestas-infantiles" },
  { name: "Eventos", href: "#eventos" },
  { name: "Talleres Empresariales", href: "#talleres" },
  { name: "Cartelera", href: "#cartelera" },
  { name: "Contáctenos", href: "#contacto" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.a
            href="#inicio"
            className="flex items-center gap-2 font-fredoka text-xl md:text-2xl font-bold text-primary"
            whileHover={{ scale: 1.02 }}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#inicio");
            }}
          >
            <Gamepad2 className="w-8 h-8 text-game-red" />
            <span>Board Game</span>
            <span className="text-game-yellow">Party</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg hover:bg-primary/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                {item.name}
              </motion.button>
            ))}
            <Button
              className="ml-4 bg-gradient-hero hover:opacity-90 text-primary-foreground font-semibold shadow-lg"
              onClick={() => scrollToSection("#contacto")}
            >
              Reservar
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-4 py-3 text-foreground/80 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                <Button
                  className="w-full mt-4 bg-gradient-hero text-primary-foreground font-semibold"
                  onClick={() => scrollToSection("#contacto")}
                >
                  Reservar Ahora
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
