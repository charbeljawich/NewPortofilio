import React from "react";
import { useMediaQuery } from "react-responsive";
const TimeZone = () => {
  // Get Lebanon time
  const lebanonTime = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Beirut",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true
  }).format(new Date());

  const isMobile = useMediaQuery({ maxWidth: 650});
  return (
   <div
  className="grid-black-color grid-3 relative p-4"
  style={{
    backgroundImage: "url('assets/flag-for-flag-lebanon-svgrepo-com.svg')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top right", 
    backgroundSize: "50px 30px" 
  }}
>
  <p className="text-3xl">Time Zone</p>
  <p className="subtext text-gray-500">
    I'm based in Lebanon, current time: <span>{lebanonTime}</span>,{!isMobile && <br/>} and open to remote work worldwide.
  </p>
</div>


  );
};

export default TimeZone;
