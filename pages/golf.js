import React from 'react'
import golfImg from '../public/assets/golfAppTemp2.png'
import Image from 'next/image'
import {RiRadioButtonFill} from 'react-icons/ri'
import Link from 'next/link'

const golf = () => {

	return (
		<div className='w-full'>
			<div className='w-screen h-[30vh] lg:h-[40vh] relative'>
				<div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10'/>
					<Image className='absolute z-1' layout='fill' objectFit='cover' src={golfImg} alt='/'/>
					<div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
						<h2 className='py-2'>Golf Score Tracker</h2>
						<h3>React / Redux / Etc.</h3>
					</div>
				</div>
					<div className='max-w-[1240px] mx-autp p-2 grid md:grid-cols-5 gap-8 pt-8'>
						<div className='col-span-4'>
							<h2>Gole Score Tracker</h2>
							<p>   This app was built using a front-end of React JS with a fully implemented back-end of Django and PostreSQL.

						Users are able to track their current round of golf on whichever course the choose.

						Users can store their rounds in the database for future reference!

						On each hole of the course users will be able to view statistics based on their past performance of each round. Please take a look! </p>
							<a href="https://evening-spire-15204.herokuapp.com/" target='_blank' rel="noopener noreferrer">
								<button className='px-8 py-2 mt-4 mr-8'>Demo</button>
							</a>
							<a href="https://github.com/caseyoneil10/golf_app_front_end" target='_blank' rel="noopener noreferrer">
								<button className='px-8 py-2 mt-4'>Code</button>
							</a>
							</div>
							<div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
							<div className="p-2">
							<p className="text-center font-bold pb-2">Technologies</p>
							<div className='grid grid-cols-3 md:grid-cols-1'>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>React</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Redux</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Python</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Django</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>PostgreSQL</p>
								<p className="text-gray-600 py-2 flex items-center"><RiRadioButtonFill className="pr-1"/>Skeleton CSS</p>
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

export default golf
