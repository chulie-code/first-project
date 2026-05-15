import { palettes } from "./ProductIllustration";

type Props = {
  count: 4 | 8;
  className?: string;
};

const flavorOrder = ["classic", "cocoa", "hazelnut-mocha", "apple-cinnamon"] as const;
type FlavorSlug = (typeof flavorOrder)[number];

type MiniFinancierProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  slug: FlavorSlug;
  uid: string;
};

function MiniFinancier({ x, y, w, h, slug, uid }: MiniFinancierProps) {
  const p = palettes[slug];
  const gid = `mini-top-${uid}`;
  const sid = `mini-side-${uid}`;
  const r = Math.min(w, h) * 0.12;

  return (
    <g>
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.topLight} />
          <stop offset="55%" stopColor={p.top} />
          <stop offset="100%" stopColor={p.topDark} />
        </linearGradient>
        <linearGradient id={sid} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.side} />
          <stop offset="100%" stopColor={p.sideDark} />
        </linearGradient>
      </defs>

      <ellipse
        cx={x + w / 2}
        cy={y + h + 3}
        rx={w * 0.42}
        ry={3}
        fill="#000000"
        opacity="0.18"
      />

      <rect
        x={x}
        y={y + h * 0.7}
        width={w}
        height={h * 0.22}
        rx={r * 0.5}
        fill={`url(#${sid})`}
      />

      <rect
        x={x}
        y={y}
        width={w}
        height={h * 0.78}
        rx={r}
        fill={`url(#${gid})`}
      />

      <rect
        x={x + w * 0.08}
        y={y + h * 0.08}
        width={w * 0.84}
        height={h * 0.18}
        rx={r * 0.6}
        fill="#ffffff"
        opacity="0.25"
      />

      {slug === "classic" ? (
        <g fill={p.topping} opacity="0.95">
          <circle cx={x + w * 0.28} cy={y + h * 0.4} r={w * 0.04} />
          <circle cx={x + w * 0.55} cy={y + h * 0.35} r={w * 0.035} />
          <circle cx={x + w * 0.75} cy={y + h * 0.45} r={w * 0.04} />
          <circle cx={x + w * 0.42} cy={y + h * 0.55} r={w * 0.03} />
        </g>
      ) : null}

      {slug === "cocoa" ? (
        <g fill={p.topping}>
          <rect x={x + w * 0.25} y={y + h * 0.32} width={w * 0.08} height={w * 0.08} rx={1} />
          <rect x={x + w * 0.5} y={y + h * 0.28} width={w * 0.075} height={w * 0.075} rx={1} />
          <rect x={x + w * 0.72} y={y + h * 0.35} width={w * 0.08} height={w * 0.08} rx={1} />
          <rect x={x + w * 0.38} y={y + h * 0.55} width={w * 0.07} height={w * 0.07} rx={1} />
          <rect x={x + w * 0.6} y={y + h * 0.55} width={w * 0.075} height={w * 0.075} rx={1} />
        </g>
      ) : null}

      {slug === "hazelnut-mocha" ? (
        <g>
          <ellipse cx={x + w * 0.3} cy={y + h * 0.4} rx={w * 0.06} ry={w * 0.045} fill={p.topping} />
          <ellipse cx={x + w * 0.55} cy={y + h * 0.33} rx={w * 0.06} ry={w * 0.045} fill={p.topping} />
          <ellipse cx={x + w * 0.78} cy={y + h * 0.42} rx={w * 0.06} ry={w * 0.045} fill={p.topping} />
          <ellipse cx={x + w * 0.43} cy={y + h * 0.58} rx={w * 0.05} ry={w * 0.04} fill={p.topping} />
        </g>
      ) : null}

      {slug === "apple-cinnamon" ? (
        <g>
          <path
            d={`M ${x + w * 0.25} ${y + h * 0.4}
                Q ${x + w * 0.3} ${y + h * 0.3}, ${x + w * 0.38} ${y + h * 0.36}
                Q ${x + w * 0.4} ${y + h * 0.48}, ${x + w * 0.3} ${y + h * 0.5} Z`}
            fill={p.topping}
          />
          <path
            d={`M ${x + w * 0.55} ${y + h * 0.36}
                Q ${x + w * 0.62} ${y + h * 0.28}, ${x + w * 0.7} ${y + h * 0.36}
                Q ${x + w * 0.72} ${y + h * 0.48}, ${x + w * 0.6} ${y + h * 0.5} Z`}
            fill={p.topping}
          />
          <g fill={p.toppingDark} opacity="0.55">
            <circle cx={x + w * 0.45} cy={y + h * 0.55} r={w * 0.012} />
            <circle cx={x + w * 0.78} cy={y + h * 0.55} r={w * 0.012} />
            <circle cx={x + w * 0.5} cy={y + h * 0.62} r={w * 0.012} />
            <circle cx={x + w * 0.65} cy={y + h * 0.62} r={w * 0.012} />
          </g>
        </g>
      ) : null}
    </g>
  );
}

export default function BoxIllustration({ count, className }: Props) {
  const cols = count === 4 ? 2 : 4;
  const rows = count === 4 ? 2 : 2;

  const padX = 50;
  const padY = 40;
  const gridW = 400 - padX * 2;
  const gridH = 240 - padY * 2;
  const cellW = gridW / cols;
  const cellH = gridH / rows;

  const itemW = cellW * 0.78;
  const itemH = cellH * 0.68;

  const items: { slug: FlavorSlug; x: number; y: number }[] = [];
  for (let i = 0; i < count; i++) {
    const c = i % cols;
    const r = Math.floor(i / cols);
    const cx = padX + c * cellW + cellW / 2;
    const cy = padY + r * cellH + cellH / 2;
    items.push({
      slug: flavorOrder[i % flavorOrder.length],
      x: cx - itemW / 2,
      y: cy - itemH / 2,
    });
  }

  return (
    <svg
      viewBox="0 0 400 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={`${count}입 박스 세트 일러스트`}
      className={className}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`box-bg-${count}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0e4cc" />
          <stop offset="100%" stopColor="#dcc9a4" />
        </linearGradient>
        <linearGradient id={`box-inner-${count}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8d8b8" />
          <stop offset="100%" stopColor="#d4bd91" />
        </linearGradient>
      </defs>

      <rect width="400" height="240" fill={`url(#box-bg-${count})`} />

      <g>
        <rect
          x="22"
          y="20"
          width="356"
          height="200"
          rx="14"
          fill={`url(#box-inner-${count})`}
          stroke="#9c7d4b"
          strokeOpacity="0.4"
          strokeWidth="2"
        />
        <rect
          x="32"
          y="30"
          width="336"
          height="180"
          rx="8"
          fill="none"
          stroke="#9c7d4b"
          strokeOpacity="0.18"
          strokeWidth="1"
        />
      </g>

      {items.map((it, i) => (
        <MiniFinancier
          key={i}
          x={it.x}
          y={it.y}
          w={itemW}
          h={itemH}
          slug={it.slug}
          uid={`${count}-${i}`}
        />
      ))}

      <g
        fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
        fontSize="9"
        fill="#7a5a2c"
        opacity="0.6"
      >
        <text x="200" y="232" textAnchor="middle" letterSpacing="2">
          {count} PIECES · 황금조각
        </text>
      </g>
    </svg>
  );
}
