"use client"

import * as React from "react"
import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts"
import { getTransactions } from "@/db/transactions-local"

const METHOD_CONFIG: Record<string, { label: string; color: string; dim: string }> = {
  debit:  { label: 'Débito',    color: '#00C9FF', dim: 'rgba(0,201,255,0.15)' },
  credit: { label: 'Crédito',   color: '#7B61FF', dim: 'rgba(123,97,255,0.15)' },
  pix:    { label: 'PIX',       color: '#00FFB2', dim: 'rgba(0,255,178,0.15)' },
  money:  { label: 'Dinheiro',  color: '#FFD600', dim: 'rgba(255,214,0,0.15)' },
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CustomTooltip({ active, payload }: any) {
  if (!active || !payload?.length) return null
  const d = payload[0]
  const cfg = METHOD_CONFIG[d.name] ?? { label: d.name, color: '#F0EEE6' }
  return (
    <div style={{
      background: '#0e0e1a', border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 6, padding: '10px 14px',
      fontFamily: "'DM Mono', monospace", fontSize: 12,
    }}>
      <span style={{ color: cfg.color, fontWeight: 600, letterSpacing: '0.08em' }}>
        {cfg.label}
      </span>
      <span style={{ color: 'rgba(240,238,230,0.45)', marginLeft: 10 }}>
        {d.value} uso{d.value !== 1 ? 's' : ''}
      </span>
    </div>
  )
}

export function PopularProductsChart() {
  const [chartData, setChartData] = React.useState<{ method: string; value: number }[]>([])

  React.useEffect(() => {
    const transactions = getTransactions()
    const counts: Record<string, number> = {}
    for (const t of transactions) {
      if (t.method) counts[t.method] = (counts[t.method] || 0) + 1
    }
    setChartData(Object.entries(counts).map(([method, value]) => ({ method, value })))
  }, [])

  const total = React.useMemo(() => chartData.reduce((acc, c) => acc + c.value, 0), [chartData])

  const topMethod = chartData.length > 0
    ? chartData.reduce((max, c) => c.value > max.value ? c : max, chartData[0])
    : null

  return (
    <div style={{
      width: 340,
      background: 'rgba(255,255,255,0.025)',
      border: '1px solid rgba(255,255,255,0.07)',
      borderRadius: 8,
      fontFamily: "'DM Mono', 'Courier New', monospace",
      color: '#F0EEE6',
      overflow: 'hidden',
      flexShrink: 0,
    }}>
      {/* Header */}
      <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', color: 'rgba(240,238,230,0.4)', marginBottom: 4 }}>
          MÉTODOS DE PAGAMENTO
        </div>
        <div style={{
          fontSize: 16, fontWeight: 700,
          fontFamily: "'DM Serif Display', Georgia, serif",
        }}>
          Distribuição do mês
        </div>
      </div>

      {/* Chart */}
      <div style={{ padding: '16px 0 8px', position: 'relative' }}>
        {chartData.length === 0 ? (
          <div style={{
            height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexDirection: 'column', gap: 10,
          }}>
            <div style={{ fontSize: 28, opacity: 0.2 }}>◎</div>
            <span style={{ fontSize: 11, letterSpacing: '0.1em', color: 'rgba(240,238,230,0.25)' }}>
              SEM TRANSAÇÕES
            </span>
          </div>
        ) : (
          <div style={{ position: 'relative' }}>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Tooltip content={<CustomTooltip />} />
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="method"
                  innerRadius={56}
                  outerRadius={80}
                  strokeWidth={0}
                  paddingAngle={3}
                >
                  {chartData.map(entry => (
                    <Cell
                      key={entry.method}
                      fill={METHOD_CONFIG[entry.method]?.color ?? '#F0EEE6'}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>

            {/* Center label */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center', pointerEvents: 'none',
            }}>
              <div style={{
                fontSize: 26, fontWeight: 800,
                fontFamily: "'DM Serif Display', Georgia, serif",
                color: '#F0EEE6', lineHeight: 1,
              }}>
                {total}
              </div>
              <div style={{ fontSize: 9, letterSpacing: '0.1em', color: 'rgba(240,238,230,0.35)', marginTop: 4 }}>
                PAGAMENTOS
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div style={{ padding: '8px 24px 20px', display: 'flex', flexDirection: 'column', gap: 8 }}>
        {Object.entries(METHOD_CONFIG).map(([key, cfg]) => {
          const found = chartData.find(d => d.method === key)
          const count = found?.value ?? 0
          const pct = total > 0 ? Math.round((count / total) * 100) : 0
          return (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: cfg.color, flexShrink: 0,
              }} />
              <span style={{ flex: 1, fontSize: 11, color: 'rgba(240,238,230,0.55)', letterSpacing: '0.06em' }}>
                {cfg.label.toUpperCase()}
              </span>
              <span style={{ fontSize: 11, color: cfg.color, fontWeight: 600 }}>
                {pct}%
              </span>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      {topMethod && (
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          padding: '14px 24px',
          display: 'flex', alignItems: 'center', gap: 8,
        }}>
          <span style={{ fontSize: 10, letterSpacing: '0.1em', color: 'rgba(240,238,230,0.3)' }}>
            MAIS USADO:
          </span>
          <span style={{
            fontSize: 11, fontWeight: 700, letterSpacing: '0.08em',
            color: METHOD_CONFIG[topMethod.method]?.color ?? '#F0EEE6',
          }}>
            {METHOD_CONFIG[topMethod.method]?.label ?? topMethod.method}
          </span>
          <span style={{ fontSize: 10, color: 'rgba(240,238,230,0.25)', marginLeft: 'auto' }}>
            {topMethod.value} uso{topMethod.value !== 1 ? 's' : ''}
          </span>
        </div>
      )}
    </div>
  )
}