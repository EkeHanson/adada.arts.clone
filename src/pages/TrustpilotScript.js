// import React, { useEffect } from 'react';

// const TrustpilotScript = () => {
//   useEffect(() => {
//     const script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.async = true;
//     script.innerHTML = `
//       (function(w,d,s,r,n){w.TrustpilotObject=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments)};
//         var a=d.createElement(s);a.async=1;a.src=r;a.type='text/java'+s;
//         var f=d.getElementsByTagName(s)[0];
//         f.parentNode.insertBefore(a,f);
//       })(window,document,'script', 'https://invitejs.trustpilot.com/tp.min.js', 'tp');
//       tp('register', 'oDOeinLKm67kEhBB');
//     `;
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return null; // No visible UI elements needed here
// };

// export default TrustpilotScript;


import React, { useEffect } from 'react';

const TrustpilotWidget = () => {
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

  return (
    <div
      className="trustpilot-widget"
      data-locale="en-US"
      data-template-id="YOUR_TEMPLATE_ID" // Replace with actual template ID
      data-businessunit-id="oDOeinLKm67kEhBB" // Replace with your business ID if different
      data-style-height="24px"
      data-style-width="100%"
      data-theme="light"
    >
      {/* Fallback content */}
      <a href="https://www.trustpilot.com/review/artstraining.co.uk" target="_blank" rel="noopener noreferrer">
        Check out our Trustpilot reviews
      </a>
    </div>
  );
};

export default TrustpilotWidget;
