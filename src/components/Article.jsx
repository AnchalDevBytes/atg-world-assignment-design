import React from 'react'
import ArticleCard from './ArticleCard'
import MeetupCard from './MeetupCard'
import JobCard from './JobCard'

const Article = () => {

  return (
    <div className=' lg:w-[70vw] w-full min-h-screen flex gap-5 flex-col'>
        <div>
            <ArticleCard
                imageSrc='/assets/card0.png'
                headline='What if famous brands had regular fonts? Meet RegulaBrands!'
                authorName='Sarthak Kamra'
                authorProfile='/public/assets/profile0.png'
                topTitle='✍️ Article'
            />
        </div>
        <ArticleCard 
            topTitle="🔬️ Education"
            imageSrc="/assets/card1.png"
            headline="Tax Benefits for Investment under National Pension Scheme launched by Government"
            authorName="Sarah West"
            authorProfile="/assets/profile1.png"
        />
        <MeetupCard/>
        <JobCard/>
    </div>
  )
}

export default Article