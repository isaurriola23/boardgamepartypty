import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar as CalendarIcon, Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    date: "25",
    month: "Ene",
    title: "Noche de Juegos de Estrategia",
    time: "7:00 PM - 10:00 PM",
    location: "Centro Comercial Multiplaza",
    spots: "12 cupos disponibles",
    type: "strategy"
  },
  {
    date: "01",
    month: "Feb",
    title: "Taller de Juegos para Familias",
    time: "3:00 PM - 6:00 PM",
    location: "Parque Omar",
    spots: "8 familias disponibles",
    type: "family"
  },
  {
    date: "08",
    month: "Feb",
    title: "Torneo de Juegos Party",
    time: "5:00 PM - 9:00 PM",
    location: "Centro de Convenciones",
    spots: "20 cupos disponibles",
    type: "tournament"
  },
];

const getEventColor = (type: string) => {
  switch (type) {
    case "strategy": return "bg-primary";
    case "family": return "bg-game-yellow";
    case "tournament": return "bg-game-red";
    default: return "bg-primary";
  }
};

export const CalendarSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = (eventTitle: string) => {
    const message = encodeURIComponent(`¡Hola! Me interesa inscribirme en el evento: ${eventTitle}`);
    window.open(`https://wa.me/5076841858?text=${message}`, "_blank");
  };

  return (
    <section id="cartelera" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-game-red/10 text-game-red font-semibold rounded-full text-sm mb-4">
            📅 Próximos eventos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-6 text-foreground">
            Cartelera de <span className="text-game-red">Eventos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Eventos abiertos al público: noches de juegos, talleres, torneos y mucho más. 
            ¡Únete a nuestra comunidad de jugadores!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4 mb-12">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.5 }}
              whileHover={{ x: 5 }}
              className="bg-card rounded-2xl p-4 md:p-6 shadow-game hover:shadow-game-hover transition-all duration-300 flex flex-col md:flex-row items-start md:items-center gap-4"
            >
              {/* Date badge */}
              <div className={`${getEventColor(event.type)} text-primary-foreground rounded-xl p-3 text-center min-w-[70px]`}>
                <span className="text-2xl font-fredoka font-bold block">{event.date}</span>
                <span className="text-xs uppercase font-medium">{event.month}</span>
              </div>

              {/* Event info */}
              <div className="flex-1">
                <h3 className="text-lg font-fredoka font-bold text-foreground mb-2">{event.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {event.location}
                  </span>
                  <span className="flex items-center gap-1 text-primary font-medium">
                    <Users className="w-4 h-4" />
                    {event.spots}
                  </span>
                </div>
              </div>

              {/* CTA */}
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
                onClick={() => openWhatsApp(event.title)}
              >
                Inscribirme
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="text-center flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button
            size="lg"
            className="bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold text-lg px-8 py-6"
          >
            <CalendarIcon className="w-5 h-5 mr-2" />
            Ver Cartelera Completa
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-game-red text-game-red hover:bg-game-red hover:text-primary-foreground font-bold text-lg px-8 py-6"
            onClick={() => openWhatsApp("próximo evento")}
          >
            Inscribirme a un Evento
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
