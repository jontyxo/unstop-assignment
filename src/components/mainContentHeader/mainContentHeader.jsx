import React, { useEffect, useState } from 'react'
import "./mainContentHeader.css"

const MainContentHeader = () => {
  const [isMobile, setIsMobile] = useState(false);
    
  useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
      };
  
      window.addEventListener('resize', handleResize);
      handleResize(); // Call the function on initial render
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  return (
    <div className="maincontentheader">
    {
      isMobile ? <div>Unstop Assessments</div>:
      <div>Assessment</div>

    }
        <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691777401/Vector_298_uqxswi.svg" />
        <div>My Assessments</div>
    </div>
  )
}

export default MainContentHeader