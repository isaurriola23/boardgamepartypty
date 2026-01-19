import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Brain, Cog, MessageSquare, Lightbulb, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import corporateImg from "@/assets/corporate-workshop.jpg";

const modalities = [
  {
    icon: Users,
    title: "Team Building",
    description: "Fortalece lazos y mejora la comunicación de tu equipo a través de dinámicas lúdicas.",
    color: "from-primary to-primary/70"
  },
  {
    icon: Brain,
    title: "Soft Skills",
    description: "Desarrolla habilidades blandas como liderazgo, toma de decisiones y pensamiento estratégico.",
    color: "from-game-red to-game-red/70"
  },
  {
    icon: Cog,
    title: "Gamificación Corporativa",
    description: "Integra mecánicas de juego en procesos empresariales para mayor engagement.",
    color: "from-game-yellow to-game-yellow/70"
  },
];

const skills = [
  { icon: MessageSquare, label: "Comunicación" },
  { icon: Target, label: "Liderazgo" },
  { icon: Lightbulb, label: "Creatividad" },
  { icon: Users, label: "Colaboración" },
];

export const CorporateSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const openWhatsApp = () => {
    const message = encodeURIComponent("¡Hola! Me interesa solicitar una propuesta de taller empresarial con Board Game Party.");
    window.open(`https://wa.me/5076841858?text=${message}`, "_blank");
  };

  return (
    <section id="talleres" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,191,36,0.05)_0%,transparent_50%)]" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-12">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-game-yellow/10 text-game-yellow font-semibold rounded-full text-sm mb-4">
              💼 Para empresas
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-6 text-foreground">
              Talleres <span className="text-game-yellow">Empresariales</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Team building lúdico con juegos de mesa para fortalecer habilidades empresariales. 
              Una forma innovadora de desarrollar a tu equipo.
            </p>

            {/* Skills pills */}
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 bg-card rounded-full shadow-sm border border-border/50"
                >
                  <skill.icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-game-hover">
              <img 
                src={corporateImg} 
                alt="Equipo empresarial disfrutando de un taller con juegos de mesa" 
                className="w-full h-auto object-cover aspect-square"
              />
            </div>
          </motion.div>
        </div>

        {/* Modalities */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {modalities.map((mod, index) => (
            <motion.div
              key={mod.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="bg-card rounded-2xl overflow-hidden shadow-game hover:shadow-game-hover transition-all duration-300"
            >
              <div className={`h-2 bg-gradient-to-r ${mod.color}`} />
              <div className="p-6">
                <div className={`w-12 h-12 bg-gradient-to-br ${mod.color} rounded-xl flex items-center justify-center mb-4`}>
                  <mod.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-fredoka font-bold text-foreground mb-2">{mod.title}</h3>
                <p className="text-sm text-muted-foreground">{mod.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <Button
            size="lg"
            className="bg-game-yellow hover:bg-game-yellow/90 text-secondary-foreground font-bold text-lg px-10 py-6 shadow-lg"
            onClick={openWhatsApp}
          >
            Solicitar Propuesta 📋
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
