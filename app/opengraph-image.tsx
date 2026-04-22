import { ImageResponse } from "next/og";
import { brand } from "@/lib/config";

export const alt = "Sebotics - Robotik, die operative Engpaesse messbar entlastet.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "linear-gradient(135deg, #030712 0%, #27092f 45%, #702080 100%)",
          color: "white",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div
          style={{
            color: "#b1c5eb",
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
          }}
        >
          Robotics Solution Partner
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: 920 }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
            {brand.primaryClaim}
          </div>
          <div style={{ color: "#d8e2f5", display: "flex", fontSize: 30, lineHeight: 1.35 }}>
            {brand.positioningStatement}
          </div>
        </div>
        <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
          <div style={{ color: "#d8e2f5", display: "flex", fontSize: 28 }}>{brand.website}</div>
          <div style={{ color: "#ffffff", display: "flex", fontSize: 34, fontWeight: 700 }}>{brand.name}</div>
        </div>
      </div>
    ),
    size
  );
}
