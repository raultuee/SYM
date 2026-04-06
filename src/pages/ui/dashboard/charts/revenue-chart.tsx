"use client"

import * as React from "react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"
import { getTransactions } from "@/db/transactions-local"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getDailySums(transactions: any[]) {
  const map: Record<string, { entrada: number; saida: number }> = {}
  transactions.forEach(t => {
    if (!t.createdAt) return
    const key = new Date(t.createdAt).toISOString().slice(0, 10)
    if (!map[key]) map[key] = { entrada: 0, saida: 0 }
    if (t.type === true) map[key].entrada += t.amount || 0
    else if (t.type === false) map[key].saida += t.amount || 0
  })
  return Object.entries(map)
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([date, v]) => ({ date, entrada: v.entrada, saida: v.saida }))
}

const fmt = (v: number) => new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', notation: 'compact' }).format(v)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload, label }: any) {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 6, padding: '12px 16px',
      fontFamily: "'DM Mono', monospace", fontSize: 12, color: '#F0EEE6',
    }}>
      <div style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(240,238,230,0.4)', marginBottom: 8 }}>
        {new Date(label).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' }).toUpperCase()}
      </div>
      {payload.map((p: { name: string; value: number; color: string }) => (
        <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, display: 'inline-block' }} />
          <span style={{ color: 'rgba(240,238,230,0.5)', textTransform: 'uppercase', fontSize: 10, letterSpacing: '0.08em' }}>
            {p.name}:
          </span>
          <span style={{ fontWeight: 600, color: p.color }}>
            {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(p.value)}
          </span>
        </div>
      ))}
    </div>
  )
}

export function RevenueChart() {
  const [activeChart, setActiveChart] = React.useState<'entrada' | 'saida'>('entrada')
  const [chartData, setChartData] = React.useState<{ date: string; entrada: number; saida: number }[]>([])

  React.useEffect(() => {
    setChartData(getDailySums(getTransactions()))
  }, [])

  const total = React.useMemo(() => ({
    entrada: chartData.reduce((acc, c) => acc + c.entrada, 0),
    saida: chartData.reduce((acc, c) => acc + c.saida, 0),
  }), [chartData])

  const tabs: { key: 'entrada' | 'saida'; label: string; color: string; dimColor: string }[] = [
    { key: 'entrada', label: 'ENTRADAS', color: '#00FFB2', dimColor: 'rgba(0,255,178,0.08)' },
    { key: 'saida', label: 'SAÍDAS', color: '#FF6B6B', dimColor: 'rgba(255,107,107,0.08)' },
  ]

  const activeColor = activeChart === 'entrada' ? '#00FFB2' : '#FF6B6B'

  return (
    <div style={{
      flex: 1,
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 8,
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: '#F0EEE6',
      overflow: 'hidden',
    }}>

      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'stretch',
        borderBottom: '1px solid rgba(255,255,255,0.07)',
      }}>
        <div style={{ flex: 1, padding: '20px 24px' }}>
          <div style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,238,230,0.4)', marginBottom: 4 }}>
            GRÁFICO DE TRANSAÇÕES
          </div>
          <div style={{
            fontSize: 16, fontWeight: 700,
            fontFamily: "'DM Serif Display', Georgia, serif",
            color: '#F0EEE6',
          }}>
            Visão geral do período
          </div>
        </div>

        {/* Tab toggles */}
        <div style={{ display: 'flex', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveChart(tab.key)}
              style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                gap: 4, padding: '16px 28px', cursor: 'pointer', border: 'none',
                borderLeft: tab.key === 'saida' ? '1px solid rgba(255,255,255,0.07)' : 'none',
                background: activeChart === tab.key ? tab.dimColor : 'transparent',
                transition: 'background 0.2s',
              }}
            >
              <span style={{
                fontSize: 10, letterSpacing: '0.12em',
                color: activeChart === tab.key ? tab.color : 'rgba(240,238,230,0.3)',
                transition: 'color 0.2s',
              }}>
                {tab.label}
              </span>
              <span style={{
                fontSize: 20, fontWeight: 800,
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: activeChart === tab.key ? tab.color : 'rgba(240,238,230,0.5)',
                transition: 'color 0.2s',
                letterSpacing: '-0.01em',
              }}>
                {fmt(total[tab.key])}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div style={{ padding: '24px 16px 16px' }}>
        {chartData.length === 0 ? (
          <div style={{
            height: 250, display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 12,
          }}>
            <div style={{ fontSize: 32, opacity: 0.2 }}>◎</div>
            <span style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,238,230,0.25)' }}>
              NENHUM DADO DISPONÍVEL
            </span>
          </div>
        ) : (
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={chartData} margin={{ left: 8, right: 8, top: 8, bottom: 0 }}>
              <CartesianGrid
                vertical={false}
                stroke="rgba(255,255,255,0.05)"
                strokeDasharray="4 4"
              />
              <XAxis
                dataKey="date"
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'rgba(240,238,230,0.25)', fontSize: 10, fontFamily: "'DM Mono', monospace", letterSpacing: '0.06em' }}
                tickMargin={10}
                minTickGap={40}
                tickFormatter={v => new Date(v).toLocaleDateString('pt-BR', { month: 'short', day: 'numeric' }).toUpperCase()}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'rgba(240,238,230,0.25)', fontSize: 10, fontFamily: "'DM Mono', monospace" }}
                tickFormatter={fmt}
                width={60}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.08)', strokeWidth: 1 }} />
              <Line
                dataKey={activeChart}
                type="monotone"
                stroke={activeColor}
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: activeColor, stroke: '#080810', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        )}
      </div>
    </div>
  )
}