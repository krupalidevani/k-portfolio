import React, { useEffect, useState } from "react";

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Example: hide loader after 2s (replace with actual logic if needed)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="page-loader">
      <div className="loader-wrapper">
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default PageLoader;
