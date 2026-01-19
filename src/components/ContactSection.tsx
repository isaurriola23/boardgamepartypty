import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send, Phone, Mail, Instagram, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const eventTypes = [
  "Fiesta Infantil",
  "Evento Familiar",
  "Noche de Juegos",
  "Taller Empresarial",
  "Evento Corporativo",
  "Otro"
];

const socialLinks = [
  { 
    icon: MessageCircle, 
    label: "WhatsApp", 
    value: "6841-8587",
    href: "https://wa.me/5076841858",
    color: "bg-green-500 hover:bg-green-600"
  },
  { 
    icon: Mail, 
    label: "Correo", 
    value: "boardgamepartypty@gmail.com",
    href: "mailto:boardgamepartypty@gmail.com",
    color: "bg-game-red hover:bg-game-red/90"
  },
  { 
    icon: Instagram, 
    label: "Instagram", 
    value: "@boardgamesparty",
    href: "https://instagram.com/boardgamesparty",
    color: "bg-gradient-to-br from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600"
  },
];

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    eventType: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `¡Hola! Soy ${formData.name}.\n\nTipo de evento: ${formData.eventType}\nTeléfono: ${formData.phone}\nCorreo: ${formData.email}\n\nMensaje: ${formData.message}`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/5076841858?text=${encodedMessage}`, "_blank");
    
    toast({
      title: "¡Mensaje enviado!",
      description: "Te redirigimos a WhatsApp para completar tu solicitud.",
    });

    setFormData({ name: "", phone: "", email: "", eventType: "", message: "" });
  };

  return (
    <section id="contacto" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-game-yellow/5" />
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm mb-4">
            💬 Hablemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-fredoka font-bold mb-6 text-foreground">
            <span className="text-gradient-hero">Contáctenos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¿Listo para tu próximo evento? Escríbenos y te ayudaremos a crear una experiencia inolvidable.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-card rounded-3xl p-6 md:p-8 shadow-game"
          >
            <h3 className="text-xl font-fredoka font-bold text-foreground mb-6">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                placeholder="Tu nombre"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="rounded-xl border-border/50 focus:border-primary"
              />
              <div className="grid grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Teléfono"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  required
                  className="rounded-xl border-border/50 focus:border-primary"
                />
                <Input
                  type="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="rounded-xl border-border/50 focus:border-primary"
                />
              </div>
              <Select 
                value={formData.eventType} 
                onValueChange={(value) => setFormData({ ...formData, eventType: value })}
              >
                <SelectTrigger className="rounded-xl border-border/50 focus:border-primary">
                  <SelectValue placeholder="Tipo de evento" />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Cuéntanos sobre tu evento..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={4}
                className="rounded-xl border-border/50 focus:border-primary resize-none"
              />
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-hero hover:opacity-90 text-primary-foreground font-bold text-lg py-6"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensaje
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="bg-card rounded-3xl p-6 md:p-8 shadow-game">
              <h3 className="text-xl font-fredoka font-bold text-foreground mb-6">
                Contacto Directo
              </h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center gap-4 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors"
                  >
                    <div className={`w-12 h-12 ${link.color} rounded-xl flex items-center justify-center text-primary-foreground`}>
                      <link.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{link.label}</p>
                      <p className="text-sm text-muted-foreground">{link.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick WhatsApp CTA */}
            <motion.a
              href="https://wa.me/5076841858"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              className="block bg-green-500 hover:bg-green-600 text-primary-foreground rounded-2xl p-6 text-center transition-colors"
            >
              <MessageCircle className="w-8 h-8 mx-auto mb-2" />
              <p className="font-fredoka font-bold text-lg">¿Prefieres escribirnos directo?</p>
              <p className="text-sm opacity-90">Haz clic aquí para chatear por WhatsApp</p>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
