import React from 'react'
import Carousel from '../Carousel'
import AboutSection from '../AboutSection'
import HelpHand from '../HelpHand'
import Events from '../Events'
import Testimonial from '../Testimonial'
import Team from '../Team'
import Collaborate from '../Collaborate'

export default function Home() {
  return (
    <div>
        <Carousel/>
    <AboutSection/>
    <HelpHand/>
    <Events/>
    <Testimonial/>
    <Team/>
    <Collaborate/>
    </div>
  )
}
