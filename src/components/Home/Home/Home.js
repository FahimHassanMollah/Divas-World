import React from 'react'
import Brand from '../Brand/Brand'
import CustomerReview from '../CustomerReview/CustomerReview'
import ExclusiveProduct from '../ExclusiveProduct/ExclusiveProduct'
import MiddleBanner from '../MiddleBanner/MiddleBanner'
import Slider from '../Slider/Slider'
import HeaderMain from '../Slider/Slider'
import SliderFooter from '../SliderFooter/SliderFooter'
import TopCollesction from '../TopCollection/TopCollesction'

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <SliderFooter></SliderFooter>
            <ExclusiveProduct></ExclusiveProduct>
            <MiddleBanner></MiddleBanner>
            <TopCollesction></TopCollesction>
            <CustomerReview></CustomerReview>
            <Brand></Brand>
        </div>
    )
}

export default Home
