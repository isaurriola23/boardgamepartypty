import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Cake, Clock, Users, Gamepad2, Trophy, Star, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import kidsPartyImg from "@/assets/kids-party.jpg";

const packageIncludes = [
  { icon: Users, text: "Hasta 10 niños" },
  { icon: Clock, text: "2 horas de diversión" },
  { icon: Gamepad2, text: "1 monitor experto" },
  { icon: Star, text: "Juegos según edad" },
  { icon: Trophy, text: "Mini torneo" },
  { icon: Cake, text: "Stickers de premios" },
];

export const KidsPartySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me interesa cotizar una fiesta infantil con Board Game Party.");
    window.open(`https://wa.me/5076841858?text=${message}`, "_blank");
  };

  return (
    <section id="fiestas-infantiles" className="py-20 md:py-28 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-game-yellow/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-game-red/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-game-red/10 text-game-red font-semibold rounded-full text-sm mb-4">
            🎈 Para los pequeños
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-6 text-foreground">
            Fiestas <span className="text-game-red">Infantiles</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una celebración diferente con juegos de mesa modernos, guiada por monitores expertos. 
            Actividades diseñadas especialmente para niños de <strong>6 a 12 años</strong>.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-game-hover">
              <img 
                src={kidsPartyImg} 
                alt="Niños disfrutando de una fiesta con juegos de mesa" 
                className="w-full h-auto object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4 bg-game-red text-primary-foreground px-6 py-3 rounded-2xl shadow-lg font-fredoka font-bold text-lg"
            >
              6-12 años
            </motion.div>
          </motion.div>

          {/* Main Package Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-3xl shadow-game-hover overflow-hidden order-1 lg:order-2"
          >
            {/* Header */}
            <div className="bg-gradient-fun p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-fredoka font-bold text-primary-foreground mb-2">
                Paquete Básico
              </h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-5xl md:text-6xl font-fredoka font-bold text-primary-foreground">$150</span>
              </div>
            </div>

            {/* Includes */}
            <div className="p-6 md:p-8">
              <h4 className="text-lg font-semibold text-foreground mb-6 text-center">
                ¿Qué incluye?
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
                {packageIncludes.map((item, index) => (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl"
                  >
                    <item.icon className="w-5 h-5 text-game-red flex-shrink-0" />
                    <span className="text-sm font-medium text-foreground">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Extras */}
              <div className="bg-game-yellow/10 rounded-2xl p-5 mb-8">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Plus className="w-5 h-5 text-game-yellow" />
                  Extras disponibles
                </h4>
                <div className="flex flex-col sm:flex-row gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-game-yellow/20 text-game-yellow font-bold rounded-full">$90</span>
                    <span className="text-muted-foreground">Hora extra de diversión</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-game-yellow/20 text-game-yellow font-bold rounded-full">$10</span>
                    <span className="text-muted-foreground">Niño adicional</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  size="lg"
                  className="w-full bg-game-red hover:bg-game-red/90 text-primary-foreground font-bold text-lg py-6"
                  onClick={openWhatsApp}
                >
                  Cotizar Mi Fiesta 🎉
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
