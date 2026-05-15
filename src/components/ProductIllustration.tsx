type Palette = {
  bg: string;
  bgAccent: string;
  topLight: string;
  top: string;
  topDark: string;
  side: string;
  sideDark: string;
  topping: string;
  toppingDark: string;
};

export const palettes: Record<string, Palette> = {
  classic: {
    bg: "#fbf2dc",
    bgAccent: "#f0e0b8",
    topLight: "#f5d68a",
    top: "#e3b656",
    topDark: "#b88234",
    side: "#a8722a",
    sideDark: "#6e4815",
    topping: "#fff6dc",
    toppingDark: "#7a5018",
  },
  cocoa: {
    bg: "#eadccb",
    bgAccent: "#dac4a8",
    topLight: "#8b5a3c",
    top: "#5a3621",
    topDark: "#3a2113",
    side: "#3a2010",
    sideDark: "#1c0d05",
    topping: "#1a0904",
    toppingDark: "#0a0301",
  },
  "hazelnut-mocha": {
    bg: "#ecdcc4",
    bgAccent: "#d8c0a0",
    topLight: "#b58860",
    top: "#7d5530",
    topDark: "#503217",
    side: "#4a2c14",
    sideDark: "#2a1808",
    topping: "#c89a72",
    toppingDark: "#5a3414",
  },
  "apple-cinnamon": {
    bg: "#f6e0c8",
    bgAccent: "#e8c8a0",
    topLight: "#e09850",
    top: "#a96828",
    topDark: "#723e0e",
    side: "#6b3a10",
    sideDark: "#3e1f04",
    topping: "#f3c590",
    toppingDark: "#9c4d18",
  },
};

type Props = {
  slug: string;
  className?: string;
};

