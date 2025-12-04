import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "9999px",
          background:
            "radial-gradient(circle at 30% 20%, #22d3ee 0, #0f172a 60%)",
          color: "#e5f6ff",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: "0.18em",
        }}
      >
        TS
      </div>
    ),
    {
      ...size,
    }
  );
}


