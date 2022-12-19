import React from 'react'
import About from '../Texts/About'
import Features from '../Texts/Features'
import Optimalization from '../Texts/Optimalization'
import Inspiration from '../Texts/Inspiration'

function Content() {
  return (
    <div className="Content">
        <About></About>
        <Features></Features>
        <Optimalization></Optimalization>
        <Inspiration></Inspiration>
    </div>
  )
}

export default Content