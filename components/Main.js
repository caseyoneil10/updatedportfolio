import React from 'react'
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from 'react-icons/ai'
import {FaGithub, FaLinkedinIn} from 'react-icons/fa'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const Main = () => {
	return (
	<div id="home" className="w-full h-screen text-center">
		<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
			<div>
						<br/>
						<br/>
						<br/>
							<h1 className="py-4 text-gray-700"><span className="text-[#c13f3f]"> Casey O&apos;Neil</span></h1>
							<h1 className="py-4 text-gray-700">
							Software Developer</h1>
							<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
								I am a Software Developer with a passion for Full-Stack Development who loves solving problems with JavaScript, React, PostreSQL, as well as noSQL databases. I have 10+ years of  sales and customer service experience which have taught me the power of communicating a problem, and then also quickly and efficiently solving said problem.
							</p>
							<p className='py-4 text-gray-600 max-w-[70%] m-auto'>
								I thrive when navigating stressful, high stakes environments where my organization skills, and ability to bring levity to situations ensures that the energy of the team is not affected, and we achieve the optimum result together. I am looking forward to working in an environment where I can not only achieve my highest potential and contribute to solving problems, but also help others in solving problems, while elevating my team members to achieve their fullest potential.
							</p>
					<div className='flex items-center justify-between max-w-[330px] m-auto py-4]'>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href="https://www.linkedin.com/in/caseyoneil10/" >
							<FaLinkedinIn/>
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href="https://github.com/caseyoneil10" >
							<FaGithub/>
							</a>
						</div>
						<div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300'>
							<a href="https://docs.google.com/document/d/1wjMyvwiGhIaUhHXTxRWyameZikA-HiWLRDHDEVUQM7Q/edit?usp=sharing" >
							<BsFillPersonLinesFill/>
							</a>
					</div>
				</div>
			</div>
		</div>
	</div>
	)
}


export default Main;
