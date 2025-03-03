import React, { useState } from "react";
import "./style/css/header.css";
import "./style/css/ui-panel.css";
import Header from "./modules/Header";
import VrapUiPanel from "./modules/VrapUiPanel";
import HeaderNavBar from "./modules/HeaderNavBar";
import HeaderRightMenu from "./modules/HeaderRightMenu";
import headerLogo from "./img/photo-header-logo/thumbnail_QCBpHrz-dRFCtZV-rhcTZPs_G-k-q(logoHeader).png";

function HeaderRender() {
  const [activeUiPanel, setActiveUiPanel] = useState(false);
  return (
    <div className="headeg_background">
      <VrapUiPanel
        activeUiPanel={activeUiPanel}
        setActiveUiPanel={setActiveUiPanel}
      />
      <div className="header_vrap_content">
        <Header headerLogo={headerLogo} />
        <HeaderRightMenu setActiveUiPanel={setActiveUiPanel} />
      </div>
      <HeaderNavBar />
    </div>
  );
}

export default HeaderRender;
