import { TrendingUp } from "lucide-react";
import { getTransactions } from "@/db/transactions-local";
import React from "react";
import { MetricCardSkeleton } from "./metric-card-skeleton";

export function MonthOrdersAmountCard() {
  const [amount, setAmount] = React.useState(0);
  const [diffFromLastMonth, setDiffFromLastMonth] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const transactions = getTransactions();
    const today = new Date();
    const currentMonth = today.getMonth();
    const currentYear = today.getFullYear();

    const sumCurrentMonth = transactions
      .filter(t => {
        if (!t.createdAt || t.type !== true) return false;
        const d = new Date(t.createdAt);
        return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
      })
      .reduce((acc, t) => acc + (t.amount || 0), 0);

    const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

    const sumLastMonth = transactions
      .filter(t => {
        if (!t.createdAt || t.type !== true) return false;
        const d = new Date(t.createdAt);
        return d.getMonth() === lastMonth && d.getFullYear() === lastMonthYear;
      })
      .reduce((acc, t) => acc + (t.amount || 0), 0);

    setAmount(sumCurrentMonth);
    let diff = 0;
    if (sumLastMonth > 0) diff = Math.round(((sumCurrentMonth - sumLastMonth) / sumLastMonth) * 100);
    else if (sumCurrentMonth > 0) diff = 100;
    setDiffFromLastMonth(diff);
    setLoading(false);
  }, []);

  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.025)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: 8, padding: '24px 28px',
        fontFamily: "'DM Mono', 'Courier New', monospace",
        color: '#F0EEE6', transition: 'border-color 0.2s',
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(0,255,178,0.2)')}
      onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)')}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,238,230,0.4)' }}>
          RECEITA DO MÊS
        </span>
        <div style={{
          width: 28, height: 28, borderRadius: 4,
          background: 'rgba(0,255,178,0.08)', border: '1px solid rgba(0,255,178,0.15)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <TrendingUp size={13} color="#00FFB2" />
        </div>
      </div>

      {loading ? <MetricCardSkeleton /> : (
        <>
          <div style={{
            fontSize: 28, fontWeight: 800,
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: '#00FFB2', letterSpacing: '-0.01em', marginBottom: 8,
          }}>
            {amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
          </div>
          <p style={{ fontSize: 11, color: 'rgba(240,238,230,0.35)', letterSpacing: '0.04em' }}>
            <span style={{ color: diffFromLastMonth >= 0 ? '#00FFB2' : '#FF6B6B', fontWeight: 600 }}>
              {diffFromLastMonth >= 0 ? '+' : ''}{diffFromLastMonth}%
            </span>
            {' '}em relação ao mês passado
          </p>
        </>
      )}
    </div>
  );
}