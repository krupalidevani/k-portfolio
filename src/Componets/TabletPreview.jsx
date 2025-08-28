import React from 'react'
import HeroBanner from './HeroBanner'
import MarqueeText from './MarqueeText'
import About from './About'
import Services from './Services'
import Portfolio from './Portfolio'
import Resume from './Resume'

export default function TabletPreview() {
  return (
    <div>
      <div className="tablet-frame">
        <iframe src="/" title="Tablet Preview">
          <HeroBanner />
          <MarqueeText />
          <About />
          <Services />
          <Portfolio />
          <MarqueeText />
          <Resume />
        </iframe>
      </div>
    </div>
  )
}
