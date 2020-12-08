import React from 'react'
import ExclusiveProduct from '../ExclusiveProduct/ExclusiveProduct'
import Slider from '../Slider/Slider'
import HeaderMain from '../Slider/Slider'
import SliderFooter from '../SliderFooter/SliderFooter'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SliderFooter></SliderFooter>
            {/* <ExclusiveProduct></ExclusiveProduct> */}
        </div>
    )
}

export default Home
