import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform, cubicBezier } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.15, ease: cubicBezier(0.22, 1, 0.36, 1) },
  }),
};

const features = [
  {
    icon: "◈",
    title: "Dashboard Inteligente",
    desc: "Visualize todos os seus dados financeiros em tempo real. Gráficos dinâmicos, cards de resumo e alertas personalizados para você tomar decisões com confiança.",
    accent: "#00FFB2",
  },
  {
    icon: "◎",
    title: "Relatórios Detalhados",
    desc: "Acompanhe receitas, despesas e tendências mensais com relatórios exportáveis. Filtre por categoria, período e veja exatamente para onde seu dinheiro vai.",
    accent: "#FFD600",
  },
  {
    icon: "◉",
    title: "Segurança Total",
    desc: "Autenticação em dois fatores, criptografia ponta-a-ponta e backups automáticos. Seus dados financeiros protegidos com padrão bancário.",
    accent: "#FF6B6B",
  },
  {
    icon: "◆",
    title: "Metas Financeiras",
    desc: "Defina objetivos de economia, viagens ou investimentos e acompanhe o progresso com visualizações motivadoras. Alcance seus sonhos com planejamento.",
    accent: "#7B61FF",
  },
  {
    icon: "◇",
    title: "Categorização Automática",
    desc: "O SYM aprende com seus hábitos e categoriza transações automaticamente. Menos trabalho manual, mais tempo para o que importa.",
    accent: "#00C9FF",
  },
  {
    icon: "○",
    title: "Multi-contas",
    desc: "Gerencie cartões, contas bancárias e carteiras digitais em um só lugar. Visão consolidada de todo o seu patrimônio com um único login.",
    accent: "#FF9F43",
  },
];

const stats = [
  { value: "12k+", label: "Usuários ativos" },
  { value: "R$2M+", label: "Gerenciados mensalmente" },
  { value: "99.9%", label: "Uptime garantido" },
  { value: "4.9★", label: "Avaliação média" },
];

