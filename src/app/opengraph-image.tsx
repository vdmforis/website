import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "VDM Foris · Onderhoud en woningbeheer rond Castellón";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BLACK = "#111111";
const LIGHT_GREY = "#e5e5e5";

export default async function OpenGraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public/brand/vdm-foris-logo-white.png"),
    "base64",
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BLACK,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <img src={`data:image/png;base64,${logo}`} height={250} alt="VDM Foris" />

        <div
          style={{
            marginTop: 56,
            color: "#ffffff",
            fontSize: 54,
            fontWeight: 600,
            letterSpacing: "-0.01em",
            display: "flex",
          }}
        >
          Onderhoud en woningbeheer rond Castellón
        </div>

        <div
          style={{
            position: "absolute",
            bottom: 48,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            color: LIGHT_GREY,
            fontSize: 22,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          <div style={{ display: "flex" }}>Grau de Castellón · Castellón · Benicàssim</div>
          <div style={{ display: "flex" }}>vdmforis.com</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
