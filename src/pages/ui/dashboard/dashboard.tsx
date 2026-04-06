import React from "react";
import { MonthRevenueCard } from "./cards/month-revenue";
import { MonthOrdersAmountCard } from "./cards/month-earnings";
import { DayOrdersAmountCard } from "./cards/amount-day";
import { MonthCanceledOrdersAmountCard } from "./cards/month-expenses";
import { RevenueChart } from "./charts/revenue-chart";
import { PopularProductsChart } from "./charts/method-popular";

function DashboardSkeleton() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#080810',
      backgroundImage: `
        linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      padding: '48px',
      fontFamily: "'DM Mono', monospace",
    }}>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .sym-sk {
          background: linear-gradient(90deg, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 75%);
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
          border-radius: 4px;
        }
      `}</style>

      <div className="sym-sk" style={{ height: 16, width: 120, marginBottom: 8 }} />
      <div className="sym-sk" style={{ height: 40, width: 280, marginBottom: 48 }} />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        {[...Array(4)].map((_, i) => (
          <div key={i} style={{
            height: 120,
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 8,
          }} />
        ))}
      </div>

      <div style={{ display: 'flex', gap: 16 }}>
        <div style={{
          flex: 1, height: 320,
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 8,
        }} />
        <div style={{
          width: 340, height: 320,
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.06)',
          borderRadius: 8,
        }} />
      </div>
    </div>
  )
}

export function Dashboard() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <DashboardSkeleton />;

  const now = new Date();

  return (
    <div style={{
      minHeight: '100vh',
      background: '#080810',
      backgroundImage: `
        linear-gradient(rgba(0,255,178,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,255,178,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '60px 60px',
      padding: '48px',
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: '#F0EEE6',
    }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=DM+Mono:wght@300;400;500;700&display=swap');`}</style>

      {/* Page header */}
      <div style={{ marginBottom: 40 }}>
        <div className="mt-8" style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'rgba(0,255,178,0.06)', border: '1px solid rgba(0,255,178,0.15)',
          borderRadius: 100, padding: '5px 14px', fontSize: 11,
          letterSpacing: '0.12em', color: '#00FFB2', marginBottom: 16,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00FFB2', display: 'inline-block' }} />
          DASHBOARD
        </div>
        <p style={{ fontSize: 12, color: 'rgba(240,238,230,0.35)', letterSpacing: '0.06em' }}>
          {now.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).toUpperCase()}
        </p>
      </div>

      {/* Metric cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 24 }}>
        <MonthRevenueCard />
        <MonthOrdersAmountCard />
        <MonthCanceledOrdersAmountCard />
        <DayOrdersAmountCard />
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '8px 0 24px' }} />

      {/* Charts */}
      <div style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
        <RevenueChart />
        <PopularProductsChart />
      </div>
    </div>
  );
}