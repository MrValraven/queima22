import React from 'react'

import './styles.scss'

const Countdown = () => {
  return (
    <div className='countdown'>
        <div>
            <p>5 dias</p>
        </div>
        <div>
            <p>23 horas</p>
        </div>
        <div>
            <p>45 minutos</p>
        </div>
        <div>
            <p>22 segundos</p>
        </div>
    </div>
  )
}

export default Countdown