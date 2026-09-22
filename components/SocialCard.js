import { contact, role } from "@/data/site";

/**
 * The visual used for the social preview card (1200x630). Plain inline styles
 * because this is rendered by Satori, which needs an explicit flex model and
 * ignores stylesheets. Flat colours only, matching the site tokens.
 */
export default function SocialCard() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#0b1220",
        color: "#e8edf6",
        padding: "72px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "72px",
            height: "72px",
            marginRight: "20px",
            borderRadius: "16px",
            backgroundColor: "#1d4ed8",
            position: "relative",
          }}
        >
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              backgroundColor: "#ffffff",
              position: "absolute",
              top: "18px",
              left: "18px",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "999px",
              backgroundColor: "#ffffff",
              position: "absolute",
              right: "18px",
              bottom: "18px",
              opacity: 0.9,
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "18px",
              right: "18px",
              bottom: "18px",
              borderBottom: "4px solid rgba(255,255,255,0.9)",
              borderLeft: "4px solid transparent",
              borderRight: "4px solid transparent",
              transform: "rotate(180deg)",
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: "30px", fontWeight: 700 }}>
            {contact.name}
          </div>
          <div style={{ display: "flex", fontSize: "24px", color: "#939fb4" }}>
            {role}
          </div>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            fontSize: "62px",
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: "-1px",
            maxWidth: "920px",
          }}
        >
          Responsive web and mobile interfaces with React, Next.js, and React
          Native.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: "24px",
            fontSize: "26px",
            color: "#939fb4",
          }}
        >
          TypeScript / Tailwind CSS / API integration / Responsive design
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          borderTopWidth: "1px",
          borderTopStyle: "solid",
          borderTopColor: "#1f2734",
          paddingTop: "28px",
          fontSize: "24px",
          color: "#939fb4",
        }}
      >
        <div style={{ display: "flex" }}>{contact.githubLabel}</div>
        <div style={{ display: "flex" }}>{contact.email}</div>
      </div>
    </div>
  );
}
