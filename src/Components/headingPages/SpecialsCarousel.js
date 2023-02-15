import React from 'react'
import LemonDessert from '../../img/lemon dessert.jpg'
import GreekSalad from '../../img/greeksalad.jpg'
import Bruschetta from '../../img/bruchetta.svg'
import SpecialCard from '../headingPages/CardInfo/SpecialCard'
import { Carousel } from 'react-responsive-carousel'

function SpecialsCarousel() {
  return (
    <div>
          <Carousel infiniteLoop={true} autoPlay={true} Interval={5000} showStatus={false}>
            <SpecialCard image={GreekSalad} name="Greek Salad" price="$12.99" description="Feta Cheese, tomato, lettuce"/>
            <SpecialCard image={Bruschetta}name="Bruschetta" price="$16.99" description="Bread, mango, green onions"/>
            <SpecialCard image={LemonDessert} name="Lemon Dessert" price="$8.50" description="Lemon bread, vanilla Icing"/>
        </Carousel>
    </div>
  )
}

export default SpecialsCarousel