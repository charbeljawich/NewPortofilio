import React, { useEffect, useState } from "react";
import { LoaderFour } from "./LoaderBefor";


const Preloader = ({ text = "CharbelJ..." }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500); // 2.5s preloader
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
      <LoaderFour/>
    </div>
  );
};

export default Preloader;
