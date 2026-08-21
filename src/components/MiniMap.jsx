import { mapsUrl, siteCoordinates } from "../site";
import { useT } from "../i18n";

export default function MiniMap() {
  const t = useT();

  return (
    <a
      className="mini-map"
      href={mapsUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={t.miniMapAriaLabel}
    >
      <div className="mini-map__frame">
        <svg
          viewBox="0 0 600 440"
          className="mini-map__svg"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <defs>
            {/* Ambient Pin Glow */}
            <radialGradient id="pin-radiance" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#dcc0aa" stopOpacity="0.4" />
              <stop offset="35%" stopColor="#5e0a19" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#480713" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#080103" stopOpacity="0" />
            </radialGradient>

            {/* Park Tint */}
            <linearGradient id="park-tone" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgba(32, 42, 28, 0.45)" />
              <stop offset="100%" stopColor="rgba(18, 25, 16, 0.25)" />
            </linearGradient>

            {/* Drifting light band */}
            <linearGradient id="sweep" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(220, 192, 170, 0)" />
              <stop offset="50%" stopColor="rgba(220, 192, 170, 0.07)" />
              <stop offset="100%" stopColor="rgba(220, 192, 170, 0)" />
            </linearGradient>

            {/* Main Avenue Gradient */}
            <linearGradient id="avenue-gold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(220, 192, 170, 0.3)" />
              <stop offset="50%" stopColor="#dcc0aa" />
              <stop offset="100%" stopColor="rgba(220, 192, 170, 0.3)" />
            </linearGradient>
          </defs>

          {/* Map Base Canvas */}
          <rect width="600" height="440" fill="#080103" />

          {/* Minimal Coordinate Grid */}
          <g stroke="rgba(220, 192, 170, 0.04)" strokeWidth="0.75" strokeDasharray="3 9">
            <line x1="150" y1="0" x2="150" y2="440" />
            <line x1="330" y1="0" x2="330" y2="440" />
            <line x1="480" y1="0" x2="480" y2="440" />
            <line x1="0" y1="110" x2="600" y2="110" />
            <line x1="0" y1="220" x2="600" y2="220" />
            <line x1="0" y1="330" x2="600" y2="330" />
          </g>

          {/* Parc de Ramon Barnils */}
          <polygon
            points="180,260 360,250 380,340 220,355 170,305"
            fill="url(#park-tone)"
            stroke="rgba(120, 160, 110, 0.2)"
            strokeWidth="0.8"
          />

          {/* Parc del Pla del Vinyet green patch */}
          <polygon
            points="380,80 480,55 510,130 420,145"
            fill="url(#park-tone)"
            stroke="rgba(120, 160, 110, 0.15)"
            strokeWidth="0.8"
          />

          {/* Secondary Grid Lines */}
          <g stroke="rgba(220, 192, 170, 0.1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
            <path d="M 170,60 L 190,200 L 210,380" />
            <path d="M 90,90 L 115,240 L 130,390" />
            <path d="M 30,290 L 180,270 L 380,255" />
            <path d="M 460,40 L 480,200 L 500,390" />
            <path d="M 340,20 L 355,160 L 375,390" />
            <path d="M 200,145 L 340,130 L 480,110" />
            <path d="M 180,320 L 400,300 L 560,285" />
          </g>

          {/* Avenues & Arterials */}
          <g fill="none" strokeLinecap="round" strokeLinejoin="round">
            {/* Rambla del Celler */}
            <path
              d="M 0,300 L 180,270 L 400,245 L 600,220"
              stroke="rgba(72, 7, 19, 0.85)"
              strokeWidth="9"
            />
            <path
              d="M 0,300 L 180,270 L 400,245 L 600,220"
              stroke="rgba(220, 192, 170, 0.22)"
              strokeWidth="3.5"
            />

            {/* Av. de les Corts Catalanes */}
            <path
              d="M 500,0 L 525,180 L 555,440"
              stroke="rgba(72, 7, 19, 0.75)"
              strokeWidth="8"
            />
            <path
              d="M 500,0 L 525,180 L 555,440"
              stroke="rgba(220, 192, 170, 0.2)"
              strokeWidth="3"
            />

            {/* Av. de Torreblanca */}
            <path
              d="M 130,80 L 330,55 L 600,20"
              stroke="rgba(220, 192, 170, 0.18)"
              strokeWidth="3"
            />

            {/* === MAIN: AVINGUDA DEL PLA DEL VINYET === */}
            <path
              d="M 40,140 L 210,170 L 330,190 L 460,210 L 600,238"
              stroke="rgba(94, 10, 25, 0.9)"
              strokeWidth="14"
            />
            <path
              d="M 40,140 L 210,170 L 330,190 L 460,210 L 600,238"
              stroke="url(#avenue-gold)"
              strokeWidth="5"
            />
          </g>

          {/* FGC Railway Line */}
          <path
            d="M 0,380 C 60,370 100,340 135,300 C 160,265 175,200 190,140 C 205,75 220,15 230,0"
            stroke="rgba(220, 192, 170, 0.16)"
            strokeWidth="2.5"
            strokeDasharray="3 3"
            fill="none"
          />

          {/* Street Typography */}
          <g className="mini-map__labels">
            {/* Av. del Pla del Vinyet */}
            <g transform="translate(130, 155) rotate(9)">
              <text x="0" y="0" className="mini-map__label mini-map__label--main">
                AV. DEL PLA DEL VINYET
              </text>
            </g>

            {/* Rambla del Celler */}
            <g transform="translate(230, 258) rotate(-6)">
              <text x="0" y="0" className="mini-map__label">RAMBLA DEL CELLER</text>
            </g>

            {/* Av. Corts Catalanes */}
            <g transform="translate(538, 230) rotate(82)">
              <text x="0" y="0" className="mini-map__label">AV. CORTS CATALANES</text>
            </g>
          </g>

          {/* Minimal Landmark Anchors */}
          {/* FGC Sant Cugat Station */}
          <g transform="translate(125, 315)">
            <circle cx="0" cy="0" r="3" fill="none" stroke="#dcc0aa" strokeWidth="1" />
            <circle cx="0" cy="0" r="1.2" fill="#dcc0aa" />
            <text x="8" y="3" className="mini-map__landmark">FGC</text>
          </g>

          {/* Parking Pla del Vinyet */}
          <g transform="translate(275, 215)">
            <rect x="-6" y="-6" width="12" height="12" rx="2" fill="#480713" stroke="rgba(220,192,170,0.4)" strokeWidth="0.8" />
            <text x="0" y="3" textAnchor="middle" fill="#dcc0aa" fontSize="7" fontFamily="sans-serif">P</text>
          </g>

          {/* === VENUE PIN: LA OCTAVA (330, 190) === */}
          <g className="mini-map__pin" transform="translate(330, 190)">
            {/* Radiance aura */}
            <circle cx="0" cy="0" r="50" fill="url(#pin-radiance)" />

            {/* Two radar pulses, one trailing the other */}
            <circle cx="0" cy="0" r="16" fill="none" stroke="#dcc0aa" strokeWidth="0.8" className="mini-map__pulse" />
            <circle
              cx="0"
              cy="0"
              r="16"
              fill="none"
              stroke="#dcc0aa"
              strokeWidth="0.8"
              className="mini-map__pulse mini-map__pulse--trail"
            />

            {/* Pin Center */}
            <circle cx="0" cy="0" r="8" fill="#480713" stroke="#dcc0aa" strokeWidth="1.5" />
            <circle cx="0" cy="0" r="2.5" fill="#f0e3d8" />

            {/* Floating Minimal Callout Badge */}
            <g transform="translate(0, -18)">
              <rect
                x="-58"
                y="-26"
                width="116"
                height="24"
                rx="2"
                fill="#050102"
                stroke="#dcc0aa"
                strokeWidth="1"
              />
              <polygon points="-4,-2 4,-2 0,3" fill="#050102" stroke="#dcc0aa" strokeWidth="0.8" />
              <rect x="-2.5" y="-3" width="5" height="1.5" fill="#050102" />
              <text x="0" y="-14" textAnchor="middle" className="mini-map__pin-title">
                LA OCTAVA
              </text>
              <text x="0" y="-5" textAnchor="middle" className="mini-map__pin-sub">
                No. 57
              </text>
            </g>
          </g>

          {/* A slow band of light drifting across the plate */}
          <rect
            x="-160"
            y="0"
            width="160"
            height="440"
            fill="url(#sweep)"
            className="mini-map__sweep"
          />
        </svg>

        {/* Minimal Footer Strip */}
        <div className="mini-map__meta">
          <span className="mini-map__coords">{siteCoordinates.display}</span>
          <span className="mini-map__cta">
            {t.miniMapOpenMaps}
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  );
}
