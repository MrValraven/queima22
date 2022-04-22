import React from 'react'

import './styles.scss'
import Image from '../../assets/artista.png'
import Countdown from '../Countdown/Countdown'

const Hero = () => {
  return (
    <div className='hero'>
      <main>
        <div className='heroText'>
          <h2>--- 3 a 12 de Junho ---</h2>
          <h1>Queima das Fitas'22</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius dicta provident voluptates ipsum nisi hic tempore, ratione ipsam cupiditate aspernatur?</p>
          <a>Arranja já os teus bilhetes &#62;</a>
        </div>
        <div className='heroImage'>
          <img src={Image} alt="" />
        </div>
      </main>
      <Countdown />
    </div>
  )
}

export default Hero