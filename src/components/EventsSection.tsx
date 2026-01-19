import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Moon, Users, Coffee, Building, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const eventTypes = [
  { 
    icon: Moon, 
    title: "Noches de Juegos",
    description: "Sesiones nocturnas para amigos y parejas con juegos de estrategia y diversión."
  },
  { 
    icon: Users, 
    title: "Reuniones Familiares",
    description: "Actividades para unir a toda la familia con juegos para todas las edades."
  },
  { 
    icon: Coffee, 
    title: "Cafés Lúdicos",
    description: "Transforma tu café o restaurante en un espacio de entretenimiento único."
  },
  { 
    icon: Building, 
    title: "Ferias y Festivales",
    description: "Estaciones de juegos para eventos públicos y actividades comunitarias."
  },
];

export const EventsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me interesa reservar un evento con Board Game Party.");
    window.open(`https://wa.me/5076841858?text=${message}`, "_blank");
  };

  return (
    <section id="eventos" className="py-20 md:py-28 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            🎯 Para todos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-6 text-foreground">
            Eventos para <span className="text-gradient-hero">Todas las Edades</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experiencias diseñadas para adolescentes, adultos y familias. 
            Desde noches de juegos hasta ferias lúdicas, tenemos el evento perfecto para ti.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {eventTypes.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-card rounded-2xl p-6 shadow-game hover:shadow-game-hover transition-all duration-300 border border-border/50"
            >
              <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mb-4">
                <event.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-fredoka font-bold text-foreground mb-2">{event.title}</h3>
              <p className="text-sm text-muted-foreground">{event.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold text-lg px-10 py-6 shadow-lg"
            onClick={openWhatsApp}
          >
            <Heart className="w-5 h-5 mr-2" />
            Reservar Evento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
