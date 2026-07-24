import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  const id = "apple-icon";
  const fill = `url(#${id}-gradient)`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05060B",
        }}
      >
        <svg viewBox="0 0 110 110" width="120" height="120" style={{ display: "flex" }}>
          <defs>
            <linearGradient id={`${id}-gradient`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4F7CFF" />
              <stop offset="100%" stopColor="#9B5DFF" />
            </linearGradient>
          </defs>
          <rect x="8" y="15" width="14" height="70" fill={fill} />
          <polygon points="22,15 36,15 64,85 50,85" fill={fill} />
          <rect x="50" y="15" width="14" height="70" fill={fill} />
          <rect x="50" y="15" width="40" height="14" fill={fill} />
          <rect x="50" y="43" width="32" height="14" fill={fill} />
          <rect x="50" y="71" width="40" height="14" fill={fill} />
          <line x1="90" y1="85" x2="99" y2="94" stroke={fill} strokeWidth="5" strokeLinecap="round" />
          <circle cx="103" cy="98" r="5" fill="none" stroke={fill} strokeWidth="5" />
        </svg>
      </div>
    ),
    { ...size }
  );
}
