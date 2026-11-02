/** Decorative animated truck driving along a gold road line (pure SVG + CSS). */
export default function TruckRoad() {
  return (
    <div aria-hidden="true" className="relative h-24 w-full overflow-hidden">
      <div className="absolute inset-x-0 bottom-3 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
      <div
        className="absolute inset-x-0 bottom-0 h-[2px] opacity-60"
        style={{
          backgroundImage: "repeating-linear-gradient(90deg,#ffc83d 0 22px,transparent 22px 44px)",
        }}
      />
      <div className="animate-drive absolute bottom-3 left-0">
        <svg width="150" height="70" viewBox="0 0 150 70" fill="none">
          {/* speed lines */}
          <g stroke="#FFC83D" strokeWidth="3" strokeLinecap="round">
            <path d="M0 24h24" opacity=".9" />
            <path d="M6 34h22" opacity=".7" />
            <path d="M0 44h26" opacity=".5" />
          </g>
          {/* cargo box */}
          <rect x="30" y="10" width="68" height="44" rx="4" fill="#D61F1F" stroke="#FFC83D" strokeWidth="2" />
          <rect x="40" y="26" width="16" height="16" rx="1.5" fill="#E7A94B" />
          <rect x="58" y="30" width="14" height="12" rx="1.5" fill="#F3BC62" />
          <rect x="48" y="16" width="14" height="10" rx="1.5" fill="#F3BC62" />
          {/* cab */}
          <path d="M98 22h22l14 16v16H98z" fill="#F8FAFC" />
          <path d="M104 26h13l9 11h-22z" fill="#1B2F9A" />
          {/* chassis */}
          <rect x="30" y="52" width="104" height="6" rx="2" fill="#0A1450" />
          {/* wheels */}
          <g>
            <circle cx="52" cy="58" r="9" fill="#111" stroke="#FFC83D" strokeWidth="2" />
            <circle cx="52" cy="58" r="3" fill="#FFC83D" />
            <circle cx="118" cy="58" r="9" fill="#111" stroke="#FFC83D" strokeWidth="2" />
            <circle cx="118" cy="58" r="3" fill="#FFC83D" />
          </g>
        </svg>
      </div>
    </div>
  );
}
