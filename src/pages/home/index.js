import React, { useState } from 'react'
import Footer from '../../components/common/Footer/Footer';
import Header from '../../components/common/Header/Header';
import TabOpt from '../../components/common/TabOpt';
import Delivery from '../../components/delivery';
import NightLife from '../../components/nightLife';
import DineOut from '../../components/dineOut';
import Accordian from '../../components/common/Accordian';


const HomePage = () => {

  const [activeTab, setActiveTab] = useState("Delivery")


  return (

    <div className=''>
      <Header />
      <TabOpt activeTab={activeTab} setActiveTab={setActiveTab} />
      {getCorrectScreen(activeTab)}
      <div className="maxWidth accordian-wrapper">
        <div className="collection-title">
          Explore options near me
        </div>
        <Accordian />
      </div>
      <Footer />
    </div>
  )
}

const getCorrectScreen = (tab) => {
  switch (tab) {
    case "Delivery":
      return <Delivery />

    case "Dining Out":
      return <DineOut />

    case "Nightlife":
      return <NightLife />

    default:
      return <Delivery />
  }
}

export default HomePage;
