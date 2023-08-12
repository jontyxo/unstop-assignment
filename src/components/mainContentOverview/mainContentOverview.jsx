import React from 'react'
import "./mainContentOverview.css"

const MainContentOverview = () => {
  return (
    <>
<div className="mobheadmco">
    <div>My Assessment</div>
    <div>
        <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691798806/search_viaonh.svg" />
        <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691798802/filter_list_alt_omxlkb.svg" />
        <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691798790/bar_chart_tdo5xv.svg" />
    </div>
</div>
    <div className="maincontentoverview">
        <div className="maincontentoverviewhead">Assessments Overview</div>
        <div className="maincontentoverviewmain">
            <div className="mcom">
                <div className='mc2head'>Total Assessment</div>
                <div className='mc2content'>
                    <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691779302/view_agenda_1_c2wrqm.svg" />
                    <span>34</span>
                </div>
            </div>
            <div className="mcom">
            <div className='mc2head'>Candidates</div>
            <div className='mc2content1'>
                <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691779320/Frame_1000009353_xx0bef.svg" />
                <div className='mc2content2'>

              
                    <div>
                        <p>11,145 <span>+89</span></p>
                        <span>Total Candidate</span>
                    </div>
                    <div>
                        <p>114 <span>+89</span></p>
                        <span>Who Attempted</span>
                    </div>
                
                </div>
            </div>

            </div>
            <div className="mcom">
            <div className='mc2head'>Candidates Soure</div>
           
            <div className='mc2content1'>
                <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691779317/Frame_1000005832_kvvw6f.svg" />
                <div className='mc2content2'>

                   
                    <div>
                        <p>11,000 <span>+89</span></p>
                        <span>E-mail</span>
                    </div>
                    <div>
                        <p>145 <span>+89</span></p>
                        <span>Social Share</span>
                    </div>
                    <div>
                        <p>145 <span>+89</span></p>
                        <span>Unique Link</span>
                    </div>
                    </div>
                
               
                
            </div>
        

            </div>
            <div className="mcom">
            <div className='mc2head'>Total Purpose</div>
            <div className='mc2content'>
                    <img src="https://res.cloudinary.com/dvjc0fusx/image/upload/v1691779314/Frame_1000009100_jcfxru.svg" />
                    <span>11</span>
                </div>

            </div>
        </div>
    </div>
    </>
  )
}

export default MainContentOverview