import React from 'react'
import Title from '../components/Title'
import { asset } from '../assets/frontend_assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-[600px] md:max-w-[-450px]' src={asset.about_img} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>Forever was born out of fashion for innovation and a desire to revolutionize the way people sho</p>
            <p>Forever was born out of fashion for innovation and a desire to revolutionize the way people sho</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission at Forever is to empower customers with choice, convenience, and </p>
          </div>
      </div>
      <div className='text-4xl py-4'>
            <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>

      </div>
    </div>
  )
}

export default About