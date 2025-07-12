// components/TawkToWidget.js
'use client'
import { useEffect } from 'react';

const TawkToWidget = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      // Declare the global variables as per official script
      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const script = document.createElement("script");
      script.src = "https://embed.tawk.to/68690fdd6cb57719187346e6/1ivd6bv79";
      script.async = true;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");

      document.body.appendChild(script);

      // Optional cleanup
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return null;
};

export default TawkToWidget;
