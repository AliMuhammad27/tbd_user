import React from "react";

export default function GalleryTabs({ setSelected, selected_tab }) {
  return (
    <header
      className="MuiPaper-root MuiAppBar-root MuiAppBar-positionStatic MuiAppBar-colorPrimary MuiPaper-elevation4"
      style={{ marginTop: 30, marginBottom: 30 }}
    >
      <div
        className="MuiTabs-root Gallery-Tabs"
        style={{
          backgroundColor: "white",
          color: "black",
          boxShadow: "none",
        }}
      >
        <div
          className="MuiTabs-scroller MuiTabs-fixed"
          style={{ overflow: "hidden" }}
        >
          <div
            aria-label="simple tabs example"
            className="MuiTabs-flexContainer MuiTabs-centered"
            role="tablist"
          >
            <button
              className={`MuiButtonBase-root MuiTab-root MuiTab-textColorInherit left-btn-tab ${
                selected_tab === 1 && "Mui-selected"
              }`}
              tabIndex={0}
              type="button"
              role="tab"
              aria-selected="true"
              id="simple-tab-0"
              aria-controls="simple-tabpanel-0"
              onClick={() => setSelected(1)}
            >
              <span className="MuiTab-wrapper">IMAGES</span>
              <span className="MuiTouchRipple-root" />
            </button>
            <button
              className={`MuiButtonBase-root MuiTab-root MuiTab-textColorInherit right-btn-tab ${
                selected_tab === 2 && "Mui-selected"
              }`}
              tabIndex={-1}
              type="button"
              role="tab"
              aria-selected="false"
              id="simple-tab-1"
              aria-controls="simple-tabpanel-1"
              onClick={() => setSelected(2)}
            >
              <span className="MuiTab-wrapper">VIDEOS</span>
              <span className="MuiTouchRipple-root" />
            </button>
          </div>
          <span
            className="jss2 jss4 MuiTabs-indicator"
            style={{ left: "405px", width: "160px" }}
          />
        </div>
      </div>
    </header>
  );
}
