export function MetricCardSkeleton() {
  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .sym-shimmer {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 25%,
            rgba(255,255,255,0.09) 50%,
            rgba(255,255,255,0.04) 75%
          );
          background-size: 200% 100%;
          animation: shimmer 1.6s infinite;
          border-radius: 4px;
        }
      `}</style>
      <div className="sym-shimmer" style={{ height: 28, width: 144, marginBottom: 10 }} />
      <div className="sym-shimmer" style={{ height: 13, width: 200 }} />
    </>
  )
}