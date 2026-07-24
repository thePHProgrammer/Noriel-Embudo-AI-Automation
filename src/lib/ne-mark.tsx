export const NE_MARK_VIEWBOX = "0 0 110 110";

/**
 * Hand-authored "NE" monogram: N and E share a vertical spine so the two
 * letters interlock into one mark, with a trailing node+connector motif
 * echoing the site's automation/workflow theme. Used for the on-page logo
 * and, via next/og ImageResponse (which renders a Satori-supported SVG
 * subset), for icon.svg / apple-icon / opengraph-image.
 */
export function NEMarkShapes({
  id = "ne-mark",
  simplified = false,
}: {
  id?: string;
  simplified?: boolean;
}) {
  const fill = `url(#${id}-gradient)`;
  return (
    <>
      <defs>
        <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4F7CFF" />
          <stop offset="100%" stopColor="#9B5DFF" />
        </linearGradient>
      </defs>

      {/* N — left stroke */}
      <rect x="8" y="15" width="14" height="70" fill={fill} />
      {/* N — diagonal stroke */}
      <polygon points="22,15 36,15 64,85 50,85" fill={fill} />
      {/* Shared spine: N's right stroke / E's left stroke */}
      <rect x="50" y="15" width="14" height="70" fill={fill} />
      {/* E — arms */}
      <rect x="50" y="15" width="40" height="14" fill={fill} />
      <rect x="50" y="43" width="32" height="14" fill={fill} />
      <rect x="50" y="71" width="40" height="14" fill={fill} />

      {!simplified && (
        <>
          {/* trailing automation-node connector */}
          <line
            x1="90"
            y1="85"
            x2="99"
            y2="94"
            stroke={fill}
            strokeWidth="5"
            strokeLinecap="round"
          />
          <circle
            cx="103"
            cy="98"
            r="5"
            fill="none"
            stroke={fill}
            strokeWidth="5"
          />
        </>
      )}
    </>
  );
}

export function NEMark({
  id = "ne-mark",
  simplified = false,
  className,
}: {
  id?: string;
  simplified?: boolean;
  className?: string;
}) {
  return (
    <svg
      viewBox={NE_MARK_VIEWBOX}
      className={className}
      role="img"
      aria-label="Noriel Embudo — NE monogram"
    >
      <NEMarkShapes id={id} simplified={simplified} />
    </svg>
  );
}
