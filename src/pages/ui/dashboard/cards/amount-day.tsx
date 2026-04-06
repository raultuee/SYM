import { Calendar } from "lucide-react";
import { getTransactions } from "@/db/transactions-local";
import React from "react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function DayOrdersAmountCard() {
  const [amount, setAmount] = React.useState(0);
  const [diffFromYesterday, setDiffFromYesterday] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const transactions = getTransactions();
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    const sumToday = transactions
      .filter(t => {
        if (!t.createdAt) return false;
        const d = new Date(t.createdAt);
        return d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
      })
      .reduce((acc, t) => acc + (t.amount || 0), 0);

    const sumYesterday = transactions
      .filter(t => {
        if (!t.createdAt) return false;
        const d = new Date(t.createdAt);
        return d.getDate() === yesterday.getDate() && d.getMonth() === yesterday.getMonth() && d.getFullYear() === yesterday.getFullYear();
      })
      .reduce((acc, t) => acc + (t.amount || 0), 0);

    setAmount(sumToday);
    let diff = 0;
    if (sumYesterday > 0) diff = Math.round(((sumToday - sumYesterday) / sumYesterday) * 100);
    else if (sumToday > 0) diff = 100;
    setDiffFromYesterday(diff);
    setLoading(false);
  }, []);

  const today = new Date().toLocaleDateString('pt-BR', { weekday: 'short', day: '2-digit', month: 'short' });

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 8, padding: '24px 28px',
        fontFamily: "'DM Mono', 'Courier New', monospace",
        color: '#F0EEE6', transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,201,255,0.2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <div>
          <span style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,238,230,0.4)', display: 'block' }}>
            RECEITA DIÁRIA
          </span>
          <span style={{ fontSize: 10, color: 'rgba(240,238,230,0.2)', letterSpacing: '0.08em', marginTop: 2, display: 'block' }}>
            {today.toUpperCase()}
          </span>
        </div>
        <div style={{
          width: 28, height: 28, borderRadius: 4,
          background: 'rgba(0,201,255,0.08)', border: '1px solid rgba(0,201,255,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Calendar size={13} color="#00C9FF" />
        </div>
      </div>

      {loading ? <MetricCardSkeleton /> : (
        <>
          <div style={{
            fontSize: 28, fontWeight: 800,
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: '#00C9FF', letterSpacing: '-0.01em', marginBottom: 8,
          }}>
            {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
          <p style={{ fontSize: 11, color: 'rgba(240,238,230,0.35)', letterSpacing: '0.04em' }}>
            <span style={{ color: diffFromYesterday >= 0 ? '#00FFB2' : '#FF6B6B', fontWeight: 600 }}>
              {diffFromYesterday >= 0 ? '+' : ''}{diffFromYesterday}%
            </span>
            {' '}em relação à ontem
          </p>
        </>
      )}
    </div>
  );
}