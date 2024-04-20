import * as React from 'react'
import CategoryGrid from '../components/GridCategory'
import Header from '../components/Header'
import AdvancedCarousel from '../components/Carousel'

function HomePage() {

  return (
    <>
      <Header/>
      <AdvancedCarousel/>
      <CategoryGrid />
      
    </>
  )
}

export default HomePage