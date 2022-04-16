import React from 'react'
import Carousel from '../carousel/Carousel'
import Marquee from '../paginas/Marquee'



const pokemon = () => {


  return (

    <div className="carousel-container">

          <center>
          
          < Carousel/>
          <div>
            <Marquee/>
          </div>
      </center>
      </div>
  )
}

export default pokemon