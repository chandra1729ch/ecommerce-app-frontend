import React from 'react'
import Title from '../components/Title'
import { asset } from '../assets/frontend_assets/assets'
import NewsLetter from '../components/NewsLetter'

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
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Quality Assurance:</b>
                  <p className='text-gray-600'>We meticulously and vet each product to ensure it meets our stringent</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Convenience:</b>
                  <p className='text-gray-600'>We meticulously and vet each product to ensure it meets our stringent</p>
            </div>
            <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
                  <b>Exceptional Customer Service:</b>
                  <p className='text-gray-600'>We meticulously and vet each product to ensure it meets our stringent</p>
            </div>
      </div>
      <NewsLetter />
    </div>
  )
}

export default About