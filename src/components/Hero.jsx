import React from 'react'

const Hero = () => {
  return (
    <section className='w-full lg:h-[440px] h-[250px] bg-cover bg-center bg-no-repeat relative' style={{
        backgroundImage : `url(/assets/hero-image.png)`
    }}>
        <div id='gradient-overlay' className='h-full w-full bg-black/45'>
            <div className='absolute bottom-10 left-5 lg:bottom-20 lg:left-52 text-white'>
                <h1 className='lg:text-4xl text-xl font-bold lg:tracking-wide'>Computer Engineering</h1>
                <p className='lg:text-lg text-xs font-light lg:tracking-wide'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    </section>
  )
}

export default Hero