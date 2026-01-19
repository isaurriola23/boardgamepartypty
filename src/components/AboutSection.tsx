import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Target, Star, Users, MessageSquare, Lightbulb, Smile, Trophy } from "lucide-react";

const values = [
  { icon: Heart, label: "Pasión por el juego", color: "bg-game-red" },
  { icon: Users, label: "Trabajo en equipo", color: "bg-primary" },
  { icon: MessageSquare, label: "Comunicación", color: "bg-game-yellow" },
  { icon: Lightbulb, label: "Creatividad", color: "bg-game-red" },
  { icon: Smile, label: "Convivencia", color: "bg-primary" },
  { icon: Trophy, label: "Sana competencia", color: "bg-game-yellow" },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quienes-somos" className="py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            Sobre Nosotros
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-6 text-foreground">
            ¿Quiénes <span className="text-gradient-hero">Somos</span>?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            <strong className="text-foreground">Board Game Party</strong> conecta personas a través del juego. 
            Creamos experiencias divertidas, educativas y sociales mediante juegos de mesa modernos 
            para todas las edades. Cada evento es una oportunidad para aprender, reír y crear 
            recuerdos inolvidables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {/* Misión */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-3xl p-8 shadow-game hover:shadow-game-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-hero rounded-2xl flex items-center justify-center mb-4">
              <Target className="w-7 h-7 text-primary-foreground" />
            </div>
            <h3 className="text-2xl font-fredoka font-bold text-foreground mb-3">Nuestra Misión</h3>
            <p className="text-muted-foreground">
              Fomentar la conexión humana y el aprendizaje a través de experiencias lúdicas 
              que inspiren creatividad, trabajo en equipo y diversión genuina.
            </p>
          </motion.div>

          {/* Visión */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-card rounded-3xl p-8 shadow-game hover:shadow-game-hover transition-all duration-300"
          >
            <div className="w-14 h-14 bg-gradient-warm rounded-2xl flex items-center justify-center mb-4">
              <Star className="w-7 h-7 text-secondary-foreground" />
            </div>
            <h3 className="text-2xl font-fredoka font-bold text-foreground mb-3">Nuestra Visión</h3>
            <p className="text-muted-foreground">
              Ser el referente en entretenimiento lúdico, llevando la magia de los juegos 
              de mesa a cada celebración, empresa y comunidad.
            </p>
          </motion.div>
        </div>

        {/* Valores / Beneficios del juego */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-fredoka font-bold text-foreground mb-8">
            Beneficios del Juego
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <motion.div
                key={value.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className={`flex items-center gap-2 px-5 py-3 ${value.color}/10 rounded-full border-2 border-transparent hover:border-current`}
              >
                <value.icon className={`w-5 h-5 ${value.color === 'bg-game-red' ? 'text-game-red' : value.color === 'bg-primary' ? 'text-primary' : 'text-game-yellow'}`} />
                <span className="font-medium text-foreground">{value.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
