import React, { useEffect, useState } from 'react'
import "./mainContentCard.css"

const MainContentCard = () => {
    const [formActive,setFormActive] =useState(true);
  const [isMobile, setIsMobile] = useState(false);
    
    const formHandler=()=>{
        setFormActive(!formActive);
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
  return (
    <>

    <div className="maincontentcard">
        <div className='maincontentcardhead'>My Assessment</div>
        <div className='maincontentcardcontent'>
            <div className='maincontentcardadder' onClick={formHandler}>
            <div>

                <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691783763/add_zmkbre.svg" />
            </div>
                <span>New Assessment</span>
                <p>From here you can add questions of multiple types like MCQs, subjective (text or paragraph)!</p>
            </div>
            <div className="maincontentcard1">
                <div className='maincontentcard1sub'>
                    <div>
                        <div><img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691786374/Frame_1000008703_uct9bi.svg" /></div>
                        <div>
                            <div className='mcshead'>Math Assessment</div>
                            <div className='mcscontent'>
                                <span>Job</span>
                                <span>
                                 <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691787527/calendar_today_atqies.svg" />20 Apr 2023</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691786653/Group_6_xpioet.svg" />
                    </div>
                </div>

                <div className="maincontentcard2sub">
                    <div>
                        <span>00 Duration</span>
                        <span>00 Questions</span>
                    </div>
                    <div>
                    <span><img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691789309/link_bvjenj.svg" /><p>Share</p></span>
                        <span><p>LP</p></span>
                    </div>
                </div>
            </div>
            <div className="maincontentcard1">
                <div className='maincontentcard1sub'>
                    <div>
                        <div><img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691786374/Frame_1000008703_uct9bi.svg" /></div>
                        <div>
                            <div className='mcshead'>Math Assessment</div>
                            <div className='mcscontent'>
                                <span>Job</span>
                                <span>
                                 <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691787527/calendar_today_atqies.svg" />20 Apr 2023</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691786653/Group_6_xpioet.svg" />
                    </div>
                </div>

                <div className="maincontentcard2sub">
                    <div>
                        <span>00 Duration</span>
                        <span>00 Questions</span>
                    </div>
                    <div>
                    <span><img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691789309/link_bvjenj.svg" /><p>Share</p></span>
                        <span><p>LP</p></span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className={`overlay ${formActive ? '':'show'}`}>

    <div className={`formDiv ${formActive ? '':'show'}`} id="fade-in">
<div className='formHead'>
{ isMobile?<span>Sub-Section Details</span>:<span>Create new assessment </span>}
{
isMobile ? 
<img onClick={formHandler} src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691800379/cut_2_v4yl6t.svg" />
:
<img onClick={formHandler} src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691794815/cut_pzsmdc.svg" />
}
</div>
    <form>
    <label>Name of assessment</label>
    <input placeholder="Type Here" />

    <label>Purpose of the test is</label>
    <select>
    <option value="" disabled selected>Select</option>

  <option >Dummy 1</option>
  <option>Dummy 2</option>
  <option >Dummy 3</option>
  <option>Dummy 4</option>
</select>

    <label>Description</label>
    <select>
    <option value="" disabled selected>Select</option>

    <option >Dummy 1</option>
  <option>Dummy 2</option>
  <option >Dummy 3</option>
  <option>Dummy 4</option>
</select>

    <label>Skills</label>
    <input placeholder="Type Here" />

    <label className='labellast'>Duration of assessment</label>
    <input className='labellast' placeholder="HH:MM:SS" />

<button>
{ isMobile?<span>Next</span>:<span>Save </span>}

</button>
</form>
</div>
    </div>
    </>
  )
}

export default MainContentCard