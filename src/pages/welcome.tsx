import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ScrollReveal from "scrollreveal";

export default function WelcomePage() {
  // Refs para os elementos que vão animar
  const feature1Ref = useRef(null);
  const feature2Ref = useRef(null);
  const feature3Ref = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    ScrollReveal().reveal(feature1Ref.current, {
      origin: 'left', distance: '60px', duration: 1000, easing: 'ease', reset: false
    });
    ScrollReveal().reveal(feature2Ref.current, {
      origin: 'bottom', distance: '60px', duration: 1000, delay: 200, easing: 'ease', reset: false
    });
    ScrollReveal().reveal(feature3Ref.current, {
      origin: 'right', distance: '60px', duration: 1000, delay: 400, easing: 'ease', reset: false
    });
    ScrollReveal().reveal(ctaRef.current, {
      origin: 'bottom', distance: '40px', duration: 1000, delay: 600, easing: 'ease', reset: false
    });
  }, []);

  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center from-muted p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Hero Section */}
      <motion.div
        className="max-w-2xl text-center mb-12"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-bold mb-4" data-aos="fade-right">Bem-vindo ao SYM!</h1>
        <motion.p
          className="text-lg text-muted-foreground mb-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Controle suas finanças, visualize relatórios, acompanhe seus ganhos e despesas de forma simples e intuitiva.
        </motion.p>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/login">
            <Button size="lg">Comece agora</Button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mb-7">
        <div ref={feature1Ref} className="bg-black rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Dashboard Inteligente</h2>
          <p className="text-muted-foreground">Visualize seus dados financeiros em gráficos e cards dinâmicos.</p>
        </div>
        <div ref={feature2Ref} className="bg-black rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Relatórios Detalhados</h2>
          <p className="text-muted-foreground">Acompanhe receitas, despesas e tendências mensais com facilidade.</p>
        </div>
        <div ref={feature3Ref} className="bg-black rounded shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Segurança e Privacidade</h2>
          <p className="text-muted-foreground">Seus dados protegidos com criptografia e autenticação segura.</p>
        </div>
      </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <Link to="/documentation">
            <Button size="lg" variant="link" className="mb-12">Documentação do site</Button>
          </Link>
        </motion.div>
    </motion.div>
  );
}