export default function ProductIllustration({ slug, className }: Props) {
  const p = palettes[slug] ?? palettes.classic;
  const id = slug.replace(/[^a-z0-9]/gi, "");

  return (
    <svg
      viewBox="0 0 400 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="휘낭시에 일러스트"
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.bg} />
          <stop offset="100%" stopColor={p.bgAccent} />
        </linearGradient>
        <linearGradient id={`top-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.topLight} />
          <stop offset="55%" stopColor={p.top} />
          <stop offset="100%" stopColor={p.topDark} />
        </linearGradient>
        <linearGradient id={`side-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.side} />
          <stop offset="100%" stopColor={p.sideDark} />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="0.5" cy="0.3" r="0.6">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="400" height="240" fill={`url(#bg-${id})`} />

      <g opacity="0.08">
        <circle cx="60" cy="50" r="22" fill={p.sideDark} />
        <circle cx="350" cy="200" r="28" fill={p.sideDark} />
      </g>

      <ellipse cx="200" cy="210" rx="135" ry="11" fill={p.sideDark} opacity="0.18" />

      <g>
        <path
          d="M68 198 L88 208 L312 208 L332 198 L332 142 L312 132 L88 132 L68 142 Z"
          fill={`url(#side-${id})`}
        />
        <path
          d="M68 142 L88 132 L312 132 L332 142 L312 152 L88 152 Z"
          fill={p.topDark}
          opacity="0.5"
        />
      </g>

      <g>
        <path
          d="M68 142 Q68 90, 105 84 L295 84 Q332 90, 332 142 Q332 152, 312 152 L88 152 Q68 152, 68 142 Z"
          fill={`url(#top-${id})`}
        />
        <path
          d="M88 92 Q88 88, 110 86 L290 86 Q312 88, 312 92 L312 110 Q200 100, 88 110 Z"
          fill="#ffffff"
          opacity="0.22"
        />
        <ellipse cx="200" cy="118" rx="125" ry="32" fill={`url(#glow-${id})`} />
      </g>

      {slug === "classic" ? (
        <g>
          <g fill={p.topping} opacity="0.95">
            <ellipse cx="140" cy="118" rx="7" ry="5" />
            <ellipse cx="175" cy="105" rx="6" ry="4" />
            <ellipse cx="220" cy="112" rx="7" ry="5" />
            <ellipse cx="265" cy="120" rx="6" ry="4" />
            <ellipse cx="195" cy="135" rx="5" ry="3.5" />
            <ellipse cx="240" cy="140" rx="6" ry="4" />
            <ellipse cx="155" cy="138" rx="5" ry="3.5" />
          </g>
          <g fill={p.toppingDark} opacity="0.45">
            <ellipse cx="142" cy="120" rx="2" ry="1.2" />
            <ellipse cx="222" cy="114" rx="2" ry="1.2" />
            <ellipse cx="267" cy="122" rx="1.8" ry="1" />
          </g>
        </g>
      ) : null}

      {slug === "cocoa" ? (
        <g>
          <g fill={p.topping}>
            <rect x="135" y="110" width="14" height="13" rx="2" />
            <rect x="165" y="98" width="12" height="12" rx="2" />
            <rect x="200" y="104" width="13" height="13" rx="2" />
            <rect x="240" y="108" width="13" height="13" rx="2" />
            <rect x="270" y="115" width="12" height="12" rx="2" />
            <rect x="155" y="135" width="11" height="11" rx="2" />
            <rect x="190" y="138" width="13" height="12" rx="2" />
            <rect x="225" y="135" width="11" height="11" rx="2" />
            <rect x="255" y="140" width="12" height="11" rx="2" />
          </g>
          <g fill="#ffffff" opacity="0.15">
            <rect x="136" y="111" width="6" height="2" rx="1" />
            <rect x="201" y="105" width="6" height="2" rx="1" />
            <rect x="241" y="109" width="6" height="2" rx="1" />
          </g>
        </g>
      ) : null}

      {slug === "hazelnut-mocha" ? (
        <g>
          <g>
            <ellipse cx="145" cy="112" rx="11" ry="9" fill={p.topping} />
            <ellipse cx="145" cy="110" rx="8" ry="6" fill={p.toppingDark} opacity="0.45" />
            <ellipse cx="143" cy="108" rx="3" ry="2" fill="#ffffff" opacity="0.5" />

            <ellipse cx="200" cy="100" rx="11" ry="9" fill={p.topping} />
            <ellipse cx="200" cy="98" rx="8" ry="6" fill={p.toppingDark} opacity="0.45" />
            <ellipse cx="198" cy="96" rx="3" ry="2" fill="#ffffff" opacity="0.5" />

            <ellipse cx="255" cy="114" rx="11" ry="9" fill={p.topping} />
            <ellipse cx="255" cy="112" rx="8" ry="6" fill={p.toppingDark} opacity="0.45" />
            <ellipse cx="253" cy="110" rx="3" ry="2" fill="#ffffff" opacity="0.5" />

            <ellipse cx="175" cy="140" rx="9" ry="7" fill={p.topping} />
            <ellipse cx="175" cy="139" rx="6" ry="5" fill={p.toppingDark} opacity="0.4" />

            <ellipse cx="225" cy="142" rx="9" ry="7" fill={p.topping} />
            <ellipse cx="225" cy="141" rx="6" ry="5" fill={p.toppingDark} opacity="0.4" />
          </g>
          <g fill={p.sideDark} opacity="0.3">
            <circle cx="160" cy="120" r="1" />
            <circle cx="215" cy="125" r="1" />
            <circle cx="240" cy="135" r="1" />
            <circle cx="190" cy="128" r="1" />
          </g>
        </g>
      ) : null}

      {slug === "apple-cinnamon" ? (
        <g>
          <g>
            <path
              d="M140 115 Q146 102, 158 106 Q166 112, 162 124 Q150 128, 140 122 Z"
              fill={p.topping}
            />
            <path
              d="M142 110 Q148 105, 156 108"
              stroke="#ffffff"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              fill="none"
            />

            <path
              d="M188 100 Q200 95, 215 104 Q220 118, 208 122 Q195 120, 188 110 Z"
              fill={p.topping}
            />
            <path
              d="M191 102 Q200 98, 212 105"
              stroke="#ffffff"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              fill="none"
            />

            <path
              d="M240 112 Q252 105, 264 115 Q266 128, 254 130 Q244 126, 240 118 Z"
              fill={p.topping}
            />
            <path
              d="M242 113 Q252 108, 262 116"
              stroke="#ffffff"
              strokeOpacity="0.5"
              strokeWidth="1.5"
              fill="none"
            />
          </g>
          <g fill={p.toppingDark} opacity="0.6">
            <circle cx="170" cy="138" r="1.4" />
            <circle cx="185" cy="146" r="1.2" />
            <circle cx="200" cy="140" r="1.4" />
            <circle cx="215" cy="148" r="1.2" />
            <circle cx="230" cy="142" r="1.4" />
            <circle cx="155" cy="142" r="1" />
            <circle cx="245" cy="145" r="1" />
            <circle cx="195" cy="135" r="1" />
          </g>
        </g>
      ) : null}
    </svg>
  );
}
