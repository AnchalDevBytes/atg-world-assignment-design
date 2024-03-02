import React from 'react'
import ArticleNav from './ArticleNav'
import Article from './Article'
import Recommendation from './Recommendation'

const MainSection = () => {
  return (
    <div className='min-h-screen py-4 lg:py-8 lg:mx-[15vw]'>
        <ArticleNav/>
        <div className=' flex gap-[7vw] justify-between lg:mt-8'>
        <Article/>
        <Recommendation/>
        </div>
    </div>
  )
}

export default MainSection