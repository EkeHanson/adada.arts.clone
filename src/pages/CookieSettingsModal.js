import React, { useState } from "react";

const CookieSettingsModal = ({ isVisible, onClose }) => {
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });

  const handlePreferenceChange = (e) => {
    const { name, checked } = e.target;
    setPreferences({
      ...preferences,
      [name]: checked,
    });
  };

  const handleSavePreferences = () => {
    // Save preferences in localStorage
    localStorage.setItem("cookiesConsent", JSON.stringify(preferences));
    // Close the modal
    onClose();
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-settings-modal">
      <div className="modal-content">
        <h2>Cookie Preferences</h2>
        <p>Manage your cookie settings below:</p>

        <form>
          <div className="cookie-category">
            <label>
              <span>
                <input
                  type="checkbox"
                  name="essential"
                  checked={preferences.essential}
                  disabled
                />
                <strong>Essential Cookies</strong> (Always Enabled)
              </span>
              <p>These cookies are necessary for the website to function.</p>
            </label>
          </div>

          <div className="cookie-category">
            <label>
              <span>
                <input
                  type="checkbox"
                  name="analytics"
                  checked={preferences.analytics}
                  onChange={handlePreferenceChange}
                />
                <strong>Analytics Cookies</strong>
              </span>
              <p>These cookies help us understand how visitors interact with the site.</p>
            </label>
          </div>

          <div className="cookie-category">
            <label>
              <span>
                <input
                  type="checkbox"
                  name="marketing"
                  checked={preferences.marketing}
                  onChange={handlePreferenceChange}
                />
                <strong>Marketing Cookies</strong>
              </span>
              <p>These cookies are used to track visitors across websites to show relevant ads.</p>
            </label>
          </div>
        </form>

        <div className="modal-buttons">
          <button className="btn save-btn" onClick={handleSavePreferences}>
            Save Preferences
          </button>
          <button className="btn close-btn" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieSettingsModal;
