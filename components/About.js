import React from 'react'
import Image from 'next/image'
import AboutImg from '../public/assets/about.jpeg';

const About = () => {
	return (
	<div id="about" className='w-full md:h-screen flex items-center py-16'>
		<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
			<div className="col-span-2">
			<h2 className="py-4">About Me</h2>
				<p className="py-2 text-gray-600">Over the course of 10 years I have developed a deep love for technology. I initially studied sound engineering and immediately loved the intersection of technology and utilizing tools to make solving problems easier. This eventually led me to desire being the one to design these tools, not just use them. I have attained a plethora of experience coding with a variety of programming languages, working directly with teams, and taking on leadership roles in various projects. I believe my strength lies in helping others become the best versions of themselves.</p>
				<p className="py-2 text-gray-600">I have just finished a 12 week software engineering immersive program, with General Assembly. In this journey I  have sharpened my skills and truly developed a passion for software engineering. Finding the solution to a problem, and then implementing that solution has become one of my favorite parts of being a developer. Throughout my time at General Assembly, I have been responsible for developing multiple full-stack web applications. This involved learning multiple new languages, back and front-end frameworks, and also honing my ability to thrive while working with others. I have discovered I have a penchant for learning these new skills and also helping others to learn those new skills as well.</p>
				<p className="py-2 text-gray-600">I am thrilled at the prospect of new oppurtunities where I can help bring tools to life that makes solving problems easier!</p>
			</div>
			<div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
				<Image className="rounded-xl" src={AboutImg} alt="/" />
			</div>
		</div>
	</div>

	)
}

export default About