export default function WelcomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handle);
    return () => window.removeEventListener("mousemove", handle);
  }, []);

  return (
    <div
      style={{
        background: "#080810",
        color: "#F0EEE6",
        fontFamily: "'DM Mono', 'Courier New', monospace",
        overflowX: "hidden",
        minHeight: "100vh",
      }}
    >
      {/* Cursor glow */}
      <div
        style={{
          position: "fixed",
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          width: 400,
          height: 400,
          background:
            "radial-gradient(circle, rgba(0,255,178,0.06) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 0,
          transition: "left 0.1s ease, top 0.1s ease",
        }}
      />

      {/* NAV */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "20px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          backdropFilter: "blur(20px)",
          background: "rgba(8,8,16,0.8)",
        }}
      >
        <span
          style={{
            fontSize: 22,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#00FFB2",
          }}
        >
          SYM
        </span>
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          <a
            href="#features"
            style={{
              color: "rgba(240,238,230,0.5)",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#F0EEE6")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(240,238,230,0.5)")
            }
          >
            RECURSOS
          </a>
          <a
            href="#stats"
            style={{
              color: "rgba(240,238,230,0.5)",
              textDecoration: "none",
              fontSize: 13,
              letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#F0EEE6")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "rgba(240,238,230,0.5)")
            }
          >
            NÚMEROS
          </a>
          <Link to="/register">
            <button
              style={{
                background: "transparent",
                border: "1px solid rgba(240,238,230,0.2)",
                color: "#F0EEE6",
                padding: "8px 20px",
                borderRadius: 4,
                fontSize: 13,
                letterSpacing: "0.08em",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = "#00FFB2";
                (e.target as HTMLElement).style.color = "#00FFB2";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(240,238,230,0.2)";
                (e.target as HTMLElement).style.color = "#F0EEE6";
              }}
            >
              INICIAR
            </button>
          </Link>
        </div>
      </motion.nav>

      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{
          y: heroY,
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "120px 48px 80px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="relative"
      >
        {/* Grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(rgba(0,255,178,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,178,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        {/* Glow orb */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            background:
              "radial-gradient(circle, rgba(0,255,178,0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(0,255,178,0.08)",
            border: "1px solid rgba(0,255,178,0.2)",
            borderRadius: 100,
            padding: "6px 16px",
            fontSize: 12,
            letterSpacing: "0.1em",
            color: "#00FFB2",
            marginBottom: 32,
          }}
        >
          <span
            style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#00FFB2",
              display: "inline-block",
              animation: "pulse 2s infinite",
            }}
          />
          VERSÃO 2.0 — AGORA DISPONÍVEL
        </motion.div>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={1}
          style={{
            fontSize: "clamp(48px, 8vw, 96px)",
            fontWeight: 800,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            fontFamily: "'DM Serif Display', Georgia, serif",
            marginBottom: 24,
            maxWidth: 900,
          }}
        >
          Controle total
          <br />
          <span
            style={{
              WebkitTextStroke: "1px rgba(240,238,230,0.3)",
              color: "transparent",
            }}
          >
            do seu dinheiro.
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={2}
          style={{
            fontSize: 18,
            lineHeight: 1.7,
            color: "rgba(240,238,230,0.5)",
            maxWidth: 520,
            marginBottom: 48,
            fontFamily: "'DM Mono', monospace",
            fontWeight: 300,
          }}
        >
          SYM é a plataforma financeira pessoal que transforma números em
          clareza. Visualize, planeje e evolua — tudo em um só lugar.
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={3}
          style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center" }}
        >
          <Link to="/register">
            <button
              style={{
                background: "#00FFB2",
                color: "#080810",
                border: "none",
                padding: "16px 36px",
                borderRadius: 4,
                fontSize: 14,
                fontWeight: 700,
                letterSpacing: "0.1em",
                cursor: "pointer",
                fontFamily: "'DM Mono', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#00e8a0";
                (e.target as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#00FFB2";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              COMEÇAR GRÁTIS →
            </button>
          </Link>
          <Link to="https://github.com/raultuee/SYM">
            <button
              style={{
                background: "transparent",
                color: "rgba(240,238,230,0.6)",
                border: "1px solid rgba(240,238,230,0.12)",
                padding: "16px 36px",
                borderRadius: 4,
                fontSize: 14,
                letterSpacing: "0.1em",
                cursor: "pointer",
                fontFamily: "'DM Mono', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(240,238,230,0.3)";
                (e.target as HTMLElement).style.color = "#F0EEE6";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(240,238,230,0.12)";
                (e.target as HTMLElement).style.color =
                  "rgba(240,238,230,0.6)";
              }}
            >
              VER DOCUMENTAÇÃO
            </button>
          </Link>
        </motion.div>

        {/* Hero preview mockup */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={5}
          style={{
            marginTop: 80,
            width: "100%",
            maxWidth: 860,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 12,
            overflow: "hidden",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,255,178,0.05)",
          }}
        >
          {/* Window bar */}
          <div
            style={{
              padding: "14px 20px",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(255,255,255,0.02)",
            }}
          >
            {["#FF5F57", "#FFBD2E", "#28CA42"].map((c) => (
              <div
                key={c}
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  background: c,
                  opacity: 0.8,
                }}
              />
            ))}
            <div
              style={{
                flex: 1,
                textAlign: "center",
                fontSize: 12,
                color: "rgba(240,238,230,0.3)",
                letterSpacing: "0.05em",
              }}
            >
              sym.app/dashboard
            </div>
          </div>

          {/* Dashboard mockup content */}
          <div
            style={{
              padding: 24,
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 16,
            }}
          >
            {[
              { label: "Saldo Total", value: "R$ 14.320,00", change: "+8.2%", accent: "#00FFB2" },
              { label: "Despesas do Mês", value: "R$ 3.841,50", change: "-2.1%", accent: "#FF6B6B" },
              { label: "Economia", value: "R$ 2.100,00", change: "+15.4%", accent: "#FFD600" },
            ].map((card) => (
              <div
                key={card.label}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: 8,
                  padding: 20,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    color: "rgba(240,238,230,0.4)",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                  }}
                >
                  {card.label.toUpperCase()}
                </div>
                <div
                  style={{
                    fontSize: 22,
                    fontWeight: 700,
                    color: "#F0EEE6",
                    fontFamily: "Georgia, serif",
                    marginBottom: 4,
                  }}
                >
                  {card.value}
                </div>
                <div style={{ fontSize: 12, color: card.accent }}>
                  {card.change} este mês
                </div>
              </div>
            ))}
          </div>

          {/* Fake chart bar */}
          <div style={{ padding: "0 24px 24px", display: "flex", gap: 6, alignItems: "flex-end", height: 80 }}>
            {[40, 65, 50, 80, 55, 90, 70, 85, 60, 75, 95, 68].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  background:
                    i === 10
                      ? "#00FFB2"
                      : `rgba(0,255,178,${0.1 + i * 0.02})`,
                  borderRadius: "2px 2px 0 0",
                  transition: "height 0.3s",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* STATS */}
      <section
        id="stats"
        style={{
          padding: "80px 48px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
            textAlign: "center",
          }}
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              custom={i}
            >
              <div
                style={{
                  fontSize: 42,
                  fontWeight: 800,
                  fontFamily: "Georgia, serif",
                  color: "#00FFB2",
                  marginBottom: 8,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "rgba(240,238,230,0.4)",
                  letterSpacing: "0.12em",
                }}
              >
                {s.label.toUpperCase()}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: "120px 48px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ textAlign: "center", marginBottom: 80 }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#00FFB2",
                marginBottom: 16,
              }}
            >
              RECURSOS
            </div>
            <h2
              style={{
                fontSize: "clamp(32px, 5vw, 56px)",
                fontWeight: 800,
                fontFamily: "Georgia, serif",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              Tudo que você precisa
              <br />
              <span style={{ color: "rgba(240,238,230,0.35)" }}>
                para dominar suas finanças.
              </span>
            </h2>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2,
            }}
          >
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i * 0.5}
                style={{
                  padding: 40,
                  border: "1px solid rgba(255,255,255,0.06)",
                  background: "rgba(255,255,255,0.02)",
                  cursor: "default",
                  transition: "all 0.3s",
                  position: "relative",
                  overflow: "hidden",
                }}
                whileHover={{
                  background: "rgba(255,255,255,0.05)",
                  borderColor: `${f.accent}30`,
                }}
              >
                <div
                  style={{
                    fontSize: 32,
                    color: f.accent,
                    marginBottom: 20,
                    lineHeight: 1,
                  }}
                >
                  {f.icon}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    fontFamily: "Georgia, serif",
                    marginBottom: 12,
                    color: "#F0EEE6",
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "rgba(240,238,230,0.45)",
                  }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section
        style={{
          padding: "120px 48px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(255,255,255,0.015)",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto", textAlign: "center" }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div
              style={{
                fontSize: 11,
                letterSpacing: "0.2em",
                color: "#00FFB2",
                marginBottom: 16,
              }}
            >
              COMO FUNCIONA
            </div>
            <h2
              style={{
                fontSize: "clamp(28px, 4vw, 48px)",
                fontWeight: 800,
                fontFamily: "Georgia, serif",
                marginBottom: 64,
                lineHeight: 1.1,
              }}
            >
              Comece em 3 passos simples
            </h2>
          </motion.div>

          <div
            style={{ display: "flex", gap: 48, justifyContent: "center", flexWrap: "wrap" }}
          >
            {[
              {
                step: "01",
                title: "Crie sua conta",
                desc: "Cadastro gratuito em menos de 2 minutos. Sem cartão de crédito.",
              },
              {
                step: "02",
                title: "Conecte suas contas",
                desc: "Importe transações de bancos, cartões e carteiras digitais.",
              },
              {
                step: "03",
                title: "Acompanhe tudo",
                desc: "Veja seu dashboard completo e tome decisões com clareza.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                custom={i}
                style={{ flex: "1 1 220px", maxWidth: 260 }}
              >
                <div
                  style={{
                    fontSize: 64,
                    fontWeight: 900,
                    fontFamily: "Georgia, serif",
                    color: "rgba(0,255,178,0.12)",
                    lineHeight: 1,
                    marginBottom: 16,
                  }}
                >
                  {item.step}
                </div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    marginBottom: 10,
                    fontFamily: "Georgia, serif",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: "rgba(240,238,230,0.45)",
                    lineHeight: 1.7,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={{ padding: "140px 48px", textAlign: "center", position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(0,255,178,0.08) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ position: "relative", zIndex: 1 }}
        >
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.2em",
              color: "#00FFB2",
              marginBottom: 24,
            }}
          >
            PRONTO PARA COMEÇAR?
          </div>
          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 72px)",
              fontWeight: 800,
              fontFamily: "Georgia, serif",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginBottom: 24,
            }}
          >
            Assuma o controle
            <br />das suas finanças hoje.
          </h2>
          <p
            style={{
              fontSize: 16,
              color: "rgba(240,238,230,0.45)",
              marginBottom: 48,
              maxWidth: 400,
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            Junte-se a mais de 12 mil pessoas que já transformaram a relação com o dinheiro usando o SYM.
          </p>
          <Link to="/register">
            <button
              style={{
                background: "#00FFB2",
                color: "#080810",
                border: "none",
                padding: "18px 48px",
                borderRadius: 4,
                fontSize: 15,
                fontWeight: 700,
                letterSpacing: "0.1em",
                cursor: "pointer",
                fontFamily: "'DM Mono', monospace",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "#00e8a0";
                (e.target as HTMLElement).style.transform =
                  "translateY(-3px)";
                (e.target as HTMLElement).style.boxShadow =
                  "0 20px 40px rgba(0,255,178,0.25)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "#00FFB2";
                (e.target as HTMLElement).style.transform = "translateY(0)";
                (e.target as HTMLElement).style.boxShadow = "none";
              }}
            >
              INICIAR AGORA →
            </button>
          </Link>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "40px 48px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <span
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.12em",
            color: "#00FFB2",
          }}
        >
          SYM
        </span>
        <span
          style={{
            fontSize: 12,
            color: "rgba(240,238,230,0.3)",
            letterSpacing: "0.06em",
          }}
        >
          © 2025 SYM — Todos os direitos reservados
        </span>
        <Link
          to="https://github.com/raultuee/SYM"
          style={{
            fontSize: 12,
            color: "rgba(240,238,230,0.3)",
            letterSpacing: "0.06em",
            textDecoration: "none",
          }}
        >
          GitHub →
        </Link>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@300;400;500;700&display=swap');
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
      `}</style>
    </div>
  );
}