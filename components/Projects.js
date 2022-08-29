import React from 'react'
import Image from 'next/image'
import restaurantImg from '../public/assets/restaurants.png'
import movieImg from '../public/assets/MovieTracker.png'
import sleepImg from '../public/assets/SleepTracker.png'
import golfAppImg from '../public/assets/golfAppTemp2.png'
import Link from 'next/link'
import ProjectItem from './Projectitem'

const Projects = () => {
		return (
			<div id="projects" className='w-full'>
				<div className='max-w-[1240px] mx-auto px-2 py-16'>
					<h2 className="py-4">Projects</h2>
					<div className='grid md:grid-cols-2 gap-8'>
					<ProjectItem title="Golf App" backgroundImg={golfAppImg}  projectUrl="/golf" tech={"React JS, JavaScript, Redux, Python, PostreSQL"}/>
					<ProjectItem title="Top Restaurants in The World" backgroundImg={restaurantImg} projectUrl="/restaurant" tech={"React, JavaScript, Mongoose, MongoDB"}/>
					<ProjectItem title="My Movie/TV Show Catalog" backgroundImg={movieImg} projectUrl="/movie" tech={"Express, MongoDB, Mongoose, Bcrypt, Skeleton/Normalize"}/>
					<ProjectItem title="Sleep Tracker" backgroundImg={sleepImg} projectUrl="/sleep" tech={"React, Pyton, PostreSQL, Bcrypt" }/>
					</div>
				</div>

			</div>
		)
}

export default Projects
