import { ImageResponse } from "next/og";

export const alt = "Foris — Nederlandstalige aankoopbegeleiding aan de Costa del Azahar";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#f5efe6",
          display: "flex",
          flexDirection: "column",
          padding: 72,
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Decorative bar top */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 8,
            background: "#c9603a",
            display: "flex",
          }}
        />

        {/* Brand mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 56,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              background: "#c9603a",
              color: "#f5efe6",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 36,
              fontWeight: 600,
              borderRadius: 12,
            }}
          >
            F
          </div>
          <div
            style={{
              color: "#0e2436",
              fontSize: 36,
              fontWeight: 500,
              letterSpacing: "-0.02em",
            }}
          >
            Foris
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            color: "#0e2436",
            fontSize: 72,
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            maxWidth: 1000,
            display: "flex",
          }}
        >
          Een huis kopen in Spanje zonder de typische valkuilen.
        </div>

        {/* Sub line */}
        <div
          style={{
            marginTop: 32,
            color: "#0e2436",
            opacity: 0.7,
            fontSize: 32,
            fontFamily: "sans-serif",
            display: "flex",
          }}
        >
          Van NIE tot notaris, in het Nederlands geregeld.
        </div>

        {/* Footer band */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#5a6e3a",
            fontSize: 22,
            fontFamily: "sans-serif",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Costa del Azahar · Castellón</div>
          <div style={{ display: "flex" }}>vdmforis.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
