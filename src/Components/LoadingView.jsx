import React from "react";

export default function LoadingView() {
  return (
    <section className="admin-profile">
      <div className="app-content content">
        <div
          className="content-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: `calc(100vh - 96px)`,
          }}
        >
          <i
            className="fas fa-circle-notch fa-spin"
            style={{ fontSize: 64 }}
          ></i>
        </div>
      </div>
    </section>
  );
}
