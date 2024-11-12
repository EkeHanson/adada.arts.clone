import React, { useEffect } from 'react';

const TrustpilotScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = `
      (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
        var a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;
        var f=d.getElementsByTagName(s)[0];
        f.parentNode.insertBefore(a,f);
      })(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
      tp('register', 'oDOeinLKm67kEhBB');
    `;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI elements needed here
};

export default TrustpilotScript;
