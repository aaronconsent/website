import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0b1424 0%, #0f2239 55%, #0c2f2a 100%)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "96px",
          color: "#f8fafc",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "28px",
            textTransform: "uppercase",
            letterSpacing: "0.35em",
            color: "#86efac",
          }}
        >
          Consent Resolve
        </div>
        <div style={{ fontSize: "64px", fontWeight: 600, marginTop: "24px" }}>
          {siteConfig.description}
        </div>
        <div
          style={{
            marginTop: "32px",
            fontSize: "24px",
            color: "#a7b0c0",
          }}
        >
          Privacy-first visitor identification technology.
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}
