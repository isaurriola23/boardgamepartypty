import { motion } from "framer-motion";
import { PartyPopper, Users, Building2, Calendar, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = [
  { icon: PartyPopper, label: "Fiestas infantiles temáticas", color: "text-game-red" },
  { icon: Users, label: "Eventos para todas las edades", color: "text-primary" },
  { icon: Building2, label: "Talleres empresariales", color: "text-game-yellow" },
  { icon: Calendar, label: "Cartelera de actividades", color: "text-game-red" },
  { icon: GraduationCap, label: "Dinámicas educativas", color: "text-primary" },
];

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Personas jugando juegos de mesa" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background/95" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-32 left-10 w-20 h-20 bg-game-yellow/30 rounded-3xl rotate-12 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-game-red/30 rounded-2xl -rotate-12 animate-float" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/20 rounded-3xl rotate-45 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-game-yellow/25 rounded-xl -rotate-6 animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container relative z-10 mx-auto px-4 py-12 md:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.span 
              className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              🎲 Experiencias lúdicas únicas
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-fredoka font-bold mb-6 leading-tight">
              <span className="text-foreground">Diversión con </span>
              <span className="text-gradient-hero">juegos de mesa</span>
              <br />
              <span className="text-foreground">para todas las edades</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Creamos experiencias lúdicas para niños, familias, adultos y empresas 
              utilizando juegos de mesa modernos y facilitadores expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button
                size="lg"
                className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                onClick={() => scrollToSection("#contacto")}
              >
                Reservar Evento
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold text-lg px-8 py-6 transition-all"
                onClick={() => scrollToSection("#cartelera")}
              >
                Ver Cartelera
              </Button>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.label}
                className="flex flex-col items-center p-4 bg-card rounded-2xl shadow-game hover:shadow-game-hover transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <benefit.icon className={`w-8 h-8 ${benefit.color} mb-2`} />
                <span className="text-xs md:text-sm font-medium text-center text-foreground">
                  {benefit.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
