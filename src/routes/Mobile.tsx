import React from 'react'
import Header from '../components/mobile_page/Header'
import Hero from '../components/mobile_page/Hero'
import Hour from '../components/mobile_page/Hour'
import Day from '../components/mobile_page/Day'
import "../components/mobile_page/General.scss";

import {observer} from 'mobx-react';


const Mobile = observer (() => {
  return (
    <div className='mobile-container'>
      <div className="content-container">
        <Header />
        <Hero />
        <Hour />
        <Day />
      </div>
    </div>
  )
});

export default Mobile;