import React, { useState, useEffect } from "react";
import CookieSettingsModal from "./CookieSettingsModal";

const CookieConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookiesConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem(
      "cookiesConsent",
      JSON.stringify({ essential: true, analytics: true, marketing: true })
    );
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    localStorage.setItem(
      "cookiesConsent",
      JSON.stringify({ essential: true, analytics: false, marketing: false })
    );
    setIsVisible(false);
  };

  const handleSettings = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <div className="cookie-consent-banner">
        <div className="cookie-consent-content">
          <p>
            We use cookies to improve your experience on our site. For more
            information, check our <a href="/privacy">privacy policy</a>.
          </p>
          <button className="btn accept-btn" onClick={handleAcceptAll}>
            Accept All
          </button>
          <button className="btn reject-btn" onClick={handleRejectAll}>
            Reject All
          </button>
          <button className="btn settings-btn" onClick={handleSettings}>
            Cookie Settings
          </button>
        </div>
      </div>

      {/* Render the modal if it's visible */}
      <CookieSettingsModal isVisible={modalVisible} onClose={handleCloseModal} />
    </>
  );
};

export default CookieConsentBanner;
