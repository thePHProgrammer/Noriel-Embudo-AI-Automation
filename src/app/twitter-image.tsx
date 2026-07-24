import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const markId = "twitter-mark";
const markFill = `url(#${markId}-gradient)`;

export default function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          background:
            "linear-gradient(135deg, #05060B 0%, #0C0F1A 60%, #0a0e1f 100%)",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(155,93,255,0.35) 0%, rgba(79,124,255,0) 70%)",
            display: "flex",
          }}
        />
        <svg
          viewBox="0 0 110 110"
          width="96"
          height="96"
          style={{ display: "flex", marginBottom: 36 }}
        >
          <defs>
            <linearGradient id={`${markId}-gradient`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4F7CFF" />
              <stop offset="100%" stopColor="#9B5DFF" />
            </linearGradient>
          </defs>
          <rect x="8" y="15" width="14" height="70" fill={markFill} />
          <polygon points="22,15 36,15 64,85 50,85" fill={markFill} />
          <rect x="50" y="15" width="14" height="70" fill={markFill} />
          <rect x="50" y="15" width="40" height="14" fill={markFill} />
          <rect x="50" y="43" width="32" height="14" fill={markFill} />
          <rect x="50" y="71" width="40" height="14" fill={markFill} />
          <line x1="90" y1="85" x2="99" y2="94" stroke={markFill} strokeWidth="5" strokeLinecap="round" />
          <circle cx="103" cy="98" r="5" fill="none" stroke={markFill} strokeWidth="5" />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 700,
            color: "#E7E9F5",
            marginBottom: 16,
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 32,
            color: "#8A8FA3",
            marginBottom: 28,
          }}
        >
          {siteConfig.role}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#B9C0E0",
          }}
        >
          n8n · GoHighLevel · LangGraph · AWS Bedrock · FastAPI
        </div>
      </div>
    ),
    { ...size }
  );
}
