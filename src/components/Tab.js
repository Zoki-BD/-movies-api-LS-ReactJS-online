import React, { useState, useEffect } from 'react'



const Tab = ({ children, active = 0 }) => {

   const [activeTab, setActiveTab] = useState(active);
   const [tabsData, setTabsData] = useState([])

   console.log(children)

   useEffect(() => {
      let data = []

      React.Children.forEach(children, element => {
         if (!React.isValidElement(element)) return;

         const { props: { tab, children } } = element;
         data.push({ tab, children })
      })
      console.log(data)
      setTabsData(data)
   }, [children])



   return (
      <div className='w-100'>
         <ul className="nav nav-tabs">
            {
               tabsData.map(({ tab }, idx) => (

                  <li className="nav-item">
                     <a className={`nav-link ${idx === active ? 'active' : ""}`}
                        href="#"
                        onClick={() => setActiveTab(idx)}
                     >
                        {tab}

                     </a>
                  </li>
               ))
            }
         </ul>

         <div className="tab-content">
            {tabsData[activeTab] && tabsData[activeTab].children}
         </div>

      </div >
   )
}


const TabPanel = ({ children }) => {
   return { children }
}

Tab.TabPanel = TabPanel;

export default Tab;