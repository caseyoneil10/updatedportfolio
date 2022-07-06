import React from 'react'
import sleepImg from '../public/assets/SleepTracker.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const sleep = () => {

	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
					<Image className='absolute z-1' layout='fill' objectFit='cover' src={sleepImg} alt='/'/>
					<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
						<h2 className='py-2'>Sleep Tracker</h2>
						<h3>React / Etc. / Etc.</h3>
					</div>
				</div>
					<div className='max-w-[1240px] mx-autp p-2 grid md:grid-cols-5 gap-8 pt-8'>
						<div className='col-span-4'>
							<p>Project</p>
							<h2>Overview</h2>
							<p>This app was built using a front-end of React JS with a fully implemented back-end of Python, Django and PostreSQL .

					Keep Track of your sleep to see if you are where you need to be!

					Users can log in to track sleep. They can delete and edit their records and also are given statistics with how they are comparing to people their age. Check it out!</p>
					<a href="https://protected-hamlet-59115.herokuapp.com/" rel="noreferrer">
							<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
					</a>
					<a href="https://github.com/caseyoneil10/sleep_front_end" rel="noreferrer">
							<button className='px-8 py-2 mt-4'>Code</button>
					</a>
							</div>
							<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
							<div className="p-2">
							<p className="text-center font-bold pb-2">Technologies</p>
							<div className='grid grid-cols-3 md:grid-cols-1'>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>React</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>JavaScript</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Python</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Django</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Bcrypt</p>
							</div>
							</div>
							</div>
							<Link href='/#projects'>
								<h2 className='hover:underline cursor-pointer'>Back</h2>
							</Link>
						</div>


			</div>

	)
}

export default sleep
