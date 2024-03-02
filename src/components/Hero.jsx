import React from 'react'

const Hero = () => {
  return (
    <section className='w-full h-[440px] bg-cover bg-center bg-no-repeat relative' style={{
        backgroundImage : `url(/assets/hero-image.png)`
    }}>
        <div id='gradient-overlay' className='h-full w-full bg-black/45'>
            <div className='absolute bottom-20 left-52 text-white'>
                <h1 className='text-4xl font-bold tracking-wide'>Computer Engineering</h1>
                <p className='text-lg font-light tracking-wide'>142,765 Computer Engineers follow this</p>
            </div>
        </div>
    </section>
  )
}

export default Hero