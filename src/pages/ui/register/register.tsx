import { useEffect, useState } from "react";
import { DataTable } from "./data-table";
import { z } from "zod";
import { getTransactions, addTransaction, deleteTransactions } from "@/db/transactions-local";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z.object({
  name: z.string().min(2),
  amount: z.number().min(0),
  type: z.boolean(),
  method: z.enum(["credit", "debit", "pix", "money"])
});

export type Transaction = z.infer<typeof formSchema> & { id: string; createdAt: Date };

export function Register() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const loaded = getTransactions().map(t => ({
      ...t,
      createdAt: new Date(t.createdAt),
    }));
    setTransactions(loaded);
  }, []);

  function handleAddTransaction(newTransaction: Omit<Transaction, "id" | "createdAt">) {
    const transaction = {
      ...newTransaction,
      id: Math.random().toString(36).substring(2, 8),
      createdAt: new Date(),
    };
    addTransaction({
      ...transaction,
      createdAt: transaction.createdAt.toISOString(),
    });
    setTransactions((prev) => [...prev, transaction]);
  }

  function handleDeleteTransactions(ids: string[]) {
    deleteTransactions(ids);
    setTransactions(prev => prev.filter(t => !ids.includes(t.id)));
  }

  const totalIn = transactions.filter(t => t.type).reduce((sum, t) => sum + t.amount, 0);
  const totalOut = transactions.filter(t => !t.type).reduce((sum, t) => sum + Math.abs(t.amount), 0);
  const balance = totalIn - totalOut;

  const fmt = (v: number) =>
    new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(v);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#080810",
        color: "#F0EEE6",
        fontFamily: "'DM Mono', 'Courier New', monospace",
        backgroundImage: `
          linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
      }}
    >
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@300;400;500;700&display=swap');`}</style>

      <div style={{ maxWidth: 1380, margin: "0 auto", padding: "48px 48px 80px" }}>

        {/* Header */}
        <div className="mt-8" style={{ marginBottom: 48 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(0,255,178,0.06)", border: "1px solid rgba(0,255,178,0.15)",
            borderRadius: 100, padding: "5px 14px", fontSize: 11,
            letterSpacing: "0.12em", color: "#00FFB2", marginBottom: 16,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00FFB2", display: "inline-block" }} />
            REGISTRO DE TRANSAÇÕES
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800,
            fontFamily: "'DM Serif Display', Georgia, serif",
            letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 8,
          }}>
            Suas transações
          </h1>
          <p style={{ fontSize: 13, color: "rgba(240,238,230,0.4)", letterSpacing: "0.04em" }}>
            Visualize, crie e gerencie todas as movimentações financeiras.
          </p>
        </div>

        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {[
            { label: "SALDO ATUAL", value: fmt(balance), accent: balance >= 0 ? "#00FFB2" : "#FF6B6B" },
            { label: "TOTAL ENTRADAS", value: fmt(totalIn), accent: "#00FFB2" },
            { label: "TOTAL SAÍDAS", value: fmt(totalOut), accent: "#FF6B6B" },
          ].map(card => (
            <div key={card.label} style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 8, padding: "24px 28px",
              transition: "border-color 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.borderColor = `${card.accent}30`)}
              onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)")}
            >
              <div style={{ fontSize: 11, color: "rgba(240,238,230,0.35)", letterSpacing: "0.12em", marginBottom: 10 }}>
                {card.label}
              </div>
              <div style={{
                fontSize: 28, fontWeight: 800,
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: card.accent, letterSpacing: "-0.01em",
              }}>
                {card.value}
              </div>
            </div>
          ))}
        </div>

        <DataTable
          data={transactions}
          onAddTransaction={handleAddTransaction}
          onDeleteTransactions={handleDeleteTransactions}
        />
      </div>
    </div>
  );
}