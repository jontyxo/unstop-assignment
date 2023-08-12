import React, { useEffect, useState } from 'react';
import './navbar.css'; // Import your CSS file

function Navbar() {
  const [activeItem, setActiveItem] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuClose] = useState(false);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };
  const handleMenuState = () => {
    setIsMenuClose(!isMenuOpen);
  }
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

  const navbarItems = [
    { label: 'Dashboard', icon: 'https://res.cloudinary.com/dvjc0fusx/image/upload/v1691761035/dashboard_xovrot.svg' },
    { label: 'Assessment', icon: 'https://res.cloudinary.com/dvjc0fusx/image/upload/v1691761032/note_alt_ygyau9.svg' },
    { label: 'My Library', icon: 'https://res.cloudinary.com/dvjc0fusx/image/upload/v1691761029/quiz_xugzai.svg' },
    { label: 'Admin', icon: 'https://res.cloudinary.com/dvjc0fusx/image/upload/v1691761783/Vector_267_ewfhxd.svg', className: 'adminspan' },
    { label: 'Round Status', icon: 'https://res.cloudinary.com/dvjc0fusx/image/upload/v1691760893/admin_meds_pxohh9.svg' },
  ];

  return (
    <>
      
    {
      isMobile ? (
        <div className="mobnavbr">
      {isMenuOpen ? (<div className={`menuMob ${isMenuOpen ? 'showMobMenu':''}`}>
        <div className="menuMobshowhead">
        <span>Menu</span>
        <img onClick={handleMenuState}  src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691820929/cut_3_ncb7g0.svg" />

        </div>
        <div>
        <div className="navbar">
      <div className="navbaritemcontainer">
        {navbarItems.map((item, index) => (
          <div
            key={index}
            className={`navbaritem ${activeItem === index ? 'activeNav' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <img
              src={item.icon}
              alt={item.label}
            />
            <span className={item.className}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
        </div>
        
        
      </div>) 
      :
      (<div className="hamburgerparent">

        <div className="hamburgerimgdiv">
        <img className='hamburgerimg' onClick={handleMenuState} src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691770191/segment_fdz21z.svg" />
        </div>
        <span className='hamburgerspan'>Assessment</span>
      </div>
        )}
      </div>)
      :(

   
    <div className="navbar">
      <div className="navbaritemcontainer">
        {navbarItems.map((item, index) => (
          <div
            key={index}
            className={`navbaritem ${activeItem === index ? 'activeNav' : ''}`}
            onClick={() => handleItemClick(index)}
          >
            <img
              src={item.icon}
              alt={item.label}
            />
            <span className={item.className}>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
       )
      }
    </>
  );
}

export default Navbar;
