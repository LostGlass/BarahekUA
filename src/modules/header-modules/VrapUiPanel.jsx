import React, { useState } from "react";
import UiPanel from "./UiPanel";
import ButtonCloseUiPanel from "./ButtonCloseUiPanel";
import ListAllergensUiPanel from "./ListAllergensUiPanel";
import TermsOfUseUiPanel from "./TermsOfUseUiPanel";
import PivacyPolicy from "./PrivacyPolicy";
import InformationAboutTheCompany from "./InformationAboutTheCompany";
import CookiePolicy from "./CookiePolicy";
function VrapUiPanel({ activeUiPanel, setActiveUiPanel }) {
  const [activeListOfAllergens, setActiveListOfAllergensUiPanel] =
    useState(false);
  const [activeTermsOfUseUiPanel, setActiveTermsOfUseUiPanel] = useState(false);
  const [activeUsefulInfo, setActiveUsefulInfo] = useState({
    privacyPolicy: false,
    informationAboutTheCompany: false,
    cookiePolicy: false,
  });

  return (
    <div
      className={
        activeUiPanel ? "uiPanel_background active" : "uiPanel_background"
      }>
      <ButtonCloseUiPanel
        setActiveUiPanel={setActiveUiPanel}
        activeUiPanel={activeUiPanel}
      />

      <div
        className="uiPanel_background_close_field"
        onClick={() => {
          setActiveUiPanel(false);
          setActiveListOfAllergensUiPanel(false);
        }}></div>
      <div className={activeUiPanel ? "uiPanel_vrap active" : "uiPanel_vrap"}>
        <UiPanel
          setActiveUsefulInfo={setActiveUsefulInfo}
          setActiveTermsOfUseUiPanel={setActiveTermsOfUseUiPanel}
          setActiveListOfAllergensUiPanel={setActiveListOfAllergensUiPanel}
        />
      </div>
      <TermsOfUseUiPanel
        activeTermsOfUseUiPanel={activeTermsOfUseUiPanel}
        setActiveTermsOfUseUiPanel={setActiveTermsOfUseUiPanel}
      />
      <PivacyPolicy
        setActiveUsefulInfo={setActiveUsefulInfo}
        activeUsefulInfo={activeUsefulInfo}
      />
      <InformationAboutTheCompany
        activeUsefulInfo={activeUsefulInfo}
        setActiveUsefulInfo={setActiveUsefulInfo}
      />
      <CookiePolicy
        activeUsefulInfo={activeUsefulInfo}
        setActiveUsefulInfo={setActiveUsefulInfo}
      />
      <ListAllergensUiPanel
        setActiveListOfAllergensUiPanel={setActiveListOfAllergensUiPanel}
        activeListOfAllergens={activeListOfAllergens}
      />
    </div>
  );
}
export default VrapUiPanel;
